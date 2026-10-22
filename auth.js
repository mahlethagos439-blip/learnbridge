
(()=>{
  const root = document.getElementById('auth-root');
  const shell = document.getElementById('learnbridge-shell');
  const cfg = window.LB_FIREBASE_CONFIG || {};
  const configured = Boolean(
    cfg.apiKey && cfg.projectId && cfg.appId &&
    !cfg.apiKey.includes('PASTE_') &&
    !cfg.projectId.includes('PASTE_') &&
    !cfg.appId.includes('PASTE_')
  );

  let mode = 'signup';
  let busy = false;

  function screen() {
    shell.hidden = true;

    root.innerHTML = `
      <main class="auth-page">
        <section class="auth-card">
          <div class="auth-brand">
            <span class="auth-logo">🔷</span>
            <div>
              <h1>Welcome to LearnBridge</h1>
              <p>Learn Today. Build Tomorrow.</p>
            </div>
          </div>

          <p class="auth-intro">
            Create your learner account to continue.
            Your account lets you sign in again on this or another device.
          </p>

          <div class="auth-tabs">
            <button type="button" data-mode="signup"
              class="${mode === 'signup' ? 'selected' : ''}">
              Create account
            </button>
            <button type="button" data-mode="signin"
              class="${mode === 'signin' ? 'selected' : ''}">
              Sign in
            </button>
          </div>

          <form id="auth-form">
            ${mode === 'signup' ? `
              <label for="auth-name">Full name</label>
              <input id="auth-name" name="name" autocomplete="name"
                maxlength="80" required placeholder="Your name">
            ` : ''}

            <label for="auth-email">Email address</label>
            <input id="auth-email" name="email" type="email"
              autocomplete="email" required placeholder="you@example.com">

            <label for="auth-password">Password</label>
            <div class="auth-password-wrap">
              <input id="auth-password" name="password" type="password"
                minlength="6"
                autocomplete="${mode === 'signup' ? 'new-password' : 'current-password'}"
                required placeholder="Your LearnBridge password">
              <button type="button" id="toggle-password"
                class="auth-eye" aria-label="Show password"
                aria-pressed="false">👁️</button>
            </div>

            ${mode === 'signup' ? `
              <p class="auth-hint">
                Use a password you do not use for other accounts.
              </p>
            ` : ''}

            <button class="auth-primary" type="submit">
              ${mode === 'signup' ? 'Create account with email' : 'Sign in with email'}
            </button>

            <div class="auth-divider"><span>or</span></div>

            <button class="auth-google" type="button"
              data-auth-action="google">Continue with Google</button>

            <p id="auth-message" class="auth-message" role="status"
              aria-live="polite"></p>
          </form>

          <p class="auth-privacy">
            By continuing, you agree to use LearnBridge responsibly.
            Do not share your password with anyone.
          </p>
        </section>
      </main>`;

    root.querySelectorAll('[data-mode]').forEach(button => {
      button.addEventListener('click', () => {
        if (busy) return;
        mode = button.dataset.mode;
        screen();
      });
    });

    root.querySelector('#auth-form').addEventListener('submit', submit);

    root.querySelector('[data-auth-action="google"]')
      .addEventListener('click', google);

    const passwordInput = root.querySelector('#auth-password');
    const eyeButton = root.querySelector('#toggle-password');

    eyeButton.addEventListener('click', () => {
      const show = passwordInput.type === 'password';
      passwordInput.type = show ? 'text' : 'password';
      eyeButton.textContent = show ? '🙈' : '👁️';
      eyeButton.setAttribute(
        'aria-label',
        show ? 'Hide password' : 'Show password'
      );
      eyeButton.setAttribute('aria-pressed', String(show));
    });
  }

  function message(text, error = true) {
    const element = document.getElementById('auth-message');
    if (element) {
      element.textContent = text;
      element.classList.toggle('error', error);
    }
  }

  function errText(error) {
    const messages = {
      'auth/email-already-in-use':
        'This email already has an account. Choose Sign in.',
      'auth/invalid-email':
        'Please enter a valid email address.',
      'auth/weak-password':
        'Choose a stronger password with at least 6 characters.',
      'auth/user-not-found':
        'No account was found. Check your email or create an account.',
      'auth/wrong-password':
        'The email or password is incorrect.',
      'auth/invalid-credential':
        'The email or password is incorrect. If you registered with Google, use Continue with Google.',
      'auth/popup-closed-by-user':
        'Google sign-in was closed before finishing.',
      'auth/unauthorized-domain':
        'This website domain is not authorized in Firebase.',
      'auth/operation-not-allowed':
        'This sign-in method is not enabled in Firebase.',
      'auth/network-request-failed':
        'Connection failed. Check your internet and try again.',
      'auth/too-many-requests':
        'Too many attempts. Please wait a while before trying again.'
    };

    return messages[error?.code] ||
      `Sign-in failed (${error?.code || 'unknown error'}). Check your connection and try again.`;
  }

  async function submit(event) {
    event.preventDefault();

    if (busy) return;

    const form = event.currentTarget;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value;
    const name = form.elements.name?.value.trim() || '';
    const button = form.querySelector('.auth-primary');

    if (!email || !password) {
      message('Please enter both your email and password.');
      return;
    }

    busy = true;
    button.disabled = true;
    button.textContent = 'Please wait…';
    message('Connecting securely to LearnBridge…', false);

    try {
      if (mode === 'signup') {
        const credential = await firebase.auth()
          .createUserWithEmailAndPassword(email, password);

        if (name) {
          await credential.user.updateProfile({ displayName: name });
        }

        await credential.user.sendEmailVerification();

        mode = 'signin';
        screen();
        message(
          'Account created. Check your email for the verification link, then sign in.',
          false
        );
      } else {
        const credential = await firebase.auth()
          .signInWithEmailAndPassword(email, password);

        if (!credential.user.emailVerified) {
          await firebase.auth().signOut();
          message(
            'Please verify your email first. Open the verification email sent when you registered.'
          );
          return;
        }
      }
    } catch (error) {
      message(errText(error));
    } finally {
      busy = false;
      const currentButton = root.querySelector('.auth-primary');
      if (currentButton) {
        currentButton.disabled = false;
        currentButton.textContent =
          mode === 'signup' ? 'Create account with email' : 'Sign in with email';
      }
    }
  }

  async function google() {
    if (busy) return;

    busy = true;
    message('Connecting to Google…', false);

    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      message(errText(error));
    } finally {
      busy = false;
    }
  }

  document.addEventListener('click', async event => {
    const button = event.target.closest('[data-auth-action="signout"]');
    if (button) {
      try {
        await firebase.auth().signOut();
      } catch (_) {
        alert('Could not sign out. Please try again.');
      }
    }
  });

  if (!root || !shell) return;

  if (!configured || !window.firebase) {
    root.innerHTML = `
      <main class="auth-page">
        <section class="auth-card">
          <h1>LearnBridge setup problem</h1>
          <p>Firebase configuration or its authentication library did not load. Check your internet connection and deployment.</p>
        </section>
      </main>`;
    shell.hidden = true;
    return;
  }

  try {
    firebase.initializeApp(cfg);

    firebase.auth().onAuthStateChanged(user => {
      if (user && user.emailVerified) {
        window.LB_AUTH_USER = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          provider: user.providerData?.[0]?.providerId || 'password'
        };

        root.innerHTML = '';
        shell.hidden = false;
        window.dispatchEvent(new CustomEvent('lb-auth-changed'));

        if (typeof window.lbRenderProfile === 'function') {
          window.lbRenderProfile();
        }
      } else {
        window.LB_AUTH_USER = null;
        screen();
      }
    }, error => {
      shell.hidden = true;
      root.innerHTML = `
        <main class="auth-page">
          <section class="auth-card">
            <h1>Sign-in connection problem</h1>
            <p>${String(error.message || 'Please reload and try again.')}</p>
          </section>
        </main>`;
    });
  } catch (error) {
    shell.hidden = true;
    root.innerHTML = `
      <main class="auth-page">
        <section class="auth-card">
          <h1>LearnBridge could not start</h1>
          <p>Please check your internet connection and reload the website.</p>
        </section>
      </main>`;
  }
})();
 


export const mathematicsNotes = {
  subjectId: "mathematics",
  subjectName: "Mathematics",
  topics: [
    {
      id: "number-systems-sets-real-numbers",
      title: "Number Systems, Sets, and Real Numbers",
      introduction:
        "Numbers are the foundation of mathematics. They are used for counting, measuring, comparing quantities, solving equations, and describing relationships. This topic introduces different number systems, set notation, and the properties of real numbers.",
      learningObjectives: [
        "Identify and classify different types of numbers.",
        "Understand natural, whole, integer, rational, irrational, and real numbers.",
        "Represent sets and use set notation.",
        "Perform operations involving sets.",
        "Apply the properties of real numbers.",
        "Understand intervals and the number line."
      ],
      sections: [
        {
          heading: "Natural Numbers, Whole Numbers, and Integers",
          content:
            "Natural numbers are the counting numbers 1, 2, 3, 4, and so on. Whole numbers include zero together with all natural numbers. Integers include positive whole numbers, negative whole numbers, and zero.",
          keyPoints: [
            "Natural numbers: 1, 2, 3, 4, ...",
            "Whole numbers: 0, 1, 2, 3, 4, ...",
            "Integers: ..., -3, -2, -1, 0, 1, 2, 3, ...",
            "Every natural number is a whole number.",
            "Every whole number is an integer.",
            "Negative numbers are integers but are not whole numbers."
          ],
          workedExamples: [
            {
              question: "Classify the numbers -5, 0, 4, and 12.",
              solution: [
                "-5 is an integer.",
                "0 is a whole number and an integer.",
                "4 is a natural number, a whole number, and an integer.",
                "12 is a natural number, a whole number, and an integer."
              ],
              answer:
                "-5: integer; 0: whole number and integer; 4 and 12: natural numbers, whole numbers, and integers."
            }
          ]
        },
        {
          heading: "Rational and Irrational Numbers",
          content:
            "A rational number is any number that can be expressed as a fraction p/q, where p and q are integers and q is not zero. An irrational number cannot be expressed as such a fraction. Its decimal representation is non-terminating and non-repeating.",
          keyPoints: [
            "Examples of rational numbers include 1/2, -3/4, 5, and 0.25.",
            "Terminating decimals are rational.",
            "Repeating decimals are rational.",
            "Examples of irrational numbers include √2, √3, and π.",
            "Every integer is also a rational number because it can be written over 1."
          ],
          workedExamples: [
            {
              question: "Determine whether 0.75 is rational or irrational.",
              solution: [
                "Write 0.75 as a fraction: 75/100.",
                "Simplify the fraction by dividing the numerator and denominator by 25.",
                "The result is 3/4.",
                "Since it can be written as a ratio of integers, it is rational."
              ],
              answer: "0.75 is rational."
            },
            {
              question: "Is √5 rational or irrational?",
              solution: [
                "The number 5 is not a perfect square.",
                "Its square root cannot be expressed as a ratio of two integers.",
                "Its decimal expansion is non-terminating and non-repeating."
              ],
              answer: "√5 is irrational."
            }
          ]
        },
        {
          heading: "The Real Number System",
          content:
            "The real number system consists of all rational and irrational numbers. Every real number can be represented by a point on the number line.",
          keyPoints: [
            "Natural numbers are contained within whole numbers.",
            "Whole numbers are contained within integers.",
            "Integers are contained within rational numbers.",
            "Rational and irrational numbers together form the real numbers.",
            "The symbol ℝ represents the set of real numbers."
          ],
          workedExamples: [
            {
              question: "Is every rational number a real number?",
              solution: [
                "The real number system includes all rational numbers.",
                "It also includes irrational numbers.",
                "Therefore, every rational number belongs to the real number system."
              ],
              answer: "Yes. Every rational number is a real number."
            }
          ]
        }
      ],
      examTips: [
        "Learn the difference between rational and irrational numbers.",
        "Remember that zero is an integer and a whole number.",
        "Check the signs of negative and positive numbers.",
        "Remember that every integer is rational."
      ],
      commonMistakes: [
        "Classifying negative integers as whole numbers.",
        "Assuming every non-terminating decimal is irrational; repeating decimals are rational.",
        "Forgetting that the denominator of a rational number cannot be zero."
      ],
      practiceQuestions: [
        {
          question: "Is -7 a natural number, whole number, or integer?",
          answer: "Integer",
          explanation: "Negative whole numbers belong to the integer system."
        },
        {
          question: "Express 0.5 as a fraction in simplest form.",
          answer: "1/2",
          explanation: "0.5 = 5/10 = 1/2."
        }
      ],
      summary:
        "The real number system includes rational and irrational numbers. Understanding their properties provides a foundation for further mathematical study."
    },
    
    {
      id: "sets-and-intervals",
      title: "Sets, Set Operations, and Intervals",
      introduction:
        "Set theory provides a way to organize objects and describe relationships between collections. Intervals describe groups of real numbers on the number line.",
      learningObjectives: [
        "Understand set notation and set membership.",
        "Identify different types of sets.",
        "Perform union, intersection, difference, and complement.",
        "Apply set laws.",
        "Represent intervals using inequalities and interval notation."
      ],
      sections: [
        {
          heading: "Sets and Set Notation",
          content:
            "A set is a well-defined collection of distinct objects called elements. Sets are commonly represented using capital letters and braces.",
          keyPoints: [
            "A = {1, 2, 3, 4} is an example of a set.",
            "The symbol ∈ means 'is an element of'.",
            "The symbol ∉ means 'is not an element of'.",
            "The empty set is written ∅ or {}.",
            "The universal set contains all elements under consideration.",
            "The cardinality of a finite set is its number of distinct elements."
          ],
          workedExamples: [
            {
              question: "Let A = {2, 4, 6, 8}. Is 4 an element of A?",
              solution: [
                "The elements of A are 2, 4, 6, and 8.",
                "The number 4 appears in the set.",
                "Therefore, 4 belongs to A."
              ],
              answer: "Yes. 4 ∈ A."
            }
          ]
        },
        {
          heading: "Types of Sets",
          content:
            "Sets can be classified according to their number of elements and their relationships with other sets.",
          keyPoints: [
            "A finite set has a limited number of elements.",
            "An infinite set has infinitely many elements.",
            "An empty set has no elements.",
            "Equal sets contain exactly the same elements.",
            "Equivalent sets have the same number of elements.",
            "A subset contains only elements that also belong to another set.",
            "A proper subset is a subset that is not equal to the original set."
          ],
          workedExamples: [
            {
              question: "If A = {1, 2} and B = {1, 2, 3}, is A a subset of B?",
              solution: [
                "Check every element of A.",
                "Both 1 and 2 are elements of B.",
                "Therefore, every element of A belongs to B."
              ],
              answer: "Yes. A ⊆ B, and A is a proper subset of B."
            }
          ]
        },
        {
          heading: "Operations on Sets",
          content:
            "Set operations create new sets from existing sets. The main operations are union, intersection, difference, and complement.",
          keyPoints: [
            "Union A ∪ B contains elements in A or B or both.",
            "Intersection A ∩ B contains elements common to both sets.",
            "Difference A - B contains elements in A that are not in B.",
            "The complement A' contains elements in the universal set that are not in A.",
            "Disjoint sets have an empty intersection."
          ],
          workedExamples: [
            {
              question: "Let A = {1, 2, 3} and B = {3, 4, 5}. Find A ∪ B and A ∩ B.",
              solution: [
                "The union contains every distinct element from both sets.",
                "A ∪ B = {1, 2, 3, 4, 5}.",
                "The intersection contains elements common to both sets.",
                "The only common element is 3."
              ],
              answer: "A ∪ B = {1, 2, 3, 4, 5}; A ∩ B = {3}."
            }
          ]
        },
        {
          heading: "Laws of Set Operations",
          content:
            "Set laws describe relationships between set operations. They help simplify expressions and solve problems involving several sets.",
          keyPoints: [
            "Commutative law: A ∪ B = B ∪ A.",
            "Commutative law: A ∩ B = B ∩ A.",
            "Associative law: (A ∪ B) ∪ C = A ∪ (B ∪ C).",
            "Distributive law: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C).",
            "Identity law: A ∪ ∅ = A.",
            "Identity law: A ∩ U = A.",
            "De Morgan's law: (A ∪ B)' = A' ∩ B'."
          ],
          workedExamples: [
            {
              question: "If A = {1, 2} and B = {2, 3}, find B ∪ A.",
              solution: [
                "The union contains all distinct elements from both sets.",
                "The elements are 1, 2, and 3.",
                "Changing the order of the sets does not change the union."
              ],
              answer: "{1, 2, 3}."
            }
          ]
        },
        {
          heading: "Intervals and the Number Line",
          content:
            "An interval is a set of real numbers lying between two endpoints. Intervals can include or exclude their endpoints and can be represented using inequalities and interval notation.",
          keyPoints: [
            "[a, b] includes both endpoints.",
            "(a, b) excludes both endpoints.",
            "[a, b) includes a but excludes b.",
            "(a, b] excludes a but includes b.",
            "Infinity and negative infinity are always written with parentheses."
          ],
          workedExamples: [
            {
              question: "Write 2 ≤ x < 6 in interval notation.",
              solution: [
                "The value 2 is included, so use a square bracket.",
                "The value 6 is excluded, so use a parenthesis.",
                "Write the endpoints in increasing order."
              ],
              answer: "[2, 6)."
            }
          ]
        }
      ],
      examTips: [
        "Distinguish union from intersection.",
        "Check whether elements are repeated before counting them.",
        "Use square brackets for included endpoints.",
        "Use parentheses for excluded endpoints.",
        "Practise interpreting Venn diagrams."
      ],
      commonMistakes: [
        "Confusing union with intersection.",
        "Counting repeated elements more than once.",
        "Using the wrong bracket in interval notation.",
        "Forgetting that infinity is never an included endpoint."
      ],
      practiceQuestions: [
        {
          question: "If A = {1, 2, 3} and B = {2, 3, 4}, find A ∩ B.",
          answer: "{2, 3}",
          explanation: "The intersection contains elements common to both sets."
        },
        {
          question: "Write 1 < x ≤ 5 in interval notation.",
          answer: "(1, 5]",
          explanation: "1 is excluded and 5 is included."
        },
        {
          question: "What is the cardinality of {a, b, c, d}?",
          answer: "4",
          explanation: "There are four distinct elements."
        }
      ],
      summary:
        "Set theory organizes collections and describes their relationships. Set operations include union, intersection, difference, and complement. Intervals represent ranges of real numbers."
    },
    {
      id: "algebraic-expressions-equations-inequalities",
      title: "Algebraic Expressions, Equations, and Inequalities",
      introduction:
        "Algebra uses letters and symbols to represent numbers and relationships. It provides methods for simplifying expressions, solving equations, and describing mathematical situations.",
      learningObjectives: [
        "Identify variables, constants, coefficients, and terms.",
        "Simplify algebraic expressions.",
        "Expand and factorise algebraic expressions.",
        "Solve linear and quadratic equations.",
        "Solve inequalities and represent their solutions."
      ],
      sections: [
        {
          heading: "Algebraic Expressions and Their Components",
          content:
            "An algebraic expression is a combination of numbers, variables, and mathematical operations. A variable represents a number whose value may change. A coefficient is a numerical factor multiplying a variable.",
          keyPoints: [
            "In 5x + 3, x is the variable.",
            "The number 5 is the coefficient of x.",
            "The number 3 is a constant term.",
            "Terms are separated by addition or subtraction.",
            "Like terms have the same variables raised to the same powers."
          ],
          workedExamples: [
            {
              question: "Identify the terms, coefficient, and constant in 7x + 4.",
              solution: [
                "The expression has two terms: 7x and 4.",
                "The coefficient of x is 7.",
                "The constant term is 4."
              ],
              answer: "Terms: 7x and 4; coefficient: 7; constant: 4."
            }
          ]
        },
        {
          heading: "Simplifying Algebraic Expressions",
          content:
            "Simplifying an algebraic expression means combining like terms and writing the expression in a shorter equivalent form. Only terms with matching variable parts can be combined.",
          keyPoints: [
            "3x + 2x = 5x.",
            "4a - a = 3a.",
            "2x + 3y cannot be combined into 5xy.",
            "Always apply the correct signs when combining terms."
          ],
          workedExamples: [
            {
              question: "Simplify 4x + 3 - 2x + 5.",
              solution: [
                "Group the variable terms: 4x - 2x.",
                "Group the constants: 3 + 5.",
                "Simplify each group.",
                "Combine the results."
              ],
              answer: "2x + 8."
            }
          ]
        },
        {
          heading: "Expanding Algebraic Expressions",
          content:
            "Expanding means removing parentheses by multiplying each term inside the parentheses by the factor outside. The distributive property is used to perform this operation.",
          keyPoints: [
            "a(b + c) = ab + ac.",
            "a(b - c) = ab - ac.",
            "(a + b)(c + d) = ac + ad + bc + bd.",
            "Multiply every required pair of terms."
          ],
          workedExamples: [
            {
              question: "Expand 3(x + 4).",
              solution: [
                "Multiply 3 by x.",
                "Multiply 3 by 4.",
                "Write the resulting terms together."
              ],
              answer: "3x + 12."
            },
            {
              question: "Expand (x + 2)(x + 3).",
              solution: [
                "Multiply x by x to get x².",
                "Multiply x by 3 to get 3x.",
                "Multiply 2 by x to get 2x.",
                "Multiply 2 by 3 to get 6.",
                "Combine 3x and 2x."
              ],
              answer: "x² + 5x + 6."
            }
          ]
        }
      ],
      examTips: [
        "Combine only like terms.",
        "Use the distributive property carefully.",
        "Check your expansion by multiplying each term.",
        "Pay attention to positive and negative signs."
      ],
      commonMistakes: [
        "Combining unlike terms.",
        "Forgetting to multiply every term inside parentheses.",
        "Making sign errors when expanding expressions."
      ],
      practiceQuestions: [
        {
          question: "Simplify 5x + 3x - 2.",
          answer: "8x - 2",
          explanation: "Combine the like terms 5x and 3x."
        },
        {
          question: "Expand 2(x + 5).",
          answer: "2x + 10",
          explanation: "Multiply 2 by both x and 5."
        }
      ],
      summary:
        "Algebraic expressions use variables to represent numbers and relationships. Simplifying and expanding expressions are important foundations for solving equations."
    },
        {
      id: "algebraic-equations-and-inequalities",
      title: "Algebraic Equations and Inequalities",
      sections: [
        {
          heading: "Factorisation of Algebraic Expressions",
          content: `
Factorisation is the process of expressing an algebraic expression as a product of simpler expressions called factors.

It is the reverse of expanding brackets.

Common factor:
6x + 12 = 6(x + 2)

Difference of two squares:
a² - b² = (a - b)(a + b)

Perfect square identities:
a² + 2ab + b² = (a + b)²
a² - 2ab + b² = (a - b)²

Example:
Factorise x² + 5x + 6.

We need two numbers whose product is 6 and whose sum is 5.
Those numbers are 2 and 3.

Therefore:
x² + 5x + 6 = (x + 2)(x + 3)

Always expand your answer to check that the factors reproduce the original expression.
          `
        },
        {
          heading: "Linear Equations",
          content: `
A linear equation is an equation in which the highest power of the variable is one.

A simple linear equation has the form:
ax + b = 0, where a is not zero.

Solving an equation means finding the value of the variable that makes the equation true.

Worked example:
Solve 3x + 5 = 20.

Step 1: Subtract 5 from both sides.
3x = 20 - 5
3x = 15

Step 2: Divide both sides by 3.
x = 15/3
x = 5

Check:
3(5) + 5 = 20
20 = 20

Therefore, x = 5.

Remember that whatever operation you perform on one side of an equation must also be performed on the other side.
          `
        },
        {
          heading: "Quadratic Equations",
          content: `
A quadratic equation is an equation whose highest power of the variable is two.

Its standard form is:
ax² + bx + c = 0, where a is not zero.

A quadratic equation can be solved using factorisation, completing the square, or the quadratic formula.

The quadratic formula is:
x = (-b ± √(b² - 4ac)) / 2a

The expression b² - 4ac is called the discriminant.

Worked example:
Solve x² - 5x + 6 = 0.

Step 1: Factorise.
(x - 2)(x - 3) = 0

Step 2: Set each factor equal to zero.
x - 2 = 0 or x - 3 = 0

Step 3: Solve.
x = 2 or x = 3

Therefore, the solutions are 2 and 3.

A quadratic equation may have two distinct real roots, one repeated real root, or no real roots, depending on its discriminant.
          `
        },
        {
          heading: "Linear Inequalities",
          content: `
An inequality compares two expressions using symbols such as:

< means less than.
> means greater than.
≤ means less than or equal to.
≥ means greater than or equal to.

Example:
Solve 2x + 3 < 11.

Step 1: Subtract 3 from both sides.
2x < 8

Step 2: Divide both sides by 2.
x < 4

Therefore, every real number less than 4 is a solution.

Important rule:
When multiplying or dividing both sides of an inequality by a negative number, reverse the inequality sign.

For example:
-2x > 6

Divide by -2 and reverse the sign:
x < -3

The solution can also be represented on a number line.
          `
        },
        {
          heading: "Exam Tips and Common Mistakes",
          content: `
EXAM TIPS

- Show each important algebraic step clearly.
- Check a solution by substituting it into the original equation.
- Learn the standard factorisation identities.
- Memorise the quadratic formula and identify a, b, and c correctly.
- Reverse the inequality sign when multiplying or dividing by a negative number.

COMMON MISTAKES

- Changing only one side of an equation.
- Making sign errors when expanding brackets.
- Forgetting one of the solutions of a factorised quadratic equation.
- Using the quadratic formula with incorrect values of a, b, or c.
- Forgetting to reverse an inequality sign after division by a negative number.
          `
        },
        {
          heading: "Practice Questions",
          content: `
1. Factorise x² + 7x + 12.

2. Solve 4x - 7 = 13.

3. Solve x² - 7x + 12 = 0 by factorisation.

4. Solve 3x + 2 ≤ 14.

5. Solve -3x > 12.

Answers:

1. (x + 3)(x + 4)
2. x = 5
3. x = 3 or x = 4
4. x ≤ 4
5. x < -4
          `
        }
      ],
      summary: "Algebraic equations and inequalities involve finding unknown values and describing relationships between quantities. Factorisation, equation-solving methods, and inequality rules are essential skills."
    },    
        {
      id: "relations-functions-and-graphs",
      title: "Relations, Functions, and Graphs",
      sections: [
        {
          heading: "Relations and Ordered Pairs",
          content: `
A relation describes a connection between elements of two sets.

An ordered pair is written as (x, y), where x is the first coordinate and y is the second coordinate.

For example:
(2, 5) and (3, 7)

The Cartesian product of sets A and B is the set of all ordered pairs (a, b), where a belongs to A and b belongs to B.

The domain of a relation is the set of all first coordinates.

The range is the set of all second coordinates that actually appear.

Example:
R = {(1, 2), (2, 4), (3, 6)}

Domain = {1, 2, 3}
Range = {2, 4, 6}
          `
        },
        {
          heading: "Understanding Functions",
          content: `
A function is a special type of relation in which every input has exactly one output.

The notation f(x) represents the value of the function at x.

Example:
f(x) = 2x + 3

Find f(4).

Substitute x = 4:
f(4) = 2(4) + 3
f(4) = 8 + 3
f(4) = 11

Therefore, f(4) = 11.

A function cannot assign two different outputs to the same input.

The domain is the set of permitted inputs, while the range is the set of resulting outputs.
          `
        },
        {
          heading: "Types of Functions",
          content: `
Common types of functions include:

Constant function:
f(x) = c

Its output remains constant for every permitted input.

Identity function:
f(x) = x

Every input is equal to its output.

Linear function:
f(x) = mx + c

Its graph is a straight line.

Quadratic function:
f(x) = ax² + bx + c, where a is not zero.

Its graph is a parabola.

One-to-one function:
Different inputs produce different outputs.

Many-to-one function:
Different inputs may produce the same output.

Understanding these types helps when identifying functions from equations, tables, and graphs.
          `
        },
        {
          heading: "Graphs of Functions",
          content: `
A graph represents a mathematical relationship visually on the Cartesian coordinate plane.

The horizontal axis is called the x-axis.
The vertical axis is called the y-axis.
Their intersection is the origin (0, 0).

To draw a graph:

1. Choose suitable values of x.
2. Calculate the corresponding values of y.
3. Write the ordered pairs.
4. Plot the points on the coordinate plane.
5. Join the points when appropriate.

Worked example:
Draw the graph of y = 2x + 1.

Choose x = 0, 1, and 2.

When x = 0, y = 1.
When x = 1, y = 3.
When x = 2, y = 5.

The points are:
(0, 1), (1, 3), and (2, 5).

These points lie on a straight line.

The gradient tells us how steep a straight line is.
For two points (x₁, y₁) and (x₂, y₂):

Gradient = (y₂ - y₁) / (x₂ - x₁)
          `
        },
        {
          heading: "Exam Tips and Common Mistakes",
          content: `
EXAM TIPS

- Distinguish between a relation and a function.
- Practise finding domains and ranges.
- Substitute input values carefully into function rules.
- Label both axes when drawing graphs.
- Use a suitable scale and plot coordinates accurately.
- Remember that a straight-line graph has a constant gradient.

COMMON MISTAKES

- Confusing the domain with the range.
- Reversing the coordinates of an ordered pair.
- Giving multiple outputs for one input when describing a function.
- Making substitution errors.
- Forgetting to label graph axes.
          `
        },
        {
          heading: "Practice Questions",
          content: `
1. Find the domain and range of:
R = {(1, 3), (2, 5), (4, 7)}.

2. If f(x) = 3x + 2, find f(5).

3. Is the relation {(1, 2), (1, 4), (2, 5)} a function?

4. Find the gradient of the line passing through (1, 2) and (3, 6).

5. Find the value of y when x = 4 in y = 2x - 3.

Answers:

1. Domain = {1, 2, 4}; Range = {3, 5, 7}.
2. 17
3. No, because input 1 has two different outputs.
4. 2
5. 5
          `
        }
      ],
      summary: "Relations connect elements of sets, while functions assign exactly one output to each input. Understanding domains, ranges, function rules, and graphs is essential for studying advanced mathematics."
    },
        {
      id: "polynomial-rational-exponential-logarithmic-functions",
      title: "Polynomial, Rational, Exponential, and Logarithmic Functions",
      sections: [
        {
          heading: "Polynomial Functions",
          content: `
A polynomial is an algebraic expression containing variables with non-negative integer powers.

The general form is:
P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀

The highest power of the variable with a non-zero coefficient is called the degree.

Examples:
3x² + 2x - 5 is a polynomial of degree 2.
x³ - 4x + 7 is a polynomial of degree 3.

The degree helps describe the possible shape of a polynomial graph.

A root or zero of a polynomial is a value of x for which P(x) = 0.

For example:
P(x) = x - 4

Setting P(x) = 0 gives:
x - 4 = 0
x = 4

Therefore, 4 is a root.
          `
        },
        {
          heading: "Rational Functions",
          content: `
A rational function is a function expressed as the ratio of two polynomials.

Its general form is:
f(x) = P(x) / Q(x)

where Q(x) must not equal zero.

Example:
f(x) = (x + 2) / (x - 3)

The denominator cannot be zero.

Therefore:
x - 3 ≠ 0
x ≠ 3

The domain excludes values that make the denominator zero.

A vertical asymptote may occur at a value excluded from the domain, while a horizontal asymptote describes the behaviour of the graph as x becomes very large or very small.
          `
        },
        {
          heading: "Exponential Functions",
          content: `
An exponential function has the variable in the exponent.

A common form is:
f(x) = aˣ

where a > 0 and a ≠ 1.

If a > 1, the function represents exponential growth.

If 0 < a < 1, the function represents exponential decay.

Example:
Find f(3) if f(x) = 2ˣ.

f(3) = 2³
f(3) = 8

Therefore, f(3) = 8.

Exponential functions are used in studying population growth, compound interest, and other changing quantities.
          `
        },
        {
          heading: "Logarithmic Functions",
          content: `
A logarithm is the inverse operation of exponentiation.

If:
aˣ = b

then:
logₐ(b) = x

For example:
2³ = 8

Therefore:
log₂(8) = 3

Important logarithm laws:

logₐ(MN) = logₐ(M) + logₐ(N)

logₐ(M/N) = logₐ(M) - logₐ(N)

logₐ(Mⁿ) = n logₐ(M)

The logarithm is defined only when its argument is positive, and its base must be positive and different from 1.
          `
        },
        {
          heading: "Exam Tips and Practice",
          content: `
EXAM TIPS

- Identify the degree of a polynomial correctly.
- Check denominator restrictions in rational functions.
- Distinguish exponential growth from exponential decay.
- Understand the relationship between logarithms and exponents.
- Practise applying logarithm laws.

PRACTICE QUESTIONS

1. Find the degree of 5x³ + 2x² - 7.

2. Find the root of P(x) = x - 9.

3. Find the value of 3².

4. Evaluate log₂(16).

5. State the value of x that is excluded from the domain of f(x) = 1/(x - 5).

ANSWERS

1. 3
2. x = 9
3. 9
4. 4
5. x = 5

SUMMARY

Polynomial, rational, exponential, and logarithmic functions describe different mathematical relationships. Understanding their properties, domains, roots, and graphs helps solve advanced problems.
          `
        }
      ],
      summary: "Polynomial, rational, exponential, and logarithmic functions are important families of functions used in algebra and mathematical modelling."
    },
    {
      id: "trigonometry-and-applications",
      title: "Trigonometry and Applications",
      sections: [
        {
          heading: "Angles and Measurement",
          content: `
Trigonometry studies relationships between angles and sides of triangles.

Angles are commonly measured in degrees or radians.

A complete revolution is:
360° = 2π radians

To convert degrees to radians:
Radians = Degrees × π/180

To convert radians to degrees:
Degrees = Radians × 180/π

For example:
180° = π radians
90° = π/2 radians
          `
        },
        {
          heading: "Trigonometric Ratios",
          content: `
In a right-angled triangle, the main trigonometric ratios are sine, cosine, and tangent.

sin θ = Opposite / Hypotenuse

cos θ = Adjacent / Hypotenuse

tan θ = Opposite / Adjacent

A useful way to remember these ratios is SOH-CAH-TOA.

Worked example:

Suppose the opposite side is 3 units and the hypotenuse is 5 units.

sin θ = 3/5

Therefore:
sin θ = 0.6

These ratios help calculate unknown sides and angles in right-angled triangles.
          `
        },
        {
          heading: "Trigonometric Identities",
          content: `
A trigonometric identity is an equality that holds for all values where both sides are defined.

Important identities include:

sin² θ + cos² θ = 1

tan θ = sin θ / cos θ

1 + tan² θ = sec² θ

1 + cot² θ = csc² θ

These identities are useful for simplifying expressions and solving trigonometric equations.

Example:
If sin θ = 3/5 and θ is acute, find cos θ.

Using:
sin² θ + cos² θ = 1

(3/5)² + cos² θ = 1

9/25 + cos² θ = 1

cos² θ = 16/25

cos θ = 4/5

Since θ is acute, cosine is positive.
          `
        },
        {
          heading: "Trigonometric Graphs and Applications",
          content: `
The sine and cosine functions are periodic functions.

The basic sine function is:
y = sin x

The basic cosine function is:
y = cos x

Both have an amplitude of 1 and a period of 2π radians.

The tangent function is:
y = tan x

Its period is π radians.

Trigonometry is applied in surveying, construction, navigation, astronomy, and the measurement of heights and distances.

Worked example:

A right-angled triangle has an angle of 30° and a hypotenuse of 10 cm.

Find the opposite side.

sin 30° = Opposite / 10

1/2 = Opposite / 10

Opposite = 10 × 1/2

Opposite = 5 cm.
          `
        },
        {
          heading: "Exam Tips and Practice Questions",
          content: `
EXAM TIPS

- Memorise the three basic trigonometric ratios.
- Check whether your calculator is in degree or radian mode.
- Learn the important trigonometric identities.
- Draw a diagram when solving triangle problems.
- Pay attention to the quadrant when determining signs.

PRACTICE QUESTIONS

1. Convert 180° into radians.

2. Find sin 30°.

3. If the opposite side is 6 and the hypotenuse is 10, find sin θ.

4. State the identity connecting sin² θ and cos² θ.

5. Find the opposite side when the hypotenuse is 12 cm and the angle is 30°.

ANSWERS

1. π radians
2. 1/2
3. 3/5
4. sin² θ + cos² θ = 1
5. 6 cm

SUMMARY

Trigonometry connects angles and sides of triangles. Its ratios, identities, and graphs are useful in mathematics and real-world measurement.
          `
        }
      ],
      summary: "Trigonometry uses angle relationships, ratios, identities, and graphs to solve problems involving triangles and periodic behaviour."
    },
    {
      id: "coordinate-geometry-vectors-and-matrices",
      title: "Coordinate Geometry, Vectors, and Matrices",
      sections: [
        {
          heading: "Coordinate Geometry",
          content: `
Coordinate geometry uses algebra to study geometric shapes and relationships on a coordinate plane.

The distance between two points (x₁, y₁) and (x₂, y₂) is:

d = √[(x₂ - x₁)² + (y₂ - y₁)²]

The midpoint is:

M = ((x₁ + x₂)/2, (y₁ + y₂)/2)

Worked example:

Find the distance between A(1, 2) and B(4, 6).

d = √[(4 - 1)² + (6 - 2)²]

d = √(9 + 16)

d = √25

d = 5 units.
          `
        },
        {
          heading: "Equations of Straight Lines",
          content: `
The slope-intercept form of a straight line is:

y = mx + c

where:
m = gradient
c = y-intercept

The gradient is:

m = (y₂ - y₁)/(x₂ - x₁)

A line with a positive gradient rises from left to right.

A line with a negative gradient falls from left to right.

A horizontal line has gradient zero.

A vertical line has an undefined gradient.

Worked example:

Find the gradient through (2, 3) and (4, 7).

m = (7 - 3)/(4 - 2)

m = 4/2

m = 2.
          `
        },
        {
          heading: "Vectors",
          content: `
A vector is a quantity that has both magnitude and direction.

Examples include displacement, velocity, and force.

A vector in two dimensions can be written as:

a = (a₁, a₂)

Vector addition:

(a₁, a₂) + (b₁, b₂)
= (a₁ + b₁, a₂ + b₂)

Scalar multiplication:

k(a₁, a₂) = (ka₁, ka₂)

Magnitude:

|a| = √(a₁² + a₂²)

Worked example:

Find the magnitude of vector a = (3, 4).

|a| = √(3² + 4²)

|a| = √(9 + 16)

|a| = 5.
          `
        },
        {
          heading: "Matrices",
          content: `
A matrix is a rectangular arrangement of numbers in rows and columns.

The order of a matrix is written as:

Number of rows × Number of columns.

For example:

A = [[1, 2], [3, 4]]

This is a 2 × 2 matrix.

Matrices of the same order can be added by adding corresponding entries.

Example:

A = [[1, 2], [3, 4]]
B = [[2, 1], [0, 5]]

A + B = [[3, 3], [3, 9]]

The determinant of a 2 × 2 matrix is:

For A = [[a, b], [c, d]]

det(A) = ad - bc

Matrices are used in solving systems of equations, transformations, and many scientific applications.
          `
        },
        {
          heading: "Exam Tips and Practice Questions",
          content: `
EXAM TIPS

- Write coordinates in the correct order.
- Use the distance formula carefully.
- Distinguish between gradient and y-intercept.
- Remember that vectors have both magnitude and direction.
- Check matrix dimensions before adding or multiplying matrices.

PRACTICE QUESTIONS

1. Find the midpoint of (2, 4) and (6, 8).

2. Find the gradient through (1, 2) and (3, 6).

3. Find the magnitude of vector (5, 12).

4. Find the order of a matrix with 3 rows and 2 columns.

5. Find the determinant of [[2, 3], [1, 4]].

ANSWERS

1. (4, 6)
2. 2
3. 13
4. 3 × 2
5. 5

SUMMARY

Coordinate geometry connects algebra and geometry. Vectors describe quantities with direction, while matrices organize numbers and support mathematical operations.
          `
        }
      ],
      summary: "Coordinate geometry, vectors, and matrices provide methods for studying points, lines, directions, and systems of mathematical relationships."
    },
    {
      id: "statistics-probability-and-calculus",
      title: "Statistics, Probability, and Calculus",
      sections: [
        {
          heading: "Introduction to Statistics",
          content: `
Statistics is the branch of mathematics concerned with collecting, organizing, presenting, analysing, and interpreting data.

Data can be qualitative or quantitative.

Qualitative data describes categories or qualities.

Quantitative data consists of numerical values.

The mean is the sum of observations divided by the number of observations.

Mean = Sum of values / Number of values

The median is the middle value when data is arranged in order.

The mode is the value that occurs most frequently.

Worked example:

Find the mean of 2, 4, 6, and 8.

Mean = (2 + 4 + 6 + 8)/4

Mean = 20/4

Mean = 5.
          `
        },
        {
          heading: "Measures of Dispersion",
          content: `
Measures of dispersion describe how spread out data values are.

The range is:

Range = Highest value - Lowest value

Variance measures the average squared deviation from the mean.

Standard deviation is the positive square root of variance.

A small standard deviation indicates that observations are relatively close to the mean.

A large standard deviation indicates greater spread.

When comparing data sets, consider both the centre and the spread of the observations.
          `
        },
        {
          heading: "Probability",
          content: `
Probability measures how likely an event is to occur.

For equally likely outcomes:

P(A) = Number of favourable outcomes / Total number of possible outcomes

Probability values range from 0 to 1.

An impossible event has probability 0.

A certain event has probability 1.

The complement rule is:

P(not A) = 1 - P(A)

Worked example:

A fair six-sided die is rolled. Find the probability of getting an even number.

Even outcomes = {2, 4, 6}

Favourable outcomes = 3

Total outcomes = 6

P(even) = 3/6 = 1/2.
          `
        },
        {
          heading: "Introduction to Calculus and Limits",
          content: `
Calculus is the branch of mathematics that studies change and accumulation.

A limit describes the value a function approaches as its input approaches a particular value.

For example:

lim x→2 (x + 3) = 5

This is because x + 3 approaches 5 as x approaches 2.

Limits are an important foundation for differentiation and integration.
          `
        },
        {
          heading: "Differentiation",
          content: `
Differentiation is used to find the derivative of a function.

The derivative describes the instantaneous rate of change of a function. Geometrically, it represents the gradient of a tangent to a curve.

The power rule is:

If f(x) = xⁿ,

then:

f'(x) = nxⁿ⁻¹

Worked example:

Differentiate f(x) = x³ + 2x² - 4x.

f'(x) = 3x² + 4x - 4

Therefore, the derivative is:

3x² + 4x - 4.

Differentiation is used in studying velocity, acceleration, rates of change, and optimization.
          `
        },
        {
          heading: "Integration",
          content: `
Integration is the reverse process of differentiation in many situations.

The power rule for integration is:

∫xⁿ dx = xⁿ⁺¹/(n + 1) + C

where n is not -1 and C is the constant of integration.

Worked example:

Evaluate ∫3x² dx.

∫3x² dx = 3 × x³/3 + C

= x³ + C

Definite integration can be used to calculate the area under a curve between two limits.

Integration is important in finding accumulated quantities such as displacement from velocity and areas under graphs.
          `
        },
        {
          heading: "Exam Tips and Common Mistakes",
          content: `
EXAM TIPS

- Arrange data before finding the median.
- Do not confuse mean, median, and mode.
- Check that probability answers lie between 0 and 1.
- Apply the differentiation power rule carefully.
- Remember the constant of integration in indefinite integrals.
- Pay attention to the limits in definite integration.

COMMON MISTAKES

- Finding the median without arranging the data.
- Using the wrong total number of outcomes in probability.
- Forgetting to subtract the exponent by one when differentiating.
- Forgetting to add one to the exponent when integrating.
- Omitting the constant of integration.

PRACTICE QUESTIONS

1. Find the mean of 3, 5, 7, and 9.

2. Find the median of 2, 4, 6, 8, and 10.

3. A fair coin is tossed. Find the probability of getting heads.

4. Differentiate f(x) = x⁴.

5. Integrate 4x³ with respect to x.

ANSWERS

1. 6
2. 6
3. 1/2
4. 4x³
5. x⁴ + C

SUMMARY

Statistics describes and analyses data. Probability studies uncertainty, while calculus uses limits, derivatives, and integrals to study change and accumulation.
          `
        }
      ],
      summary: "Statistics, probability, and calculus provide mathematical tools for analysing data, measuring uncertainty, and understanding changing quantities."
    }
  ]
};

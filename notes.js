const GRADE9_BIOLOGY_NOTES = {
  subject: "Biology",
  grade: 9,
  curriculum: "FDRE Ministry of Education New Curriculum",
  units: [
    {
      unit_number: 1,
      unit_title: "Introduction to Biology",
      learning_objectives: [
        "Define biology and explain its core branches and significance.",
        "Describe the contributions of renowned Ethiopian biologists to international science.",
        "Explain the role of Ethiopian research institutions in biological studies.",
        "Demonstrate proper handling, part identification, and total magnification calculation using a light microscope.",
        "Apply the scientific method to solve everyday biological problems."
      ],
      sections: [
        {
          section_id: "1.1",
          title: "Definition of Biology and Why We Study It",
          content: "Biology is the scientific study of life and living organisms, derived from the Greek words 'bios' (life) and 'logos' (study). Biologists examine the structure, function, growth, origin, evolution, and distribution of living things. Studying biology helps humans understand how ecosystems function, how diseases are treated, how agricultural yields can be optimized, and how we can preserve environmental balance."
        },
        {
          section_id: "1.2",
          title: "Renowned Ethiopian Biologists",
          content: "Ethiopia has contributed significantly to global biological knowledge through pioneering scientists: 1. Dr. Aklilu Lemma (1935–1997) discovered that the berries of the endod plant (Phytolacca dodecandra) act as a natural molluscicide, effectively killing freshwater snails that transmit the parasitic flatworm responsible for schistosomiasis (bilharzia). 2. Professor Tilahun Yilma developed a recombinant vaccine against rinderpest, a deadly cattle disease, and advanced HIV/AIDS vaccine research. 3. Dr. Melaku Worede pioneered plant genetic resource conservation, establishing the gene bank to preserve indigenous Ethiopian crop varieties. 4. Professor Yalemtsehay Mekonnen advanced research in human physiology and the therapeutic safety of traditional Ethiopian medicinal plants."
        },
        {
          section_id: "1.3",
          title: "Biological Research Institutions in Ethiopia",
          content: "Research institutions bridge theoretical science and national development. Key institutes include the Ethiopian Biodiversity Institute (EBI) for preserving indigenous germplasm, the Armauer Hansen Research Institute (AHRI) for medical research on infectious diseases like tuberculosis and leprosy, and the Ethiopian Institute of Agricultural Research (EIAR) for crop breeding and soil management."
        },
        {
          section_id: "1.4",
          title: "The Scientific Method",
          content: "Science relies on empirical investigation. The scientific method consists of: 1. Observation of a phenomenon. 2. Formulating a testable hypothesis. 3. Conducting a controlled experiment identifying independent, dependent, and controlled variables. 4. Collecting and analyzing quantitative or qualitative data. 5. Drawing conclusions to support or refute the hypothesis."
        },
        {
          section_id: "1.5",
          title: "Tools of a Biologist and the Light Microscope",
          content: "Microscopes magnify small specimens using light and glass lenses. Key parts of a compound light microscope include the ocular lens (eyepiece, typically 10x), revolving nosepiece, objective lenses (4x scanning, 10x low power, 40x high power), stage, diaphragm, light source, coarse adjustment knob, and fine adjustment knob. Total magnification is calculated by multiplying the ocular lens power by the objective lens power."
        }
      ],
      worked_examples: [
        {
          id: "g9_u1_we1",
          title: "Calculating Total Microscope Magnification",
          problem: "A student observes a plant cell using an ocular eyepiece lens of 15x and a high-power objective lens of 40x. What is the total magnification of the microscope? If an internal structure appears 6 mm wide under this view, what is its actual size in micrometers (um)?",
          solution: "Step 1: Calculate total magnification = Ocular power * Objective power = 15 * 40 = 600x.\nStep 2: Calculate actual size = Image size / Total magnification = 6 mm / 600 = 0.01 mm.\nStep 3: Convert millimeters to micrometers (1 mm = 1,000 um) = 0.01 * 1,000 = 10 um. The actual size is 10 um."
        }
      ],
      activities: [
        {
          title: "Observing Onion Epidermal Cells Under a Microscope",
          procedure: "1. Peel a thin, transparent layer of epidermis from the inner fleshy scale of an onion bulb.\n2. Place the tissue flat on a clean glass slide and add a drop of iodine solution to stain cellular structures.\n3. Carefully lower a coverslip at an angle to prevent trapping air bubbles.\n4. Place the slide on the microscope stage, start with the lowest-power objective lens, use the coarse adjustment knob to bring into rough focus, and use the fine adjustment knob for sharp clarity."
        }
      ],
      summary: "Biology is the study of life. Ethiopian scientists like Dr. Aklilu Lemma and Prof. Tilahun Yilma have made groundbreaking international contributions. Scientific investigations follow rigorous steps, and tools like the compound light microscope allow us to examine microscopic structures by calculating precise magnifications.",
      practice_questions: [
        {
          id: "g9_u1_pq1",
          difficulty: "easy",
          s: "Which Ethiopian scientist discovered that endod plant berries can control bilharzia-transmitting snails?",
          options: [
            "Professor Tilahun Yilma",
            "Dr. Aklilu Lemma",
            "Dr. Melaku Worede",
            "Professor Yalemtsehay Mekonnen"
          ],
          correct_index: 1,
          explanation: "Dr. Aklilu Lemma discovered the molluscicidal properties of Phytolacca dodecandra (endod) berries against Schistosoma-carrying freshwater snails."
        },
        {
          id: "g9_u1_pq2",
          difficulty: "medium",
          s: "What is the total magnification of a compound light microscope with an ocular eyepiece of 10x and an objective lens of 40x?",
          options: ["50x", "400x", "4,000x", "140x"],
          correct_index: 1,
          explanation: "Total magnification is calculated by multiplying the ocular lens power by the objective lens power: 10 * 40 = 400x."
        },
        {
          id: "g9_u1_pq3",
          difficulty: "hard",
          s: "During a scientific investigation, the factor that is intentionally manipulated by the researcher to measure its effect is called the:",
          options: [
            "Dependent variable",
            "Controlled variable",
            "Independent variable",
            "Extraneous constant"
          ],
          correct_index: 2,
          explanation: "The independent variable is the variable modified or controlled by the experimenter to test its effects on the dependent variable."
        }
      ]
    },
    {
      unit_number: 2,
      unit_title: "Characteristics and Classification of Organisms",
      learning_objectives: [
        "State and describe the fundamental characteristics of living things.",
        "Explain the principles of biological taxonomy and hierarchical classification.",
        "Apply the Linnaean system of binomial nomenclature correctly.",
        "Identify common Ethiopian plants and animals and their ecological significance.",
        "Distinguish between the kingdoms in the Five-Kingdom classification system."
      ],
      sections: [
        {
          section_id: "2.1",
          title: "Characteristics of Living Things",
          content: "Living organisms share seven core life processes: Movement, Respiration, Sensitivity (Response to stimuli), Growth, Reproduction, Excretion, and Nutrition (MR. GREEN). They are composed of cells, maintain internal stability (homeostasis), and possess genetic material (DNA/RNA) capable of evolutionary adaptation."
        },
        {
          section_id: "2.2",
          title: "Taxonomy and Binomial Nomenclature",
          content: "Taxonomy is the science of classifying organisms. The taxonomic hierarchy runs from broad to specific: Domain -> Kingdom -> Phylum -> Class -> Order -> Family -> Genus -> Species. Carl Linnaeus introduced Binomial Nomenclature, a two-part naming system where an organism's scientific name consists of its capitalized Genus followed by its lowercase species epithet (e.g., Homo sapiens for humans, Canis simensis for the Ethiopian wolf)."
        },
        {
          section_id: "2.3",
          title: "The Five-Kingdom Classification System",
          content: "Living organisms are grouped into five kingdoms: 1. Kingdom Monera (unicellular prokaryotes without a true nucleus, e.g., bacteria). 2. Kingdom Protista (mostly unicellular eukaryotes, e.g., Amoeba, Paramecium). 3. Kingdom Fungi (heterotrophic eukaryotes with chitin cell walls, e.g., yeasts, molds, mushrooms). 4. Kingdom Plantae (multicellular autotrophic eukaryotes with cellulose cell walls). 5. Kingdom Animalia (multicellular heterotrophic eukaryotes without cell walls)."
        },
        {
          section_id: "2.4",
          title: "Common Ethiopian Animals and Plants",
          "content": "Ethiopia is a prominent biodiversity hotspot with many endemic species. Endemic fauna include the Walia Ibex (Capra walie) in the Simien Mountains, the Ethiopian Wolf (Canis simensis), and the Mountain Nyala (Tragelaphus buxtoni). Endemic flora include Enset (Enset ventricosum) and wild coffee (Coffea arabica)."
        }
      ],
      worked_examples: [
        {
          id: "g9_u2_we1",
          title: "Formatting Binomial Nomenclature",
          problem: "Explain the correct rules for writing the scientific name of the Ethiopian Wolf (Canis simensis).",
          solution: "Rule 1: The first word (Canis) represents the Genus and must start with a capital letter.\nRule 2: The second word (simensis) represents the species epithet and must start with a lowercase letter.\nRule 3: When typed, the entire scientific name must be italicized (Canis simensis); when handwritten, both words must be underlined separately."
        }
      ],
      activities: [
        {
          title: "Constructing a Dichotomous Key for Local Plant Leaves",
          procedure: "1. Collect five different leaves from school grounds.\n2. Observe observable contrasting features such as leaf margin (smooth vs. jagged), venation (parallel vs. netted), and shape.\n3. Construct a step-by-step branching dichotomous key to identify each specimen accurately."
        }
      ],
      summary: "All living things exhibit core characteristics of life. Taxonomy organizes species hierarchically from domain to species, using Linnaean binomial nomenclature. Organisms are classified into five major kingdoms, with Ethiopia hosting exceptional endemic biodiversity.",
      practice_questions: [
        {
          id: "g9_u2_pq1",
          difficulty: "easy",
          s: "Which taxonomic rank is the most specific level in the biological hierarchy?",
          options: ["Kingdom", "Family", "Genus", "Species"],
          correct_index: 3,
          explanation: "Species is the most specific taxonomic rank, representing organisms capable of interbreeding to produce fertile offspring."
        },
        {
          id: "g9_u2_pq2",
          difficulty: "medium",
          s: "In the scientific name *Crocuta crocuta* (spotted hyena), what does the word *Crocuta* designate?",
          options: ["Species", "Genus", "Family", "Kingdom"],
          correct_index: 1,
          explanation: "The first word in binomial nomenclature always indicates the Genus, written with a capital initial letter."
        },
        {
          id: "g9_u2_pq3",
          difficulty: "hard",
          s: "Which kingdom contains eukaryotic, heterotrophic organisms that possess cell walls made of chitin and absorb nutrients externally?",
          options: ["Monera", "Plantae", "Fungi", "Protista"],
          correct_index: 2,
          explanation: "Kingdom Fungi includes eukaryotic heterotrophs with chitin cell walls that feed by external digestion and absorption."
        }
      ]
    },
          {
unit_number: 3,
      unit_title: "Cells",
      learning_objectives: [
        "State the fundamental postulates of Cell Theory.",
        "Compare and contrast prokaryotic and eukaryotic cell structures.",
        "Identify plant and animal cell organelles and describe their functions.",
        "Explain cellular transport mechanisms including diffusion, osmosis, and active transport.",
        "Describe the levels of biological organization from cells to organ systems."
      ],
      sections: [
        {
          section_id: "3.1",
          title: "The Cell Theory",
          content: "Cell Theory, established by Schleiden, Schwann, and Virchow, states that: 1. All living things are made of cells. 2. The cell is the basic functional and structural unit of life. 3. All cells come from pre-existing cells through cell division."
        },
        {
          section_id: "3.2",
          title: "Prokaryotic and Eukaryotic Cells",
          content: "Prokaryotic cells (e.g., bacteria) lack a membrane-bound nucleus and true membrane-bound organelles; their DNA floats freely in the cytoplasm as a nucleoid. Eukaryotic cells (e.g., plants, animals, fungi) contain a distinct membrane-bound nucleus housing linear chromosomes and numerous specialized membrane-bound organelles."
        },
        {
          section_id: "3.3",
          title: "Plant and Animal Cell Organelles",
          content: "Major organelles include: Nucleus (stores genetic instructions), Mitochondria (sites of cellular respiration and ATP generation), Ribosomes (synthesize proteins), Endoplasmic Reticulum (Rough ER studded with ribosomes for protein processing; Smooth ER synthesizes lipids), Golgi apparatus (modifies and packages proteins), Lysosomes (contain digestive enzymes), Vacuoles (storage; large central vacuole in plants), Chloroplasts (site of photosynthesis in plant cells), and Cell Wall (rigid cellulose structure surrounding plant cells)."
        },
        {
          section_id: "3.4",
          title: "The Cell and Its Environment (Transport Mechanisms)",
          content: "The cell membrane is selectively permeable. Transport mechanisms are divided into: 1. Passive Transport (requires no metabolic energy): Simple diffusion (movement of molecules down a concentration gradient), facilitated diffusion (transport via protein channels), and osmosis (net movement of water molecules across a selectively permeable membrane from high water potential to low water potential). 2. Active Transport (requires ATP energy): Movement of ions or molecules against their concentration gradient via carrier proteins."
        }
      ],
      worked_examples: [
        {
          id: "g9_u3_we1",
          title: "Predicting Osmotic Movement in Plant Cells",
          problem: "A fresh potato strip with high water potential is placed into a concentrated 20% saltwater (hypertonic) solution. Explain what happens to the potato cells and describe their appearance after 30 minutes.",
          solution: "Step 1: The surrounding saltwater solution has a lower water potential (hypertonic) compared to the potato cell cytoplasm.\nStep 2: Water molecules move out of the potato cells and into the external saltwater solution by osmosis.\nStep 3: As water leaves the vacuole, the cell membrane pulls away from the rigid cell wall, a process known as plasmolysis. The potato strip becomes limp and flaccid."
        }
      ],
      activities: [
        {
          title: "Investigating Osmosis Using Fresh Red Onion Bulb Scales",
          procedure: "1. Peel a thin purple epidermal layer from a red onion scale and mount it in distilled water on a slide; observe under a microscope (turgid cells).\n2. Add a few drops of 10% sodium chloride solution to one edge of the coverslip while drawing water from the opposite edge with filter paper.\n3. Observe the movement of water out of the cells and note the separation of the purple vacuole membrane from the cell wall."
        }
      ],
      summary: "Cells are the basic units of life. Prokaryotic cells lack a true nucleus, unlike eukaryotes. Organelles carry out specialized metabolic tasks. Substances move across the cell membrane via passive transport (diffusion, osmosis) or active transport using ATP.",
      practice_questions: [
        {
          id: "g9_u3_pq1",
          difficulty: "easy",
          s: "Which cellular organelle is primarily responsible for generating chemical energy in the form of ATP through aerobic respiration?",
          options: ["Ribosome", "Chloroplast", "Mitochondrion", "Golgi body"],
          correct_index: 2,
          explanation: "Mitochondria are the powerhouses of the cell where cellular respiration occurs to produce ATP."
        },
        {
          id: "g9_u3_pq2",
          difficulty: "medium",
          s: "The net movement of water molecules from a region of higher water potential to a region of lower water potential across a selectively permeable membrane is called:",
          options: ["Active transport", "Osmosis", "Simple diffusion", "Phagocytosis"],
          correct_index: 1,
          explanation: "Osmosis is the specialized passive transport of water molecules across a selectively permeable membrane down a water potential gradient."
        },
        {
          id: "g9_u3_pq3",
          difficulty: "hard",
          s: "Which structural feature distinguishes plant cells from animal cells?",
          options: [
            "Presence of mitochondria",
            "Presence of a rigid cell wall composed of cellulose",
            "Presence of linear DNA in a nucleus",
            "Presence of ribosomes for protein synthesis"
          ],
          correct_index: 1,
          explanation: "Plant cells feature a rigid outer cell wall made of cellulose and large central vacuoles, which are absent in animal cells."
        }
      ]
    },
    {
      unit_number: 4,
      unit_title: "Reproduction",
      learning_objectives: [
        "Distinguish between asexual and sexual reproduction.",
        "Describe various modes of asexual reproduction including binary fission, budding, and vegetative propagation.",
        "Identify human reproductive system anatomy and primary/secondary sexual characteristics.",
        "Explain fertilization, gestation, pregnancy, and birth control methods.",
        "Identify modes of transmission and prevention of Sexually Transmitted Infections (STIs)."
      ],
      sections: [
        {
          section_id: "4.1",
          title: "Asexual Reproduction",
          content: "Asexual reproduction involves a single parent and produces genetically identical offspring (clones). Common methods include: 1. Binary fission (cell division in bacteria and Amoeba). 2. Budding (outgrowth formation in yeast and Hydra). 3. Fragmentation (breaking of parent body into parts that regenerate, e.g., Spirogyra). 4. Vegetative propagation (growth from plant runners, tubers, or bulbs)."
        },
        {
          section_id: "4.2",
          title: "Sexual Reproduction in Humans",
          content: "Sexual reproduction involves the fusion of male and female gametes (sperm and egg) to form a zygote, introducing genetic variation. Primary sexual characteristics are reproductive organs present at birth; secondary sexual characteristics develop during puberty under hormonal control (testosterone in males, estrogen/progesterone in females)."
        },
        {
          section_id: "4.3",
          title: "Fertilization, Pregnancy, and Birth Control",
          content: "Fertilization occurs when a sperm fuses with an egg in the Fallopian tube. The resulting zygote implants in the uterine wall, developing through embryonic and fetal stages supported by the placenta. Birth control methods (barrier, hormonal, behavioral, and surgical) prevent unwanted pregnancies."
        },
        {
          section_id: "4.4",
          title: "Sexually Transmitted Infections (STIs)",
          content: "STIs are infectious diseases spread primarily through unprotected sexual contact. Common examples include HIV/AIDS, gonorrhea, syphilis, and chlamydia. Prevention relies on abstinence, correct barrier contraceptive use (condoms), and early medical treatment."
        }
      ],
      worked_examples: [
        {
          id: "g9_u4_we1",
          title: "Calculating Bacterial Binary Fission Growth",
          problem: "A single bacterium undergoes binary fission every 20 minutes. Starting with 1 bacterium, how many bacterial cells will be produced after 2 hours under optimal conditions?",
          solution: "Step 1: Convert total time to minutes: 2 hours = 120 minutes.\nStep 2: Determine number of generations: 120 minutes / 20 minutes per generation = 6 generations.\nStep 3: Apply the exponential growth formula (Initial count * 2^n): 1 * 2^6 = 1 * 64 = 64 bacteria cells."
        }
      ],
      activities: [
        {
          title: "Observing Budding in Baker's Yeast",
          procedure: "1. Prepare a warm sugar solution in a beaker and add active dry yeast.\n2. Incubate for 30 minutes.\n3. Take a drop of the yeast suspension, place on a microscope slide, add a coverslip, and observe under high power to identify small buds protruding from parent yeast cells."
        }
      ],
      summary: "Reproduction ensures species survival. Asexual reproduction produces identical clones from one parent, whereas sexual reproduction creates genetic diversity via gamete fusion. Human reproduction involves coordinated hormonal cycles, fertilization, and pregnancy. Prevention of STIs is crucial for public health.",
      practice_questions: [
        {
          id: "g9_u4_pq1",
          difficulty: "easy",
          s: "Which type of reproduction involves a single parent and results in genetically identical offspring?",
          options: ["Sexual reproduction", "Asexual reproduction", "Cross-fertilization", "Meiotic recombination"],
          correct_index: 1,
          explanation: "Asexual reproduction requires only one parent and generates clones without gamete fusion."
        },
        {
          id: "g9_u4_pq2",
          difficulty: "medium",
          s: "Where does fertilization of the human egg by a sperm cell normally take place?",
          options: ["Ovary", "Uterus", "Fallopian tube (Oviduct)", "Vagina"],
          correct_index: 2,
          explanation: "Fertilization normally occurs in the upper third of the Fallopian tube (oviduct)."
        },
        {
          id: "g9_u4_pq3",
          difficulty: "hard",
          s: "If a bacterial cell divides by binary fission every 30 minutes, how many cells will result from 1 initial bacterium after 3 hours?",
          options: ["16", "32", "64", "128"],
          correct_index: 2,
          explanation: "3 hours equals 180 minutes. 180 / 30 = 6 generations. 1 * 2^6 = 64 cells."
        }
      ]
    },
      {

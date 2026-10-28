
/*
 * LearnBridge — Grade 9 Biology
 * Updated study notes based on the new-curriculum unit structure.
 *
 * Important:
 * This is an initial learning-content draft. Compare it with the
 * complete official Ethiopian Grade 9 Biology textbook before
 * describing it as fully textbook-verified.
 */

const GRADE9_BIOLOGY_NOTES = {
  subject: "Biology",
  grade: 9,
  curriculum: "Ethiopian New Curriculum",
  units: [
    {
      id: 1,
      title: "Introduction to Biology",
      objectives: [
        "Define biology and explain its importance.",
        "Identify major branches of biology.",
        "Describe the characteristics of living organisms.",
        "Explain how biology contributes to everyday life."
      ],
      sections: [
        {
          heading: "1.1 Meaning and importance of biology",
          content:
            "Biology is the scientific study of life and living organisms. It investigates their structures, functions, growth, reproduction, evolution, and relationships with their environments. Biology supports medicine, agriculture, environmental conservation, food production, and biotechnology."
        },
        {
          heading: "1.2 Major branches of biology",
          content:
            "Botany studies plants. Zoology studies animals. Microbiology studies microorganisms. Ecology studies relationships between organisms and their environments. Genetics studies heredity and variation. Anatomy studies body structures, while physiology studies how living structures function."
        },
        {
          heading: "1.3 Characteristics of living organisms",
          content:
            "Living organisms are generally characterized by cellular organization, metabolism, growth, response to stimuli, reproduction, homeostasis, and adaptation over generations. No single characteristic should be used alone to decide whether something is alive."
        },
        {
          heading: "1.4 Biology in society",
          content:
            "Biological knowledge helps people understand diseases, improve crops and livestock, protect biodiversity, manage waste, and use natural resources responsibly. Scientific investigations should use evidence, careful observations, and fair testing."
        }
      ],
      activity:
        "Choose a plant or animal near your home or school. Record observable characteristics and explain how your observations provide evidence that it is living.",
      summary:
        "Biology studies life. Its branches investigate different aspects of organisms, and its applications contribute to health, agriculture, technology, and environmental protection.",
      questions: [
        {
          question: "What is biology?",
          answer:
            "Biology is the scientific study of living organisms and life processes."
        },
        {
          question: "Which branch studies relationships between organisms and their environment?",
          answer: "Ecology."
        },
        {
          question: "Give two ways biology benefits society.",
          answer:
            "Examples include improving healthcare, increasing agricultural productivity, and conserving biodiversity."
        }
      ]
    },
    {
      id: 2,
      title: "Characteristics and Classification of Organisms",
      objectives: [
        "Describe common characteristics of living organisms.",
        "Explain why organisms are classified.",
        "Distinguish major groups of organisms.",
        "Use observable characteristics to compare organisms."
      ],
      sections: [
        {
          heading: "2.1 Diversity of organisms",
          content:
            "Earth contains many different kinds of organisms. They vary in size, structure, habitat, nutrition, and reproduction. Classification organizes this diversity so organisms can be identified, compared, and studied systematically."
        },
        {
          heading: "2.2 Principles of classification",
          content:
            "Organisms can be grouped by shared characteristics and evolutionary relationships. Common taxonomic ranks are domain, kingdom, phylum (called division in many plant classifications), class, order, family, genus, and species."
        },
        {
          heading: "2.3 Scientific names",
          content:
            "Binomial nomenclature gives each species a two-part scientific name: its genus followed by its specific epithet. The genus begins with a capital letter, the specific epithet with a lowercase letter, and the complete name is usually italicized when typed. For example, humans are Homo sapiens."
        },
        {
          heading: "2.4 Comparing organisms",
          content:
            "Scientists compare features such as cell type, number of cells, nutrition, body organization, reproduction, and genetic evidence. Similar appearance alone does not always prove that two organisms are closely related."
        }
      ],
      activity:
        "Choose three familiar organisms. Make a table comparing their visible structures, habitats, and ways of obtaining food. Explain which features could help classify them.",
      summary:
        "Classification organizes biological diversity. Scientists use shared characteristics and evidence of relationships to group organisms and identify species.",
      questions: [
        {
          question: "Why do scientists classify organisms?",
          answer:
            "Classification organizes biodiversity and makes organisms easier to identify, compare, and study."
        },
        {
          question: "What are the two parts of a scientific species name?",
          answer: "The genus name and the specific epithet."
        },
        {
          question: "Why is appearance alone not always enough for classification?",
          answer:
            "Organisms may look similar without being closely related; other structural and genetic evidence may be needed."
        }
      ]
    },
    {
      id: 3,
      title: "Cells",
      objectives: [
        "Explain cell theory.",
        "Identify major cell structures and their functions.",
        "Compare plant and animal cells.",
        "Explain diffusion and osmosis."
      ],
      sections: [
        {
          heading: "3.1 Cell theory",
          content:
            "Cell theory states that living organisms are made of one or more cells, the cell is the basic unit of life, and new cells arise from pre-existing cells."
        },
        {
          heading: "3.2 Cell structures",
          content:
            "The cell membrane regulates movement of substances into and out of the cell. Cytoplasm is where many reactions occur. The nucleus contains most of the cell's genetic material in eukaryotic cells. Mitochondria release usable energy through cellular respiration. Ribosomes make proteins."
        },
        {
          heading: "3.3 Plant and animal cells",
          content:
            "Plant cells typically have a cellulose cell wall, chloroplasts in photosynthetic tissues, and a large central vacuole. Animal cells lack a cellulose cell wall and chloroplasts. Both plant and animal cells have a cell membrane, cytoplasm, ribosomes, and mitochondria."
        },
        {
          heading: "3.4 Diffusion and osmosis",
          content:
            "Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration. Osmosis is the net movement of water through a selectively permeable membrane from higher water potential to lower water potential."
        },
        {
          heading: "3.5 Microscopes and magnification",
          content:
            "A microscope makes small structures easier to observe. Total magnification in a compound light microscope is calculated by multiplying eyepiece magnification by objective magnification. If the eyepiece is 10× and the objective is 40×, total magnification is 400×."
        }
      ],
      activity:
        "Draw and label a plant cell and an animal cell. Identify structures shared by both and structures typically found only in plant cells.",
      summary:
        "Cells are the basic units of life. Their structures perform specialized functions, and diffusion and osmosis help substances move across cell membranes.",
      questions: [
        {
          question: "State one principle of cell theory.",
          answer:
            "All living organisms consist of one or more cells."
        },
        {
          question: "Calculate total magnification using a 10× eyepiece and a 40× objective.",
          answer: "10 × 40 = 400×."
        },
        {
          question: "In which direction is there net diffusion?",
          answer:
            "From higher concentration to lower concentration."
        }
      ]
    },
    {
      id: 4,
      title: "Reproduction",
      objectives: [
        "Explain the importance of reproduction.",
        "Compare sexual and asexual reproduction.",
        "Describe basic reproductive processes in plants and animals.",
        "Explain how reproduction contributes to continuity of a species."
      ],
      sections: [
        {
          heading: "4.1 Importance of reproduction",
          content:
            "Reproduction produces new organisms and allows populations and species to continue across generations. It is not necessary for every individual organism to reproduce, but reproduction is essential for the long-term continuation of a species."
        },
        {
          heading: "4.2 Asexual reproduction",
          content:
            "Asexual reproduction involves one parent and does not involve the fusion of gametes. Examples include binary fission in many single-celled organisms, budding in yeast, and vegetative propagation in some plants. Offspring are often genetically very similar to the parent, except when mutations occur."
        },
        {
          heading: "4.3 Sexual reproduction",
          content:
            "Sexual reproduction generally involves the formation of gametes and their fusion during fertilization. It produces genetic variation among offspring. In flowering plants, pollen delivers male gametes to the female reproductive structures; after fertilization, seeds develop from ovules."
        },
        {
          heading: "4.4 Reproduction and development",
          content:
            "Reproductive processes differ among organisms. In animals, fertilization may occur internally or externally, depending on the species. Development describes the changes an organism undergoes as it grows and matures."
        }
      ],
      activity:
        "Compare one example of asexual reproduction with one example of sexual reproduction. Record the number of parents involved and whether gametes fuse.",
      summary:
        "Reproduction maintains species across generations. Asexual reproduction usually involves one parent, while sexual reproduction involves the fusion of gametes and generally increases genetic variation.",
      questions: [
        {
          question: "What is one difference between sexual and asexual reproduction?",
          answer:
            "Sexual reproduction involves the fusion of gametes; asexual reproduction does not."
        },
        {
          question: "What is fertilization?",
          answer:
            "The fusion of male and female gametes to form a zygote."
        },
        {
          question: "Name one form of asexual reproduction.",
          answer: "Examples include binary fission, budding, or vegetative propagation."
        }
      ]
    },
    {
      id: 5,
      title: "Human Health, Nutrition, and Disease",
      objectives: [
        "Identify major nutrients and their functions.",
        "Explain the importance of a balanced diet.",
        "Distinguish communicable and non-communicable diseases.",
        "Describe ways to prevent disease and maintain health."
      ],
      sections: [
        {
          heading: "5.1 Nutrients and their functions",
          content:
            "Carbohydrates are an important energy source. Lipids provide stored energy and form cell membranes. Proteins support growth, tissue repair, and the production of enzymes. Vitamins and minerals support normal body functions. Water is essential for transport and many chemical reactions, while dietary fibre supports healthy digestion."
        },
        {
          heading: "5.2 Balanced diet",
          content:
            "A balanced diet provides appropriate amounts of energy and essential nutrients. Nutritional needs vary with age, activity, growth, and health. A varied diet can include grains, legumes, vegetables, fruits, and suitable sources of protein and fats."
        },
        {
          heading: "5.3 Communicable diseases",
          content:
            "Communicable diseases are caused by infectious agents and can spread directly or indirectly. Examples include some bacterial, viral, fungal, and parasitic diseases. Prevention may involve handwashing, safe food and water, vaccination where available, sanitation, and appropriate medical care."
        },
        {
          heading: "5.4 Non-communicable diseases",
          content:
            "Non-communicable diseases do not spread from person to person as infections do. Examples include many forms of cardiovascular disease and diabetes. Risk can be influenced by a combination of genetics, environment, and lifestyle."
        },
        {
          heading: "5.5 Hygiene and public health",
          content:
            "Personal hygiene, clean water, safe food preparation, sanitation, and appropriate healthcare help protect individuals and communities. Symptoms that are severe or persistent should be assessed by a qualified health professional."
        }
      ],
      activity:
        "Create a health-promotion poster explaining three practical ways a school community can improve nutrition, hygiene, or disease prevention.",
      summary:
        "Good nutrition supports normal growth and body functions. Healthy habits, sanitation, vaccination where appropriate, and access to healthcare help prevent disease.",
      questions: [
        {
          question: "What is a balanced diet?",
          answer:
            "A diet that provides appropriate energy and essential nutrients for a person's needs."
        },
        {
          question: "What is the difference between communicable and non-communicable diseases?",
          answer:
            "Communicable diseases are caused by infectious agents that can spread; non-communicable diseases do not spread as infections between people."
        },
        {
          question: "Give two ways to reduce the spread of infectious diseases.",
          answer:
            "Examples include handwashing and safe food and water practices."
        }
      ]
    },
    {
      id: 6,
      title: "Ecology",
      objectives: [
        "Define ecology and describe levels of organization.",
        "Distinguish biotic and abiotic factors.",
        "Explain food chains, food webs, and energy flow.",
        "Describe ecosystems and the importance of conservation."
      ],
      sections: [
        {
          heading: "6.1 Ecology and ecosystems",
          content:
            "Ecology studies interactions among organisms and between organisms and their environment. An ecosystem includes living organisms and the non-living environment interacting in a particular area."
        },
        {
          heading: "6.2 Biotic and abiotic factors",
          content:
            "Biotic factors are living components or the effects of living organisms, such as predators, competitors, and food sources. Abiotic factors are non-living environmental conditions, such as light, temperature, water, soil, and minerals."
        },
        {
          heading: "6.3 Food chains and food webs",
          content:
            "A food chain shows one pathway through which energy and nutrients pass between organisms. Producers make organic food, usually using sunlight. Consumers obtain energy by feeding on other organisms. Decomposers break down dead material and wastes, returning nutrients to the environment. Food webs connect many food chains."
        },
        {
          heading: "6.4 Energy flow and nutrient cycling",
          content:
            "Energy enters most ecosystems through sunlight, passes through feeding relationships, and is eventually dissipated as heat. Nutrients such as carbon and nitrogen cycle between organisms and the environment."
        },
        {
          heading: "6.5 Biodiversity and conservation",
          content:
            "Biodiversity includes the variety of genes, species, and ecosystems. Habitat destruction, pollution, invasive species, and overexploitation can reduce biodiversity. Conservation measures include protecting habitats, restoring damaged ecosystems, and using natural resources sustainably."
        }
      ],
      activity:
        "Draw a food chain from a local Ethiopian ecosystem. Label the producer and consumers, then describe how a change in one population could affect the others.",
      summary:
        "Ecology examines interactions in ecosystems. Energy flows through food chains and webs, while nutrients cycle. Biodiversity supports ecosystem stability and needs protection.",
      questions: [
        {
          question: "What is an ecosystem?",
          answer:
            "A community of organisms interacting with one another and with their non-living environment."
        },
        {
          question: "Give one biotic factor and one abiotic factor.",
          answer:
            "Biotic: a predator or plant. Abiotic: water, light, or temperature."
        },
        {
          question: "Why is biodiversity important?",
          answer:
            "It supports ecosystem functioning and provides resources and benefits to living organisms, including humans."
        }
      ]
    }
  ]
};
            

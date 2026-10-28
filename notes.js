// ==========================================
// LEARNBRIDGE NOTES DATA - BIOLOGY GRADE 9
// ==========================================

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
          content: "Biology is the scientific study of life and living organisms, derived from the Greek words 'bios' (life) and 'logos' (study). Biologists examine structure, function, growth, origin, and distribution. Studying biology helps us understand ecosystems, treat diseases, optimize agriculture, and preserve environmental balance."
        },
        {
          section_id: "1.2",
          title: "Renowned Ethiopian Biologists",
          content: "1. Dr. Aklilu Lemma (1935–1997) discovered that endod plant berries (Phytolacca dodecandra) act as a natural molluscicide, killing snails that transmit schistosomiasis (bilharzia). 2. Prof. Tilahun Yilma developed recombinant vaccines against rinderpest. 3. Dr. Melaku Worede pioneered plant genetic resource conservation and the national gene bank."
        },
        {
          section_id: "1.3",
          title: "The Compound Light Microscope",
          content: "Microscopes magnify small specimens using light and glass lenses. Total magnification = Ocular lens power × Objective lens power. Coarse adjustment is used on low power, while fine adjustment is used for high-power focusing."
        }
      ],
      worked_examples: [
        {
          id: "g9_u1_we1",
          title: "Calculating Total Microscope Magnification",
          problem: "A student observes a cell using a 10x ocular lens and a 40x objective lens. Calculate total magnification. If the cell measures 0.02 mm, what is its apparent image size?",
          solution: "1. Total Magnification = 10 * 40 = 400x.\n2. Apparent Image Size = Actual Size × Total Magnification = 0.02 mm × 400 = 8.0 mm."
        }
      ],
      activities: [
        {
          title: "Observing Onion Epidermal Cells",
          procedure: "Peel a thin transparent layer from an onion scale, mount on a glass slide with iodine stain, cover with a coverslip, and observe under low and high power."
        }
      ],
      summary: "Biology is the scientific study of life. Ethiopian researchers like Dr. Aklilu Lemma have made vital global discoveries. Microscopes allow us to study cells using calculated total magnifications.",
      practice_questions: [
        {
          id: "g9_u1_pq1",
          difficulty: "easy",
          question: "Which Ethiopian scientist discovered the molluscicidal properties of endod berries against bilharzia snails?",
          options: ["Dr. Aklilu Lemma", "Prof. Tilahun Yilma", "Dr. Melaku Worede", "Prof. Yalemtsehay Mekonnen"],
          correct_index: 0,
          explanation: "Dr. Aklilu Lemma discovered that endod berries kill Schistosoma-carrying snails."
        },
        {
          id: "g9_u1_pq2",
          difficulty: "medium",
          question: "What is the total magnification of a microscope with a 15x ocular lens and a 40x objective lens?",
          options: ["55x", "400x", "600x", "1,500x"],
          correct_index: 2,
          explanation: "Total magnification = 15 × 40 = 600x."
        },
        {
          id: "g9_u1_pq3",
          difficulty: "hard",
          s: "Which variable is intentionally manipulated by a researcher during an experiment?",
          options: ["Dependent variable", "Controlled variable", "Independent variable", "Extraneous variable"],
          correct_index: 2,
          explanation: "The independent variable is the factor changed by the experimenter to test its effect."
        }
      ]
    },
    {
      unit_number: 2,
      unit_title: "Characteristics and Classification of Organisms",
      learning_objectives: [
        "State the core characteristics of living things.",
        "Apply Linnaean binomial nomenclature correctly.",
        "Distinguish between kingdoms in the Five-Kingdom classification system."
      ],
      sections: [
        {
          section_id: "2.1",
          title: "Characteristics of Living Things",
          content: "Living organisms exhibit MR. GREEN: Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, and Nutrition."
        },
        {
          section_id: "2.2",
          title: "Binomial Nomenclature",
          content: "Scientific names consist of a capitalized Genus and lowercase species epithet (e.g., Canis simensis), italicized when typed or underlined separately when handwritten."
        }
      ],
      worked_examples: [
        {
          id: "g9_u2_we1",
          title: "Formatting Scientific Names",
          problem: "Identify errors in writing the human scientific name: 'homo Sapiens'.",
          solution: "1. Genus 'homo' must start with a capital letter ('Homo').\n2. Species 'Sapiens' must start with a lowercase letter ('sapiens'). Correct form: *Homo sapiens*."
        }
      ],
      activities: [
        {
          title: "Constructing a Dichotomous Key",
          procedure: "Collect local leaves and build a branching key based on margin and venation."
        }
      ],
      summary: "Living organisms share core life processes and are organized using Linnaean binomial nomenclature across five kingdoms.",
      practice_questions: [
        {
          id: "g9_u2_pq1",
          difficulty: "easy",
          question: "In the scientific name *Panthera leo*, what does 'Panthera' represent?",
          options: ["Species", "Genus", "Family", "Kingdom"],
          correct_index: 1,
          explanation: "The first word is the Genus."
        },
        {
          id: "g9_u2_pq2",
          difficulty: "medium",
          question: "Which taxonomic rank is the most specific?",
          options: ["Phylum", "Class", "Family", "Species"],
          correct_index: 3,
          explanation: "Species represents individual organisms capable of interbreeding."
        },
        {
          id: "g9_u2_pq3",
          difficulty: "hard",
          question: "Which kingdom contains eukaryotic heterotrophs with chitin cell walls?",
          options: ["Plantae", "Fungi", "Monera", "Protista"],
          correct_index: 1,
          explanation: "Fungi possess chitin cell walls and absorb nutrients externally."
        }
      ]
    }
  ]
};
      

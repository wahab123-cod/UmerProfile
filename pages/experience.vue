<template>
    <div>
        <Header />
  <section class="py-16 px-6 lg:px-20 bg-gray-900 text-white">
    <h2 class="text-4xl font-bold text-center mb-12  mt-5">
      <span class="text-white">
        Professional Experience
      </span>
    </h2>
    
    <div class="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
      <div
        v-for="(exp, index) in experiences"
        :key="index"
        class="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-cyan-400"
      >
        <!-- Company header -->
        <div class="relative h-32 overflow-hidden">
          <img
            :src="exp.image"
            :alt="exp.company"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>
          <div class="absolute bottom-4 left-4">
            <h3 class="text-xl font-bold text-white">{{ exp.company }}</h3>
            <p class="text-cyan-400 text-sm font-medium">{{ exp.role }}</p>
          </div>
        </div>
        
        <!-- Card content -->
        <div class="p-5">
          <div class="flex items-center mb-3 text-gray-400 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ exp.period }}
          </div>
          
          <ul class="space-y-2 text-gray-300 text-sm">
            <li 
              v-for="(task, tIndex) in exp.tasks" 
              :key="tIndex"
              class="flex items-start"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{{ task }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <Footer />
  </div>
</template>

<script setup>
const experiences = [
  {
    company: "Fiverr.com",
    role: "Assistance in Computer Science",
    period: "Aug 2018 – Now",
    image: "../images/fiverr.jpg",
    tasks: [
      "Design & develop Management Systems in Java and JavaFX",
      "Solve Computer Science problems and SQA",
      "Full Stack dev: HTML, CSS, React JS, Vue JS, Django"
    ]
  },
  {
    company: "Kaggle",
    role: "Researcher",
    period: "Aug 2020 – Aug 2022",
    image: "images/kaggle.jpg",
    tasks: [
      "Image processing with Keras, OpenCV, TensorFlow, NumPy",
      "NFL helmet detection using Deep Learning techniques"
    ]
  },
  {
    company: "Programmers Force",
    role: "Python Developer",
    period: "Oct 2021 – Jan 2022",
    image: "images/programer.jpg",
    tasks: [
      "Python, NumPy, Pandas, OpenCV, Django, Flask, SQL, MongoDB",
      "Dataset creation, augmentation & annotation",
      "YOLO, MRCNN, UNET for object detection & segmentation"
    ]
  },
  {
    company: "TheBeeLogix",
    role: "Software Engineer",
    period: "Jan 2022 – May 2023",
    image: "images/beelogix.jpg",
    tasks: [
      "Computer Vision problem solving",
      "API creation in Flask & Django",
      "Data scraping & preprocessing for ML models"
    ]
  },
  {
    company: "Prismware Technologies",
    role: "Senior Python Engineer",
    period: "May 2023 – Dec 2023",
    image: "images/preesim.jpg",
    tasks: [
      "Flask & FastAPI applications",
      "3rd party hotel API integrations",
      "LLM statistics extraction using LangChain & OpenAI"
    ]
  },
  {
    company: "Stella Technology",
    role: "Senior Software Engineer (AIML, Python)",
    period: "Jan 2024 Present",
    image: "images/stella.jpg",
    tasks: [
      "Django API development",
      "Fine-tuning & pretraining LLMs",
      "RAG solutions & AI model deployments on AWS"
    ]
    },

];
</script>

<style scoped>
/* Simple hover effect */
.group:hover {
  transform: translateY(-2px);
}
</style>
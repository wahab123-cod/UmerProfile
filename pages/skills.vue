<template>
  <div>
    <Header />

    <section class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
      
      <!-- Heading -->
      <div class="max-w-6xl mx-auto text-center mb-14">
        <h1 class="text-4xl md:text-5xl font-bold tracking-wide">
          My <span class="text-cyan-400">Skills</span>
        </h1>
        <p class="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          Over 6+ years of experience delivering real-world projects using modern technologies.
          Here’s a categorized snapshot of my technical expertise.
        </p>
      </div>

      <!-- Skills Categories -->
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        <div v-for="(category, idx) in skillCategories" :key="idx" class="bg-gray-800 rounded-xl p-8 shadow-lg hover:scale-105 transform transition duration-300">
          <h3 class="text-2xl font-semibold text-cyan-400 mb-4">{{ category.name }}</h3>
          <ul class="space-y-2">
            <li v-for="(skill, index) in category.items" :key="index" class="flex items-start space-x-2">
              <font-awesome-icon :icon="skill.icon" :class="skill.color" class="text-lg mt-1" />
              <span>{{ skill.text }}</span>
            </li>
          </ul>
        </div>

      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPython, faJs, faJava, faHtml5, faCss3, faVuejs, faReact, faGithub, faAws,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase, faRobot, faCloud, faCode, faCodeBranch, faBrain, faCogs, faLaptopCode, faServer, faLayerGroup, faChartLine
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPython, faJs, faJava, faHtml5, faCss3, faVuejs, faReact, faGithub, faAws,
  faDatabase, faRobot, faCloud, faCode, faCodeBranch, faBrain, faCogs, faLaptopCode, faServer, faLayerGroup, faChartLine
);

export default {
  name: "Skills",
  components: { FontAwesomeIcon },
  data() {
    return {
      skillCategories: [
        {
          name: "Programming / Scripting Languages",
          items: [
            { text: "Python", icon: ["fab", "python"], color: "text-yellow-400" },
            { text: "JavaScript", icon: ["fab", "js"], color: "text-yellow-300" },
            { text: "C++", icon: ["fas", "code"], color: "text-blue-400" },
            { text: "Java", icon: ["fab", "java"], color: "text-red-400" },
            { text: "JavaFX", icon: ["fas", "laptop-code"], color: "text-green-400" },
            { text: "HTML", icon: ["fab", "html5"], color: "text-orange-400" },
            { text: "CSS", icon: ["fab", "css3"], color: "text-blue-500" },
            { text: "Bash", icon: ["fas", "terminal"], color: "text-gray-300" },
          ]
        },
        {
          name: "Web Development & Automation Tools",
          items: [
            { text: "Flask", icon: ["fas", "server"], color: "text-red-300" },
            { text: "FastAPI", icon: ["fas", "bolt"], color: "text-green-300" },
            { text: "Vue.js", icon: ["fab", "vuejs"], color: "text-green-500" },
            { text: "React.js", icon: ["fab", "react"], color: "text-blue-400" },
            { text: "Django", icon: ["fas", "server"], color: "text-green-400" },
            { text: "Scrapy", icon: ["fas", "spider"], color: "text-purple-400" },
            { text: "Selenium", icon: ["fas", "robot"], color: "text-green-500" },
            { text: "BeautifulSoup", icon: ["fas", "mug-hot"], color: "text-yellow-400" },
          ]
        },
        {
          name: "Databases",
          items: [
            { text: "SQL Server", icon: ["fas", "database"], color: "text-blue-300" },
            { text: "MySQL", icon: ["fas", "database"], color: "text-orange-300" },
            { text: "MongoDB", icon: ["fas", "database"], color: "text-green-400" },
            { text: "PostgreSQL", icon: ["fas", "database"], color: "text-blue-400" },
            { text: "Oracle", icon: ["fas", "database"], color: "text-red-500" },
            { text: "Firebase", icon: ["fas", "database"], color: "text-yellow-500" },
            { text: "Firestore", icon: ["fas", "database"], color: "text-orange-500" },
            { text: "BigQuery", icon: ["fas", "database"], color: "text-cyan-400" },
          ]
        },
        {
          name: "Machine Learning & AI",
          items: [
            { text: "OpenCV", icon: ["fas", "camera"], color: "text-purple-400" },
            { text: "Keras", icon: ["fas", "brain"], color: "text-pink-400" },
            { text: "TensorFlow", icon: ["fas", "brain"], color: "text-orange-400" },
            { text: "NumPy", icon: ["fas", "layer-group"], color: "text-blue-400" },
            { text: "Scikit-learn", icon: ["fas", "chart-line"], color: "text-green-400" },
            { text: "PyTorch", icon: ["fas", "brain"], color: "text-red-400" },
            { text: "Pandas", icon: ["fas", "layer-group"], color: "text-yellow-400" },
            { text: "OpenAI", icon: ["fas", "robot"], color: "text-cyan-400" },
          ]
        },
        {
          name: "Cloud, DevOps & Tools",
          items: [
            { text: "GCP", icon: ["fab", "google"], color: "text-red-400" },
            { text: "AWS", icon: ["fab", "aws"], color: "text-orange-400" },
            { text: "Docker", icon: ["fas", "cogs"], color: "text-blue-400" },
            { text: "CI/CD", icon: ["fas", "code-branch"], color: "text-indigo-400" },
            { text: "Cloud Build", icon: ["fas", "cloud"], color: "text-cyan-400" },
            { text: "Lightsail", icon: ["fas", "server"], color: "text-yellow-400" },
            { text: "EC2", icon: ["fas", "server"], color: "text-green-400" },
            { text: "VPC", icon: ["fas", "network-wired"], color: "text-gray-400" },
          ]
        },
        {
          name: "Core & Extra Skills",
          items: [
            { text: "OOP", icon: ["fas", "code"], color: "text-blue-400" },
            { text: "Data Structures", icon: ["fas", "layer-group"], color: "text-green-400" },
            { text: "Computer Vision", icon: ["fas", "eye"], color: "text-purple-400" },
            { text: "Cyber Security", icon: ["fas", "shield-alt"], color: "text-red-400" },
            { text: "LLMs", icon: ["fas", "robot"], color: "text-cyan-400" },
            { text: "Teamwork", icon: ["fas", "users"], color: "text-yellow-400" },
            { text: "Technical Writing", icon: ["fas", "file-alt"], color: "text-pink-400" },
            { text: "Presentation Skills", icon: ["fas", "chalkboard-teacher"], color: "text-green-400" },
          ]
        }
      ]
    };
  }
};
</script>

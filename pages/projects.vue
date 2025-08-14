<template>
  <div>
    <Header />

    <section class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
      <!-- Heading -->
      <div class="max-w-6xl mx-auto text-center mb-14">
        <h1 class="text-4xl md:text-5xl font-bold tracking-wide">
          My <span class="text-cyan-400">Projects</span>
        </h1>
        <p class="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          Here’s a collection of my academic, professional, and research projects in areas such as Web Development, Machine Learning, AI, Computer Vision, and Cloud.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-gray-800 hover:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col"
        >
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-xl font-semibold text-cyan-400 mb-2">{{ project.title }}</h3>
            <p class="text-gray-300 flex-grow">{{ project.description }}</p>
            <span class="text-sm text-gray-400 mt-4 block">Tech: {{ project.tech }}</span>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        { title: "Hostel Management System", description: "A complete hostel management solution using Java and MySQL.", tech: "Java, MySQL" },
        { title: "Transport Management System", description: "Efficient transport scheduling and tracking system.", tech: "Java, Oracle"},
        { title: "Marriage Hall Management System", description: "Manage bookings and events using a JavaFX-based system.", tech: "JavaFX, MySQL"},
        { title: "Pharmacy Management System", description: "Inventory and sales management for pharmacies.", tech: "JavaFX, MySQL"},
        { title: "Covid19 Game", description: "An educational Java-based game about COVID-19.", tech: "Java"},
        { title: "C Language Learning Platform", description: "Interactive learning platform for C language learners.", tech: "HTML, CSS, JS, PHP, MySQL" },
        { title: "Sentimental Analysis of IMDB Movie Reviews", description: "NLP-based sentiment analysis on movie reviews.", tech: "PyTorch, NLP"},
        { title: "Face Mask Detection", description: "Real-time mask detection system.", tech: "Machine Learning"},
        { title: "Malware Detection System", description: "Identify malware using KNN and Random Forest algorithms.", tech: "Python, ML"},
        { title: "Facial Expressions & Hand Gestures Recognition (FYP)", description: "Recognition system using OpenCV and Keras.", tech: "OpenCV, Keras"},
        { title: "Attendance System via Face Detection", description: "Automated attendance system using Flask & OpenCV.", tech: "Python, Flask, OpenCV"},
        { title: "Auto Training Management System", description: "Automated object detection model training.", tech: "Django, PyTorch, Scikit-learn"},
        { title: "House Side Detection", description: "Detect different sides of houses from images.", tech: "Keras, TensorFlow, OpenCV"},
        { title: "Duplicate Image Detection & Encryption", description: "Detect duplicate images and secure them via encryption.", tech: "NumPy, PyBase64"},
        { title: "Binary & Multi-classification Models", description: "Training and testing multiple classification models.", tech: "Python, ML"},
        { title: "Online E-learning Platform", description: "Learning platform for online courses.", tech: "Vue.js, Django"},
        { title: "Real Estate Price Prediction", description: "Predict property prices using ARIMA model.", tech: "Python, ARIMA"},
        { title: "Get Statistics Project", description: "Extract meaningful statistics from BigQuery data.", tech: "OpenAI, LangChain, GCP"},
        { title: "Brainy Hotel Management", description: "Hotel management in Europe using GCP services.", tech: "Flask, FastAPI, GCP"},
        { title: "IGEN Tax Calculation System", description: "Integrated with BigCommerce & Shopify.", tech: "Django, Vue.js, AWS"},
        { title: "SecureGPT", description: "Secure GPT usage with obfuscation and guardrails.", tech: "Django, Python"}
      ]
    };
  }
};
</script>

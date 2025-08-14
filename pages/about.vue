<template>
  <div>
    <Header />

    <section class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
      
      <!-- Heading -->
      <div class="max-w-6xl mx-auto text-center mb-14">
        <h1 class="text-4xl md:text-5xl font-bold tracking-wide">
          About <span class="text-cyan-400">Me</span>
        </h1>
        <p class="text-gray-400 mt-4 max-w-3xl mx-auto leading-relaxed">
          I am a dedicated Computer Science professional with a passion for research and innovation.  
          My academic journey from <strong>BS in Computer Science</strong> to pursuing an <strong>MS</strong> at COMSATS University has fueled my interest in frontier technologies like Quantum Computing, Artificial Intelligence, and Machine Learning.
        </p>
      </div>

      <!-- Education Section -->
      <div class="max-w-6xl mx-auto bg-gray-800 rounded-xl p-8 shadow-lg mb-16">
        <h2 class="text-2xl font-bold text-cyan-400 mb-6">Education</h2>
        <ul class="space-y-4 text-gray-300">
          <li>🎓 <strong>BS in Computer Science</strong> — COMSATS University (Graduated)</li>
          <li>📚 <strong>MS in Computer Science</strong> — COMSATS University (Ongoing)</li>
          <li>🔬 Specializing in: Quantum Computing, AI, Machine Learning</li>
        </ul>
      </div>

      <!-- Research & Interests -->
      <div class="max-w-6xl mx-auto space-y-12">
        
        <!-- Quantum Computing -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img 
            src="../public//images/quantum.jpg" 
            alt="Quantum Computing" 
            class="rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />
          <div>
            <h2 class="text-2xl font-bold text-cyan-400 mb-4">Quantum Computing</h2>
            <p class="text-gray-400 leading-relaxed">
              Quantum Computing leverages the principles of quantum mechanics to process information exponentially faster than classical systems.  
              With the power of <em>superposition</em> and <em>entanglement</em>, quantum computers can tackle problems in cryptography, optimization, and simulation that are practically impossible for traditional machines.
            </p>
            <p class="text-gray-400 mt-3">
              My research focuses on how quantum algorithms can be integrated with AI to solve real-world challenges, including drug discovery, climate modeling, and financial risk analysis.
            </p>
          </div>
        </div>

        <!-- Artificial Intelligence -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
          <div class="order-2 md:order-1">
            <h2 class="text-2xl font-bold text-cyan-400 mb-4">Artificial Intelligence</h2>
            <p class="text-gray-400 leading-relaxed">
              Artificial Intelligence (AI) enables machines to perform tasks that require human-like intelligence.  
              From natural language processing to computer vision, AI is revolutionizing industries by automating complex decision-making.
            </p>
            <p class="text-gray-400 mt-3">
              I work on AI systems that not only process data but also adapt and learn from it — enhancing accuracy, reducing bias, and creating more trustworthy models.
            </p>
          </div>
          <img 
            src="../public//images//AI.jpg" 
            alt="Artificial Intelligence" 
            class="rounded-xl shadow-lg hover:scale-105 transition duration-300 order-1 md:order-2"
          />
        </div>

        <!-- Machine Learning -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img 
            src="../public/images/ML.jpg" 
            alt="Machine Learning" 
            class="rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />
          <div>
            <h2 class="text-2xl font-bold text-cyan-400 mb-4">Machine Learning</h2>
            <p class="text-gray-400 leading-relaxed">
              Machine Learning (ML) is a subset of AI where algorithms learn patterns from data to make predictions or decisions without being explicitly programmed.  
              It powers everything from recommendation systems to fraud detection.
            </p>
            <p class="text-gray-400 mt-3">
              I specialize in supervised and unsupervised learning techniques, building models for predictive analytics, and exploring deep learning for image and speech recognition.
            </p>
          </div>
        </div>

      </div>

      <!-- Future Goals -->
      <div class="max-w-6xl mx-auto mt-16 bg-gray-800 rounded-xl p-8 shadow-lg">
        <h2 class="text-2xl font-bold text-cyan-400 mb-4">Future Vision</h2>
        <p class="text-gray-400 leading-relaxed">
          My mission is to push the boundaries of technology by merging Quantum Computing and Artificial Intelligence to create solutions that address humanity's most complex challenges.  
          I aim to contribute to advancements in healthcare, climate change mitigation, secure communications, and ethical AI development.
        </p>
      </div>

    </section>

    <Footer />
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
</style>

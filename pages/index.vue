<template>
    <div>
        <Header />
  <section id="home" class="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
      
      <!-- Left Content -->
      <div class="flex-1 space-y-6 text-center md:text-left">
        <h2 class="text-4xl md:text-5xl font-bold">
          Hi, I'm <span class="text-cyan-400">Umer</span>
        </h2>
        <h3 class="text-2xl font-semibold">Full Stack Senior Python Developer</h3>
        <p class="text-gray-300 max-w-lg">
          I have 4+ years of industry experience working on AI automation projects, backend development in Python, and frontend development with Vue & React.
        </p>

        <div class="flex justify-center md:justify-start space-x-4">
          <NuxtLink href="/contact" class="bg-cyan-500 hover:bg-cyan-400 text-white px-5 py-3 rounded-lg font-semibold transition">Hire Me</NuxtLink>
          <NuxtLink href="/projects" class="bg-transparent border border-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-5 py-3 rounded-lg font-semibold transition">View Work</NuxtLink>
        </div>
      </div>

      <!-- Right Image -->
      <div class="flex-1 flex justify-center mt-10 md:mt-0">
        <div class="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/50">
          <img src="../public/images/umer.jpeg"  alt="Umer" class="object-cover w-full h-full">
        </div>
      </div>

    </div>
  </section>
  <Footer />
  </div>
</template>

<script setup>

</script>

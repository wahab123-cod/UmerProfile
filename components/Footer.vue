<template>
  <footer
    class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10 mt-auto"
  >
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- About -->
      <div>
        <h2 class="text-2xl font-extrabold text-white mb-4">
          Umer<span class="text-cyan-400">Dev</span>
        </h2>
        <p class="text-gray-400 leading-relaxed">
          Passionate developer crafting modern, responsive, and high-performance web
          applications with beautiful UI/UX.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-xl font-semibold mb-4 border-b border-cyan-400 pb-2">
          Quick Links
        </h3>
        <ul class="space-y-3">
          <li v-for="link in navLinks" :key="link.name">
            <a
              :href="link.href"
              class="hover:text-cyan-400 transition duration-300 flex items-center space-x-2"
            >
              <span>➜</span>
              <span>{{ link.name }}</span>
            </a>
          </li>
        </ul>
      </div>

      
    </div>

    <!-- Bottom Bar -->
    <div class="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
      © {{ new Date().getFullYear() }} UmerDar. All Rights Reserved.
    </div>
  </footer>
</template>

<script setup>

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];
</script>

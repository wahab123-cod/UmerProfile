<template>
  <header
    class="fixed w-full z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg backdrop-blur-md"
  >
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <h1
        class="text-2xl font-extrabold text-white tracking-wide cursor-pointer hover:scale-105 transition-transform duration-300"
      >
        Umer<span class="text-cyan-400"> Ehsan Dar</span>
      </h1>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex flex-1 justify-center">
        <ul class="flex space-x-12">
          <!-- Increased space between links -->
          <li v-for="link in navLinks" :key="link.name">
            <NuxtLink
              :href="link.href"
              class="relative text-white font-medium tracking-wide px-3 py-1 hover:text-cyan-400 transition-colors duration-300 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {{ link.name }}
         </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden text-white text-2xl focus:outline-none hover:text-cyan-400 transition"
        @click="isMenuOpen = !isMenuOpen"
      >
        ☰
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-gray-900 text-white px-6 py-4 space-y-6 shadow-lg"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="block py-2 text-lg font-medium hover:text-cyan-400 transition duration-300"
          @click="isMenuOpen = false"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
  { name: "Projects", href: "/projects" },
     { name: "Experience", href: "/experience" }
];
</script>

<style scoped>
/* Smooth fade-in animation for mobile menu */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

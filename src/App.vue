<script setup>
import { onMounted } from 'vue';
import AboutMeComponent from './components/AboutMeComponent.vue';
import MenuComponent from './components/MenuComponent.vue';
import SkillsComponent from './components/SkillsComponent.vue';
import EducationComponent from './components/EducationComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
import Lenis from 'lenis';

const lenis = new Lenis({
  lerp: 0.05,
  smooth: true,
});

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    lenis.scrollTo(el, {
      immediate: false,
      duration: 0.5,
      easing: (t) => t,
    });
    el.classList.add('section-enter');
    setTimeout(() => el.classList.remove('section-enter'), 100);
  }
}

onMounted(() => {
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
});
</script>

<template>
  <header class="text-white">
    <MenuComponent :scrollTo="scrollTo" />
  </header>
  <main
    class="bg-gradient-to-br from-(--color2) to-(--color4) min-h-screen font-(family-name:--font-text) text-white"
  >
    <AboutMeComponent id="about-me" />
    <SkillsComponent id="skills" />
    <EducationComponent id="education" />
    <ContactComponent id="contact" />
  </main>
</template>

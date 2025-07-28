<script setup>
import { onMounted } from 'vue';
import AboutMeComponent from './components/AboutMeComponent.vue';
import MenuComponent from './components/MenuComponent.vue';
import SkillsComponent from './components/SkillsComponent.vue';
import EducationComponent from './components/EducationComponent.vue';
import ContactComponent from './components/ContactComponent.vue';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    el.classList.add('section-enter');
    setTimeout(() => el.classList.remove('section-enter'), 200);
  }
}

onMounted(() => {
  if (window.VANTA && window.VANTA.FOG) {
    window.VANTA.FOG({
      el: '#background',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: '#00467e',
      midtoneColor: '#002d52',
      lowlightColor: '#00172b',
      baseColor: '#000004',
    });
  }
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

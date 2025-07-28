<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
  scrollTo: {
    type: Function,
    required: true,
  },
});

const showMenu = ref(true);
let lastScrollY = window.scrollY;

const handleScroll = () => {
  if (window.scrollY > lastScrollY) {
    showMenu.value = false;
  } else {
    showMenu.value = true;
  }
  lastScrollY = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div
    class="flex justify-center items-center fixed top-0 left-0 w-full z-100 transform transition-transform duration-300 ease-in-out"
    :style="{ transform: showMenu ? 'translateY(0)' : 'translateY(-100%)' }"
  >
    <div
      class="bg-(--color2) text-sm md:text-md xl:text-xl 2xl:text-2xl rounded-full md:px-5 px-2 mt-5 shadow-xl flex gap-5 font-(family-name:--font-menu)"
    >
      <button
        class="hover:text-slate-400 hover:cursor-pointer transition-colors"
        @click="props.scrollTo('about-me')"
      >
        About me
      </button>
      <button
        class="hover:text-slate-400 hover:cursor-pointer transition-colors"
        @click="props.scrollTo('skills')"
      >
        Technical skills
      </button>
      <button
        class="hover:text-slate-400 hover:cursor-pointer transition-colors"
        @click="props.scrollTo('education')"
      >
        Education
      </button>
      <button
        class="hover:text-slate-400 hover:cursor-pointer transition-colors"
        @click="props.scrollTo('contact')"
      >
        Contact
      </button>
    </div>
  </div>
</template>

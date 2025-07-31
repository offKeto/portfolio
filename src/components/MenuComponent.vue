<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageButton from './LanguageButton.vue';

const { t, locale } = useI18n();
const props = defineProps({
  scrollTo: {
    type: Function,
    required: true,
  },
});

const showMenu = ref(true);
const showMenuSm = ref(false);
let lastScrollY = window.scrollY;

const handleScroll = () => {
  if (window.scrollY > lastScrollY) {
    showMenu.value = false;
  } else {
    showMenu.value = true;
  }
  lastScrollY = window.scrollY;
};

const toggleMenuSm = () => {
  showMenuSm.value = !showMenuSm.value;
};

const changeLanguage = (lang) => {
  locale.value = lang;
};

const isMdOrLarger = ref(window.innerWidth >= 768);

const handleResize = () => {
  isMdOrLarger.value = window.innerWidth >= 768;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <button
    v-if="!showMenuSm"
    @click="toggleMenuSm"
    class="fixed md:hidden right-5 top-5 transform transition-all z-1000 hover:cursor-pointer bg-gray-500/20 hover:bg-gray-500/40 rounded-xl"
  >
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
        fill="#ffffff"
      />
    </svg>
  </button>
  <div
    class="fixed flex flex-row justify-center md:justify-center h-full md:items-center md:bottom-auto md:h-auto md:left-0 w-full z-10 transform transition-transform duration-300"
    :class="{
      'bg-gray-900/40': showMenuSm,
      hidden: !showMenuSm,
    }"
  >
    <nav
      class="z-100 shadow-xl fixed right-0 h-auto md:right-auto rounded-bl-lg bg-(--color2) pt-5 w-auto text-xl 2xl:text-2xl md:mt-20 md:px-5 flex flex-col md:flex-row py-2 md:py-0 px-4 md:rounded-full gap-5 font-(family-name:--font-menu) transform transition-transform duration-300 ease-in-out items-end justify-center"
      :style="{
        transform: isMdOrLarger
          ? showMenu
            ? 'translateY(0)'
            : 'translateY(-250%)'
          : showMenuSm
          ? 'translateX(0)'
          : 'translateX(100%)',
      }"
    >
      <button
        v-if="!isMdOrLarger"
        @click="toggleMenuSm"
        class="md:hidden transform transition-all z-1000 hover:cursor-pointer bg-gray-500/20 hover:bg-gray-500/40 rounded-xl"
      >
        <svg
          width="50"
          height="50"
          viewBox="0 -0.5 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
            fill="#ffffff"
          />
        </svg>
      </button>
      <button
        class="hover:text-slate-400 hover:cursor-pointer transition-colors"
        @click="props.scrollTo('about-me')"
      >
        {{ t('Menu.AboutMe') }}
      </button>
      <button
        class="hover:text-slate-400 hover:cursor-pointer transition-colors"
        @click="props.scrollTo('skills')"
      >
        {{ t('Menu.Skills') }}
      </button>
      <button
        class="hover:text-slate-400 hover:cursor-pointer transition-colors"
        @click="props.scrollTo('education')"
      >
        {{ t('Menu.Education') }}
      </button>
      <button
        class="hover:text-slate-400 hover:cursor-pointer transition-colors"
        @click="props.scrollTo('contact')"
      >
        {{ t('Menu.Contact') }}
      </button>
      <div v-if="!isMdOrLarger">
        <LanguageButton @changeLanguage="changeLanguage" />
      </div>
    </nav>
  </div>

  <!-- Cambiar idiomas -->
  <div
    class="fixed md:flex md:items-center z-1000 md:top-4.5 md:right-10 transform transition-transform duration-300 ease-in-out justify-center items-center"
    :style="{
      transform: isMdOrLarger
        ? showMenu
          ? 'translateX(0)'
          : 'translateX(400%)'
        : showMenuSm
        ? 'translateX(0)'
        : 'translateX(500%)',
    }"
  >
    <div v-if="isMdOrLarger">
      <LanguageButton @changeLanguage="changeLanguage" />
    </div>
  </div>
</template>

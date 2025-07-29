<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div
    class="flex flex-col xl:mx-50 md:pb-20 mx-5 md:mx-20 text-justify pt-10 gap-4"
  >
    <h1
      class="text-4xl md:text-4xl text-center font-(family-name:--font-title) tracking-wider"
    >
      {{ t('Education.title') }}
    </h1>
    <div
      class="flex flex-col gap-4 w-full md:flex-row md:justify-center items-stretch pt-10"
    >
      <div
        class="bg-[var(--color2)] rounded-lg text-white shadow-lg p-4 w-full md:w-1/2 font-semibold flex flex-col text-justify"
      >
        <h2 class="xl:text-2xl text-center font-bold">
          {{ t('Education.first.workingAs') }}
        </h2>
        <div
          class="flex justify-between text-xs xl:text-lg text-[var(--color5)]/80"
        >
          <span>{{ t('Education.first.location') }}</span>
          <span>{{ t('Education.first.duration') }}</span>
        </div>
        <p class="font-normal xl:text-xl 2xl:text-2xl">
          {{ t('Education.first.description') }}
        </p>
      </div>
      <div
        class="bg-[var(--color2)] rounded-lg text-white shadow-lg p-4 w-full md:w-1/2 font-semibold flex flex-col text-justify"
      >
        <h2 class="xl:text-2xl text-center font-bold">
          {{ t('Education.second.workingAs') }}
        </h2>
        <div
          class="flex justify-between text-xs xl:text-lg text-[var(--color5)]/80"
        >
          <span>{{ t('Education.second.location') }}</span>
          <span>{{ t('Education.second.duration') }}</span>
        </div>
        <p class="font-normal xl:text-xl 2xl:text-2xl">
          {{ t('Education.second.description') }}
        </p>
      </div>
    </div>
    <div
      class="bg-[var(--color2)] rounded-lg text-white shadow-lg p-4 w-full font-semibold flex flex-col text-justify"
    >
      <h2 class="xl:text-2xl text-center font-bold">
        {{ t('Education.third.workingAs') }}
      </h2>
      <div
        class="flex justify-between text-xs xl:text-lg text-[var(--color5)]/80"
      >
        <span>{{ t('Education.third.location') }}</span>
        <span>{{ t('Education.third.duration') }}</span>
      </div>
      <p class="font-normal xl:text-xl 2xl:text-2xl">
        {{ t('Education.third.description') }}
      </p>
    </div>
  </div>
</template>

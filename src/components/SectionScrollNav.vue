<template>
  <nav
    class="scroll-nav"
    :class="{ 'is-visible': isVisible }"
    :aria-label="locale === 'it' ? 'Navigazione rapida delle sezioni' : 'Section quick navigation'"
  >
    <a href="#top" class="logo-pill" :aria-label="locale === 'it' ? 'Torna in cima' : 'Back to top'">
      <span class="logo-pill__wordmark">C</span>
    </a>

    <a
      v-for="section in sections"
      :key="section.id"
      :href="`#${section.id}`"
      class="nav-pill"
    >
      {{ section.label }}
    </a>
  </nav>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import type { Locale } from '../data/types';
import { getHomepageScrollSections } from '../lib/site';

const { locale } = defineProps<{
  locale: Locale;
}>();

const sections = computed(() => getHomepageScrollSections(locale));
const isVisible = ref(false);
let onScroll: (() => void) | undefined;
let onResize: (() => void) | undefined;

onMounted(() => {
  const hero = document.querySelector('[data-home-hero]');

  if (!hero) {
    return;
  }

  const updateVisibility = () => {
    const heroBottom = hero.getBoundingClientRect().bottom;
    isVisible.value = heroBottom <= 160;
  };

  onScroll = () => updateVisibility();
  onResize = () => updateVisibility();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);

  updateVisibility();
});

onBeforeUnmount(() => {
  if (onScroll) {
    window.removeEventListener('scroll', onScroll);
  }

  if (onResize) {
    window.removeEventListener('resize', onResize);
  }
});
</script>

<style scoped>
  .scroll-nav {
    position: fixed;
    top: 18px;
    left: 50%;
    transform: translateX(-50%) translateY(-12px);
    z-index: 60;
    display: flex;
    align-items: center;
    gap: 0.45rem;
    width: min(1120px, calc(100% - 16px));
    opacity: 0;
    pointer-events: none;
    transition:
      opacity 220ms ease,
      transform 220ms ease;
  }

  .scroll-nav.is-visible {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) translateY(0);
  }

  .logo-pill,
  .nav-pill {
    text-decoration: none;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.68);
    background: rgba(255, 253, 249, 0.88);
    backdrop-filter: blur(14px);
    box-shadow: 0 18px 30px rgba(20, 32, 51, 0.12);
  }

  .logo-pill {
    width: 2.45rem;
    height: 2.45rem;
    display: grid;
    place-items: center;
    color: #fff;
    background: linear-gradient(135deg, #7e2434, #375f8a);
  }

  .logo-pill__wordmark {
    font-family: "Cormorant Garamond", serif;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1;
  }

  .nav-pill {
    display: inline-flex;
    align-items: center;
    padding: 0.6rem 0.98rem;
    color: #495368;
    font-size: 0.92rem;
    font-weight: 700;
    white-space: nowrap;
    transition:
      transform 160ms ease,
      color 160ms ease,
      background-color 160ms ease;
  }

  .nav-pill:hover {
    transform: translateY(-1px);
    color: #7e2434;
    background: rgba(255, 255, 255, 0.94);
  }

  @media (max-width: 980px) {
    .scroll-nav {
      left: 0.5rem;
      width: calc(100% - 1rem);
      transform: translateX(0) translateY(-12px);
      overflow-x: auto;
      padding-bottom: 0.25rem;
      scrollbar-width: none;
    }

    .scroll-nav::-webkit-scrollbar {
      display: none;
    }

    .scroll-nav.is-visible {
      transform: translateX(0) translateY(0);
    }
  }

  @media (max-width: 720px) {
    .nav-pill {
      padding: 0.56rem 0.88rem;
      font-size: 0.87rem;
    }
  }
</style>

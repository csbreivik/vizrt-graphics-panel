<template>
  <div class="app" :style="cssVars">
    <header class="topbar">
      <div class="brand">
        <div class="dot" />
        <div>
          <div class="title">Viz-like Graphics Panel</div>
          <div class="sub">Vue 3 • Pinia • Templates • Live Output</div>
        </div>
      </div>
      <nav class="nav">
        <RouterLink to="/control">Control</RouterLink>
        <RouterLink to="/output">Output</RouterLink>
      </nav>
    </header>

    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useGraphicsStore } from "../app/store/graphics";

const store = useGraphicsStore();
const cssVars = computed(() => ({
  "--bg": store.theme.bg,
  "--fg": store.theme.fg,
  "--accent": store.theme.accent,
  "--font": store.theme.fontFamily,
}));
</script>

<style scoped>
.app {
  min-height: 100vh;
  background: var(--bg);
  color: var(--fg);
  font-family: var(--font);
}
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  border-bottom: 1px solid color-mix(in oklab, var(--fg), transparent 85%);
}
.brand {
  display: flex;
  gap: 12px;
  align-items: center;
}
.dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: var(--accent);
  box-shadow: 0 0 0 4px color-mix(in oklab, var(--accent), transparent 80%);
}
.title {
  font-weight: 700;
}
.sub {
  font-size: 12px;
  opacity: 0.75;
}
.nav {
  display: flex;
  gap: 12px;
}
.nav a {
  color: inherit;
  text-decoration: none;
  opacity: 0.8;
  padding: 6px 10px;
  border-radius: 10px;
}
.nav a.router-link-active {
  opacity: 1;
  background: color-mix(in oklab, var(--fg), transparent 92%);
}
.main {
  padding: 18px;
}
</style>

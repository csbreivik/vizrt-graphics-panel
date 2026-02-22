<template>
  <div class="frame">
    <div class="bar">
      <div class="pill">{{ title }}</div>
      <div class="right"><slot name="right" /></div>
    </div>
    <div class="surface">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<style scoped>
.frame {
  border: 1px solid color-mix(in oklab, var(--fg), transparent 88%);
  border-radius: 16px;
  overflow: hidden;
  background: color-mix(in oklab, var(--bg), white 4%);
}
.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  border-bottom: 1px solid color-mix(in oklab, var(--fg), transparent 90%);
}
.pill {
  font-size: 12px;
  opacity: 0.8;
}
.surface {
  padding: 12px;
}
</style>

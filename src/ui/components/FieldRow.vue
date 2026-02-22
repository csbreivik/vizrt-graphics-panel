<template>
  <label class="row">
    <div class="label">
      <div class="name">{{ label }}</div>
      <div v-if="hint" class="hint">{{ hint }}</div>
    </div>
    <div class="control">
      <slot />
    </div>
  </label>
</template>

<script setup lang="ts">
defineProps<{ label: string; hint?: string }>();
</script>

<style scoped>
.row {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 12px;
  align-items: start;
  padding: 10px 0;
  border-bottom: 1px solid color-mix(in oklab, var(--fg), transparent 92%);
}
.name {
  font-weight: 600;
}
.hint {
  font-size: 12px;
  opacity: 0.7;
  margin-top: 2px;
}
</style>

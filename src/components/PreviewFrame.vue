<template>
  <div class="frame">
    <div class="bar">
      <div class="title">{{ title }}</div>
      <div class="right">
        <slot name="right" />
      </div>
    </div>

    <div class="surface">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style scoped>
.frame {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
}

.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.title {
  font-size: 12px;
  opacity: 0.8;
  font-weight: 600;
}

.surface {
  padding: 12px;
}
</style>

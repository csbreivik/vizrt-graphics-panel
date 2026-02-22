<template>
  <div class="stage">
    <Transition name="lt">
      <div
        v-if="s.lowerThird.isOnAir"
        class="lowerThird"
        :class="{ breaking: s.lowerThird.breaking }"
      >
        <div class="accent" />
        <div class="text">
          <div class="name">{{ s.lowerThird.name || "—" }}</div>
          <div class="meta">
            <span class="title">{{ s.lowerThird.title || "—" }}</span>
            <span v-if="s.lowerThird.handle" class="handle">{{
              s.lowerThird.handle
            }}</span>
          </div>
        </div>
        <div v-if="s.lowerThird.breaking" class="badge">BREAKING</div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useGraphicsStore } from "../../app/store/graphics";
const store = useGraphicsStore();
const s = store.state;
</script>

<style scoped>
.stage {
  position: relative;
  height: 220px;
  border-radius: 14px;
  background:
    radial-gradient(
      1200px 400px at 40% 20%,
      color-mix(in oklab, var(--accent), transparent 85%),
      transparent
    ),
    color-mix(in oklab, var(--bg), black 18%);
  overflow: hidden;
}
.lowerThird {
  position: absolute;
  left: 14px;
  bottom: 14px;
  display: grid;
  grid-template-columns: 10px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid color-mix(in oklab, var(--fg), transparent 85%);
  background: color-mix(in oklab, var(--bg), white 8%);
  backdrop-filter: blur(10px);
  min-width: min(560px, calc(100% - 28px));
}
.lowerThird.breaking {
  border-color: color-mix(in oklab, var(--accent), transparent 30%);
}
.accent {
  width: 10px;
  height: 44px;
  border-radius: 999px;
  background: var(--accent);
}
.name {
  font-size: 18px;
  font-weight: 800;
  line-height: 1.1;
}
.meta {
  font-size: 12px;
  opacity: 0.85;
  display: flex;
  gap: 10px;
  margin-top: 3px;
}
.handle {
  opacity: 0.9;
}
.badge {
  font-size: 12px;
  font-weight: 900;
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--accent);
  color: white;
}

/* Transition */
.lt-enter-active,
.lt-leave-active {
  transition:
    transform 260ms ease,
    opacity 260ms ease;
}
.lt-enter-from,
.lt-leave-to {
  transform: translateY(18px);
  opacity: 0;
}
</style>

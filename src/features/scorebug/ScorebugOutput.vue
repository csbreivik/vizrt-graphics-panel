<template>
  <div class="hud">
    <div class="team">
      <div class="code">{{ s.scorebug.home }}</div>
      <div class="score">{{ s.scorebug.homeScore }}</div>
    </div>

    <div class="mid">
      <div class="clock">{{ clock }}</div>
      <div class="tag" :class="{ live: s.scorebug.isRunning }">
        {{ s.scorebug.isRunning ? "LIVE" : "PAUSED" }}
      </div>
    </div>

    <div class="team">
      <div class="code">{{ s.scorebug.away }}</div>
      <div class="score">{{ s.scorebug.awayScore }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useGraphicsStore } from "../../app/store/graphics";

const store = useGraphicsStore();
const s = store.state;

function fmt(seconds: number) {
  const mm = Math.floor(seconds / 60);
  const ss = seconds % 60;
  return `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
}

const clock = computed(() => fmt(s.scorebug.seconds));
</script>

<style scoped>
.hud {
  display: inline-grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
  align-items: center;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid color-mix(in oklab, var(--fg), transparent 85%);
  background: color-mix(in oklab, var(--bg), white 8%);
  backdrop-filter: blur(10px);
}
.team {
  display: flex;
  gap: 10px;
  align-items: center;
}
.code {
  font-weight: 900;
  letter-spacing: 0.8px;
}
.score {
  font-weight: 900;
  font-size: 18px;
  min-width: 22px;
  text-align: right;
}
.mid {
  display: grid;
  justify-items: center;
}
.clock {
  font-weight: 900;
  font-size: 14px;
}
.tag {
  margin-top: 3px;
  font-size: 10px;
  font-weight: 900;
  padding: 3px 8px;
  border-radius: 999px;
  border: 1px solid color-mix(in oklab, var(--fg), transparent 80%);
  opacity: 0.85;
}
.tag.live {
  border-color: color-mix(in oklab, var(--accent), transparent 20%);
  color: white;
  background: var(--accent);
  opacity: 1;
}
</style>

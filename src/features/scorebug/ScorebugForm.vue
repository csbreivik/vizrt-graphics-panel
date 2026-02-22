<template>
  <section class="card">
    <h2>scorebug</h2>

    <div class="grid2">
      <FieldRow label="Home">
        <input v-model="s.scorebug.home" type="text" />
      </FieldRow>
      <FieldRow label="Away">
        <input v-model="s.scorebug.away" type="text" />
      </FieldRow>
    </div>

    <div class="grid2">
      <FieldRow label="Home score">
        <input v-model.number="s.scorebug.homeScore" type="number" min="0" />
      </FieldRow>
      <FieldRow label="Away score">
        <input v-model.number="s.scorebug.awayScore" type="number" min="0" />
      </FieldRow>
    </div>

    <div class="actions">
      <button class="btn" @click="store.toggleClock()">
        {{ s.scorebug.isRunning ? "PAUSE" : "START" }}
      </button>
      <button class="btn ghost" @click="store.resetClock()">RESET</button>

      <button class="btn ghost" @click="s.scorebug.homeScore++">HOME +1</button>
      <button class="btn ghost" @click="s.scorebug.awayScore++">AWAY +1</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGraphicsStore } from "../../app/store/graphics";
import FieldRow from "../../ui/components/FieldRow.vue";

const store = useGraphicsStore();
const s = store.state;
</script>

<style scoped>
.card {
  border: 1px solid color-mix(in oklab, var(--fg), transparent 88%);
  border-radius: 16px;
  padding: 14px;
  background: color-mix(in oklab, var(--bg), white 4%);
}
h2 {
  margin: 0 0 10px;
  font-size: 16px;
}
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 12px;
}
.btn {
  border: 1px solid color-mix(in oklab, var(--accent), transparent 20%);
  background: var(--accent);
  color: white;
  padding: 10px 12px;
  border-radius: 12px;
  font-weight: 800;
  cursor: pointer;
}
.btn.ghost {
  background: transparent;
  color: var(--fg);
  border-color: color-mix(in oklab, var(--fg), transparent 80%);
}
input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid color-mix(in oklab, var(--fg), transparent 82%);
  background: transparent;
  color: inherit;
}
</style>

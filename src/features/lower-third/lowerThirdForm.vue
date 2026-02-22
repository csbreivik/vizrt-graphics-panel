<template>
  <section class="card">
    <h2>Lower Third</h2>

    <FieldRow label="Name">
      <input v-model="s.lowerThird.name" type="text" placeholder="Name" />
    </FieldRow>

    <FieldRow label="Title">
      <input v-model="s.lowerThird.title" type="text" placeholder="Title" />
    </FieldRow>

    <FieldRow label="Handle" hint="Optional">
      <input v-model="s.lowerThird.handle" type="text" placeholder="@handle" />
    </FieldRow>

    <FieldRow label="Breaking">
      <input v-model="s.lowerThird.breaking" type="checkbox" />
    </FieldRow>

    <div class="actions">
      <button class="btn" @click="store.takeLowerThirdIn()">TAKE IN</button>
      <button class="btn ghost" @click="store.takeLowerThirdOut()">
        TAKE OUT
      </button>
      <span class="status" :class="{ on: s.lowerThird.isOnAir }">
        {{ s.lowerThird.isOnAir ? "ON AIR" : "OFF" }}
      </span>
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
.actions {
  display: flex;
  gap: 10px;
  align-items: center;
  padding-top: 12px;
}
.btn {
  border: 1px solid color-mix(in oklab, var(--accent), transparent 20%);
  background: var(--accent);
  color: white;
  padding: 10px 12px;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
}
.btn.ghost {
  background: transparent;
  color: var(--fg);
  border-color: color-mix(in oklab, var(--fg), transparent 80%);
}
.status {
  font-size: 12px;
  opacity: 0.8;
  margin-left: auto;
}
.status.on {
  opacity: 1;
  font-weight: 800;
}
input[type="text"] {
  width: 100%;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid color-mix(in oklab, var(--fg), transparent 82%);
  background: transparent;
  color: inherit;
}
</style>

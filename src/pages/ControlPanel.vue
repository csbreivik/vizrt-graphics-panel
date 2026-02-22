<template>
  <AppShell>
    <div class="layout">
      <div class="left">
        <section class="card">
          <h2>System</h2>

          <FieldRow label="Theme">
            <select :value="store.state.themeId" @change="onThemeChange">
              <option v-for="t in themes" :key="t.id" :value="t.id">
                {{ t.name }}
              </option>
            </select>
          </FieldRow>

          <div class="links">
            <a :href="outputUrl" target="_blank" rel="noreferrer"
              >Open Output in new tab</a
            >
          </div>
        </section>

        <LowerThirdForm />
        <ScorebugForm />
      </div>

      <div class="right">
        <PreviewFrame title="Preview (Output composite)">
          <div class="composite">
            <ScorebugOutput class="scorepos" />
            <LowerThirdOutput class="ltpos" />
          </div>
        </PreviewFrame>
      </div>
    </div>
  </AppShell>
</template>

<script setup lang="ts">
import AppShell from "../ui/components/AppShell.vue";
import PreviewFrame from "../ui/components/PreviewFrame.vue";
import FieldRow from "../ui/components/FieldRow.vue";

import LowerThirdForm from "../features/lower-third/LowerThirdForm.vue";
import LowerThirdOutput from "../features/lower-third/LowerThirdOutput.vue";

import ScorebugForm from "../features/scorebug/ScorebugForm.vue";
import ScorebugOutput from "../features/scorebug/ScorebugOutput.vue";

import { THEMES } from "../ui/tokens/theme";
import { useGraphicsStore } from "../app/store/graphics";
import { useGameClock } from "../features/scorebug/useGameClock";

useGameClock();

const store = useGraphicsStore();
const themes = THEMES;

const outputUrl = `${import.meta.env.BASE_URL}#/output`;

function onThemeChange(e: Event) {
  const id = (e.target as HTMLSelectElement).value;
  store.setTheme(id);
}
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 520px 1fr;
  gap: 18px;
}

.card {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 14px;
  background: rgba(255, 255, 255, 0.03);
  margin-bottom: 14px;
}

h2 {
  margin: 0 0 10px;
  font-size: 16px;
}

select {
  width: 100%;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: transparent;
  color: inherit;
}

.links {
  padding-top: 10px;
}

.links a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 700;
}

.composite {
  position: relative;
  height: 360px;
  border-radius: 14px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.25);
}

.scorepos {
  position: absolute;
  top: 14px;
  left: 14px;
}

.ltpos {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

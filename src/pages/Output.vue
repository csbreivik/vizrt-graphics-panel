<template>
  <AppShell>
    <div class="wrap">
      <PreviewFrame title="PROGRAM (Output)">
        <div class="program">
          <div class="score">
            <ScorebugOutput />
          </div>
          <LowerThirdOutput />
        </div>
      </PreviewFrame>
    </div>
  </AppShell>
</template>

<script setup lang="ts">
import AppShell from "../ui/components/AppShell.vue";
import PreviewFrame from "../ui/components/PreviewFrame.vue";
import ScorebugOutput from "../features/scorebug/ScorebugOutput.vue";
import LowerThirdOutput from "../features/lower-third/LowerThirdOutput.vue";
import { useGameClock } from "../features/scorebug/useGameClock";

useGameClock();
</script>

<style scoped>
.wrap {
  max-width: 1100px;
  margin: 0 auto;
}
.program {
  position: relative;
  height: 520px;
  border-radius: 14px;
  overflow: hidden;
  background:
    radial-gradient(
      1200px 600px at 35% 20%,
      color-mix(in oklab, var(--accent), transparent 86%),
      transparent
    ),
    color-mix(in oklab, var(--bg), black 18%);
}
.score {
  position: absolute;
  top: 14px;
  left: 14px;
}
</style>

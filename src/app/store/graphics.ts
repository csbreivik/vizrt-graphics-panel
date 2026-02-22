import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { GraphicsState, GraphicsStateSchema } from "../types/graphics";
import { THEMES } from "../../ui/tokens/theme";

const STORAGE_KEY = "vizrt-graphics-panel:state";

function loadState(): GraphicsState {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return GraphicsStateSchema.parse({
      version: 1,
      themeId: "classic-dark",
      lowerThird: {
        name: "Einar Veksdal",
        title: "Ingeniør",
        handle: "@mjorshamn",
        breaking: false,
        isOnAir: false,
      },
      scorebug: {
        home: "MJORS",
        away: "FIR",
        homeScore: 0,
        awayScore: 0,
        isRunning: false,
        seconds: 0,
      },
    });
  }

  try {
    const parsed = JSON.parse(raw);

    // 🔧 Migration: support old key "scorebug" -> new "scorebug"
    if (parsed?.scorebug && !parsed?.scorebug) {
      parsed.scorebug = parsed.scorebug;
      delete parsed.scorebug;
    }

    return GraphicsStateSchema.parse(parsed);
  } catch {
    // fallback if storage got corrupted
    return GraphicsStateSchema.parse({
      version: 1,
      themeId: "classic-dark",
      lowerThird: {
        name: "",
        title: "",
        handle: "",
        breaking: false,
        isOnAir: false,
      },
      scorebug: {
        home: "HOME",
        away: "AWAY",
        homeScore: 0,
        awayScore: 0,
        isRunning: false,
        seconds: 0,
      },
    });
  }
}

export const useGraphicsStore = defineStore("graphics", () => {
  const state = ref<GraphicsState>(loadState());

  const theme = computed(
    () => THEMES.find((t) => t.id === state.value.themeId) ?? THEMES[0],
  );

  function setTheme(id: string) {
    state.value.themeId = id;
  }

  // lower third actions
  function takeLowerThirdIn() {
    state.value.lowerThird.isOnAir = true;
  }
  function takeLowerThirdOut() {
    state.value.lowerThird.isOnAir = false;
  }

  // scorebug actions
  function toggleClock() {
    state.value.scorebug.isRunning = !state.value.scorebug.isRunning;
  }
  function resetClock() {
    state.value.scorebug.seconds = 0;
    state.value.scorebug.isRunning = false;
  }
  function tickClock() {
    state.value.scorebug.seconds = Math.max(
      0,
      state.value.scorebug.seconds + 1,
    );
  }

  // persist automatically
  watch(state, (v) => localStorage.setItem(STORAGE_KEY, JSON.stringify(v)), {
    deep: true,
  });

  return {
    state,
    theme,
    setTheme,
    takeLowerThirdIn,
    takeLowerThirdOut,
    toggleClock,
    resetClock,
    tickClock,
  };
});

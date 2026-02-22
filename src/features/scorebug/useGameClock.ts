import { onBeforeMount, onMounted } from "vue";
import { useGraphicsStore } from "../../app/store/graphics";

export function useGameClock() {
  const store = useGraphicsStore();
  let timer: number | null = null;

  function start() {
    if (timer) return;
    timer = window.setInterval(() => {
      if (store.state.scorebug.isRunning) store.tickClock();
    }, 1000);
  }

  function stop() {
    if (!timer) return;
    window.clearInterval(timer);
    timer = null;
  }

  onMounted(start);
  onBeforeMount(stop);

  return { start, stop };
}

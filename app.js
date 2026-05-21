const BASE = "https://stream.uzivobeograd.rs/live/";
const CAMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21];
const seq = {};

function refreshCam(n) {
  const id = (seq[n] = (seq[n] || 0) + 1);
  const loader = new Image();
  loader.onload = () => {
    if (id !== seq[n]) return;
    document.getElementById(`cam-${n}`).src = loader.src;
  };
  loader.src = `${BASE}cam_${n}.jpg?${Date.now()}`;
}

function refreshAll() {
  for (const n of CAMS) refreshCam(n);
}

refreshAll();
setInterval(refreshAll, 500);

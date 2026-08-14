document.getElementById('date').min = new Date().toISOString().split('T')[0];
const btn = document.querySelector("#btn-N");

document.addEventListener("mousemove", (e) => {
  const rect = btn.getBoundingClientRect();
  const distanceX = Math.abs(e.clientX - (rect.left + rect.width / 2));
  const distanceY = Math.abs(e.clientY - (rect.top + rect.height / 2));

  // If mouse gets too close (within 100px), move button randomly
  if (distanceX < 100 && distanceY < 100) {
    btn.style.top = Math.random() * (window.innerHeight - 50) + "px";
    btn.style.left = Math.random() * (window.innerWidth - 100) + "px";
  }
});
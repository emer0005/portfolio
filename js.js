const line = document.querySelector(".scroll-line");
const container = document.querySelector(".project_section");

window.addEventListener("scroll", () => {
  const containerTop = container.offsetTop;
  const containerHeight = container.offsetHeight;
  const scrollTop = window.scrollY + window.innerHeight / 2;

  let newHeight = scrollTop - containerTop;
  if (newHeight < 0) newHeight = 0;
  if (newHeight > containerHeight) newHeight = containerHeight;

  line.style.height = newHeight + "px";
});

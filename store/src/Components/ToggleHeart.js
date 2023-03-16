export default function ToggleHeart(e) {
  if (e.target.classList.contains("fa-regular")) {
    e.target.classList.remove("fa-regular");
    e.target.classList.add("fa-solid");
  } else {
    e.target.classList.remove("fa-solid");
    e.target.classList.add("fa-regular");
  }
}

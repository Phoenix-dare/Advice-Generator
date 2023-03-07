const titleElement = document.getElementById("title");
const adviceElement = document.getElementById("advice");
const button = document.getElementById("random");

const adviceData = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const { slip } = await response.json();
  button.classList.add("roll");

  titleElement.textContent = `ADVICE #${slip.id}`;
  adviceElement.textContent = `"${slip.advice}"`;

};
/*setTimeout(() => {
    button.classList.remove("roll");
  }, 1000); */

window.addEventListener("load", adviceData);
button.addEventListener("click", adviceData);
button.addEventListener("animationend", () => {
    button.classList.remove("roll");
  });

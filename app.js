const inputField = document.querySelector(".input");
const outputField = document.querySelector(".output");
const btn = document.querySelector(".btn");

const api = "https://api.funtranslations.com/translate/klingon.json";

function createRequest(translateText) {
  return `${api}?text=${translateText}`;
}

function translateText() {
  let request = createRequest(inputField.value);

  fetch(request)
    .then((res) => res.json())
    .then((data) => {
      outputField.innerText = data.contents.translated;
    })
    .catch((err) => {
      outputField.innerText = "An error has occured. Please try again later.";
      console.log("An error occured:" + err);
    });
}

btn.addEventListener("click", translateText);

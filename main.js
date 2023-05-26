
let menu = document.querySelector('.menu');
let navigation = document.querySelector('.navigation');

menu.onclick = function () {
  navigation.classList.toggle('active');
};

let list = document.querySelectorAll('.list');

function activeLink() {
  list.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}

list.forEach((item) => item.addEventListener('click', activeLink));

const btnNightMode = document.getElementById("btn-night-mode");
const htmlEl = document.querySelector("html");

btnNightMode.addEventListener("click", () => {
  if (htmlEl.getAttribute("data-theme") === "light") {
    htmlEl.setAttribute("data-theme", "dark");
  } else {
    htmlEl.setAttribute("data-theme", "light");
  }
});

let messages = [
  "¡Felicidades, has ganado un premio!",
  "Inténtalo de nuevo",
  "La suerte no está de tu lado esta vez",
  "Sigue intentándolo",
  "Casi lo logras",
  "¡Has ganado un Chupa-Chups!",
  "No te rindas",
  "No ha sido esta vez, sigue intentándolo",
  "Vuelve a intentarlo",
  "Nada de nada, inténtalo de nuevo",
  "¡Buen intento!",
  "la vida es hermosa, inténtalo mañana",
  "¡Lo conseguiste!",
  "No desesperes, sigue intentándolo",
  "La suerte te sonríe, ¡sigue así!",
  "¡Borra el codigo de tu proyecto!",
  "Sigue intentándolo, la suerte puede cambiar en cualquier momento",
  "No te rindas, ¡inténtalo de nuevo!"
];

let usedNames = [];
let names = [
  "Ikram", "Irina", "Maribel", "Lola", "Javi", "Gabriela", "Pamela", "Manuel", "Minerva",
  "Nelly", "Jezabel", "Cyntia", "Jhoana", "Irina S.", "Tati", "Nadia", "Halima", "Telma"
];

let nameSounds = {
  "Ikram": "sonidos/Ikram.mp3",
  "Irina": "sonidos/Irina.mp3",
  "Maribel": "sonidos/Maribel.mp3",
  "Lola": "sonidos/Lola.mp4",
  "Javi": "sonidos/Javi.mp4",
  "Gabriela": "sonidos/Gabriela.mp3",
  "Pamela": "sonidos/Pamela.mp4",
  "Manuel": "sonidos/Manuel.mp3",
  "Minerva": "sonidos/Minerva.mp4",
  "Nelly": "sonidos/Nelly.mp4",
  "Jezabel": "sonidos/Jezabel.mp3",
  "Cyntia": "sonidos/Cyntia.mp3",
  "Jhoana": "sonidos/Jhoana.mp3",
  "Irina S.": "sonidos/Irina S.mp3",
  "Tati": "sonidos/Tati.mp4",
  "Nadia": "sonidos/Nadia.mp4",
  "Halima": "sonidos/Halima.mp3",
  "Telma": "sonidos/Telma.mp4"
};

function spin() {
  document.getElementById("btn-choose").disabled = true;

  let degrees = 0;
  let image = document.getElementById('image');
  let sound = document.getElementById('sound');

  let random = Math.floor(Math.random() * 6) + 5;

  sound.currentTime = 0;
  sound.play();
  image.style.transform = `rotate(${360 * random + degrees}deg)`;

  let timeout = setTimeout(function () {
    let result = document.getElementById("result");
    let nameSound = document.getElementById("name-sound");

    if (usedNames.length === names.length) {
      usedNames = [];
    }

    let randomIndex = Math.floor(Math.random() * names.length);
    while (usedNames.includes(randomIndex)) {
      randomIndex = Math.floor(Math.random() * names.length);
    }
    usedNames.push(randomIndex);
    let randomName = names[randomIndex];

    nameSound.src = nameSounds[randomName];
    nameSound.play();
    nameSound.onended = function () {
      result.textContent = randomName;

      let message = messages[Math.floor(Math.random() * messages.length)];
      let customAlert = document.getElementById('custom-alert');
      customAlert.textContent = message;
      customAlert.style.display = 'block';
      setTimeout(function () {
        customAlert.style.display = 'none';
        document.getElementById("btn-choose").disabled = false;
      }, 3000);
    };
  }, random * 800);

  setTimeout(function () {
    clearTimeout(timeout);
    degrees += 360 * random;
    image.style.transform = `rotate(${degrees}deg)`;
  }, 8000);
}

document.getElementById("btn-choose").addEventListener("click", function () {
  spin();
});

generateRandomName();

function generateRandomName() {
  let result = document.getElementById("result");
  let nameSound = document.getElementById("name-sound");

  if (usedNames.length === names.length) {
    usedNames = [];
  }

  let randomIndex = Math.floor(Math.random() * names.length);
  while (usedNames.includes(randomIndex)) {
    randomIndex = Math.floor(Math.random() * names.length);
  }
  usedNames.push(randomIndex);
  let randomName = names[randomIndex];

  nameSound.src = nameSounds[randomName];
  nameSound.play();
  nameSound.onended = function () {
    result.textContent = randomName;
  };
}









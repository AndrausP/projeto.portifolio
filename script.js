const texto = "Hello World !";
const velocidade = 100; // velocidade da digitação
const efeito = document.getElementById("escrita");

function typeWriter() {
  let posicao = 0;
  efeito.innerHTML = ""; // limpa a escrita

  function digitar() {
    if (posicao < texto.length) {
      efeito.innerHTML += texto.charAt(posicao);
      posicao++;
      setTimeout(digitar, velocidade);
    } else {
      setTimeout(typeWriter, 4000);
    }
  }

  digitar();
}

typeWriter();


console.log("me contrata pfv");


//no bloco a seguir nao foi eu que fiz, entendo algumas coisas mas outras nao fiz apenas para ficar bonito
const links = document.querySelectorAll('nav ul li a');//isso eu sei, é para selecionar os links nesses comandos
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {

      const targetPosition = targetElement.offsetTop;
      const currentPosition = window.pageYOffset;
      const distance = targetPosition - currentPosition;
      const scrollSpeed = 1000; //esse eu tambem sei que é para modificar a velocidade que desce
      const duration = Math.abs(distance / scrollSpeed) * 1000;
      scrollToSmoothly(targetPosition, duration);
    }
  });
});
function scrollToSmoothly(targetPosition, duration) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;
  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  //a questão de function eu entendo mas devo aprender mais, if e esle tambem, e alguns conceitos de arrays e objetos eu sei 
  requestAnimationFrame(animation);
}


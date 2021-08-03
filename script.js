let slider = document.getElementById("slider");
let slide = document.getElementsByClassName("slide");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

async function getImage() {
  const res = await fetch("https://api.unsplash.com/collections/2091539/photos?client_id=E_cIFrYdSJuWKsjJN_DScQba0QWpw1nxddHh_HOWZeY");
  const data = await res.json();

  data.map(function (data) { //  Применяем функцию к каждому элементы массива
    let template = `<div class="slide" style="background-image: url('${data.urls.regular}')";></div>`;
    slider.insertAdjacentHTML('afterbegin', template);
  }); // Вставляем код в slider

  slide[0].classList.add("active"); // Отображаем первый слайд сразу при загрузке страницы
}

getImage();

let i = 0;

prevBtn.addEventListener('click', () => {
  slide[i].classList.remove("active");
  i--;

  if (i < 0) {
    i = slide.length - 1; // При нажатии на стрелку влево на 1 слайде показываем посл.слайд
  }

  slide[i].classList.add("active");
});


nextBtn.addEventListener('click', () => {
  slide[i].classList.remove("active");
  i++;

  if (i >= slide.length) {
    i = 0; // При нажатии на стрелку вправо на послед. слайде показываем 1 слайд
  }

  slide[i].classList.add("active");
});
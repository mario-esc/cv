/* Inicio inicialización de variables basadas en IDs */
const generatorButton = document.getElementById('generator-button');
const profilePhoto = document.getElementById('profile-photo');
const lastName = document.getElementById('last-name');
const firstName = document.getElementById('first-name');
const userProfesion = document.getElementById('profesion');
const linkedinUser = document.getElementById('linkedin-user');
const behanceUser = document.getElementById('behance-user');
const phoneUser = document.getElementById('phone-user');
const mailUser = document.getElementById('mail-user');
const userProfession = document.getElementById('profession');
/* Fin inicialización de variables basadas en IDs */

/* Función para conseguir el género del usuario desde la appi, y asignarle la profesión */
function userProfessionBasedOnGender(gender) {
  if (gender == 'female') {
    return 'Diseñadora UX/UI';
  } else {
    return 'Diseñador UX/UI';
  }
}
/* Fin función género del usuario */

/* Inicio inicialización de variables basadas en IDs */
const userGenerator = async function () {
  /* Consiguiendo datos de la api  */
  const urlApi =
    'https://randomuser.me/api/?inc=gender,name,cell,email,login,picture';
  const user = await fetch(urlApi);
  const { results } = await user.json();
  const userData = results[0];

  /* Completando info en el html  */
  profilePhoto.src = userData.picture.large;
  lastName.textContent = userData.name.last;
  firstName.textContent = userData.name.first;
  userProfession.textContent = userProfessionBasedOnGender(userData.gender);

  linkedinUser.textContent = userData.login.username.slice(0, 6);
  behanceUser.textContent = userData.login.username.slice(0, 6);
  phoneUser.textContent = userData.cell;
  mailUser.textContent = userData.email.slice(0, 8) + '@gmail.com';

  /* console.log(userData); */
};

generatorButton.addEventListener('click', userGenerator);
document.addEventListener('DOMContentLoaded', userGenerator);

/* Inicio despliegue de menus */
const titleClick = document.querySelectorAll('.title-click');

titleClick.forEach((elementClick) => {
  elementClick.addEventListener('click', () => {
    let menu = elementClick.nextElementSibling;
    menu.classList.toggle('d-vis');

    let arrowClicked = elementClick.childNodes[1].childNodes[0];
    console.log(arrowClicked);
    arrowClicked.classList.toggle('fa-arrow-up');
  });
});
/* Fin despliegue de menus */

//Botón a top
const toTop = document.querySelector('.to-top');

toTop.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
});

/* Fin despliegue de menus */

const name = "Łukasz";
const age = 25;

//alert("Siemka!");
//console.log(`Man na imię ${name} i mam ${age} lat.`);

const header = document.querySelector('.header__title--js');
header.innerHTML="Łukasz Klekner - Moja pierwsza strona"


const greet = function (name, age){
    console.log(`Mam na imię ${name}. W tym roku skończę ${age+1} lat.`);
}

const greet2 = (name, age) => console.log(`Mam na imię ${name}. W tym roku skończę ${age+1} lat.`);

greet(name, age);
greet2(name, age);
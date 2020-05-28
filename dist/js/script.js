'use strict';
window.addEventListener('DOMContentLoaded', function () {
  let skillsCross = document.querySelectorAll('.skills-cross');
  let skillsProgresbar = document.querySelectorAll('.skills__progresbar');
  let skillsItemGrafic = document.querySelectorAll('.skills__item-grafic');

  //анимация навыков раскрытие пунктов
  skillsCross.forEach((elem) => {
    elem.onclick = () => {
      elem.classList.toggle('skills-cross-active');
      if (elem.parentElement == skillsProgresbar[0]) {
        skillsItemGrafic[0].classList.toggle('skills__item-grafic_active');
        skillsItemGrafic[0].childNodes.forEach((elem, i) => {
          if (i % 2 != 0) {
            elem.classList.toggle('col_active');
          }
        })
      }
      if (elem.parentElement == skillsProgresbar[1]) {
        skillsItemGrafic[1].classList.toggle('skills__item-grafic_active');
        skillsItemGrafic[1].childNodes.forEach((elem, i) => {
          if (i % 2 != 0) {
            elem.classList.toggle('col_active');
          }
        })
      }
      if (elem.parentElement == skillsProgresbar[2]) {
        skillsItemGrafic[2].classList.toggle('skills__item-grafic_active');
        skillsItemGrafic[2].childNodes.forEach((elem, i) => {
          if (i % 2 != 0) {
            elem.classList.toggle('col_active');
          }
        })
      }
    }
  });

  // маска для полей ввода телефона 
  function maskPhone(selector, masked = '+7 (___) ___-__-__') {
    const elem = document.querySelector(selector);

    function mask(event) {
      const keyCode = event.keyCode;
      const template = masked,
        def = template.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");

      let i = 0,
        newValue = template.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = newValue.indexOf("_");
      if (i != -1) {
        newValue = newValue.slice(0, i);
      }
      let reg = template.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}";
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = newValue;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }

    }

    elem.addEventListener("input", mask);
    elem.addEventListener("focus", mask);
    elem.addEventListener("blur", mask);
  }
  maskPhone(`#phone-form`);

  // активация верхнего меню
  let modal = document.querySelector(".modal");
  let hero = document.querySelector(".hero");

  hero.addEventListener("click", (event) => {
    let target = event.target;
    if (target.classList.contains("hero__burger") || target.classList.contains("hero__burger-line")) {
      modal.classList.add("active");
      document.querySelector('html').style.overflow = "hidden";
    } else {
      modal.classList.remove("active");
      document.querySelector('html').style.overflow = "";

    }
  })


  // плавная прокрутка до блоков 
  let nav = document.querySelector('.nav');
  const navItems = nav.querySelectorAll("a");
  for (let anchor of navItems) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const blockID = anchor.getAttribute('href');
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
// валидация поля email 

let formMail = document.querySelector("#form-mail");

formMail.addEventListener("change", ()=>{
  validate("contacs-form","form-mail");
})

function validate(form_id,email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = document.forms[form_id].elements[email].value;
  if(reg.test(address) == false) {
    formMail.classList.add("error-mail");
    formMail.previousElementSibling.classList.add("error-subtitle");
     return false;
  }else{
    formMail.classList.remove("error-mail");
    formMail.previousElementSibling.classList.remove("error-subtitle");
  }
}


});


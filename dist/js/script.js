'use strict';
window.addEventListener('DOMContentLoaded', function () {
  let skillsCross = document.querySelectorAll('.skills-cross');
  let skillsProgresbar = document.querySelectorAll('.skills__progresbar');
  let skillsItemGrafic = document.querySelectorAll('.skills__item-grafic');
  
  skillsCross.forEach((elem)=>{
    elem.onclick =()=>{
      elem.classList.toggle('skills-cross-active');
      if (elem.parentElement == skillsProgresbar[0]){
        skillsItemGrafic[0].classList.toggle('skills__item-grafic_active');
        skillsItemGrafic[0].childNodes.forEach((elem, i)=>{
          if (i%2 != 0){
            elem.classList.toggle('col_active');
          }
        })
      }
      if (elem.parentElement == skillsProgresbar[1]){
        skillsItemGrafic[1].classList.toggle('skills__item-grafic_active');
        skillsItemGrafic[1].childNodes.forEach((elem, i)=>{
          if (i%2 != 0){
            elem.classList.toggle('col_active');
          }
        })
      }
      if (elem.parentElement == skillsProgresbar[2]){
        skillsItemGrafic[2].classList.toggle('skills__item-grafic_active');
        skillsItemGrafic[2].childNodes.forEach((elem, i)=>{
          if (i%2 != 0){
            elem.classList.toggle('col_active');
          }
        })
      }
    }
  });

  
});

const study = document.getElementById('study');
const skill = document.getElementById('skill');
const certification = document.getElementById('certification');

const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const sections = document.getElementsByClassName('sections');


function show(display,section){
    display.addEventListener("click",function(){
        for(let i = 0; i < sections.length; i++){
            sections[i].classList.add('off');
            sections[i].classList.add('on');
        }
        section.classList.remove("off");
    });
};


show(study,section1);
show(skill,section2);
show(certification,section3);


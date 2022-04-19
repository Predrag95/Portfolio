const btn = document.querySelector('.btn');
const section1 = document.querySelector('.section-1');
const section2 = document.querySelector('.section-2');
const cartoon2 = document.querySelector('.cartoon-2');
const developer = document.querySelector('.developer');
const blob2 = document.querySelector('.blob2');
const exitBtn = document.getElementById('use-1');
const h1 = document.querySelector('.about-me-h1');
const h1Again = document.querySelector('.about-me-h1');
const aboutMe = document.querySelector('.about-me');
const me = document.querySelector('.me');
const about = document.querySelector('.about');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

let buttonClicked = false

exitBtn.addEventListener('click', clickedExit);
btn.addEventListener('click', clickedBtn);
h1.addEventListener('mouseover', h1Hover);
h1Again.addEventListener('mouseout', h1Out);
hamburger.addEventListener('click', hamburgerMenu);

function clickedBtn() {
  if (buttonClicked) {
    return
  }

  buttonClicked = true;
  developer.style.display = "none"
  blob2.style.display = "none"
  
  document.getElementById('use-1').classList.add('exit-btn');
  
  const h1 = document.createElement('h1');
  h1.textContent = "Get to know me better";
  h1.style.fontFamily = 'Red Hat Display';
  h1.style.color = 'orange';
  h1.style.fontSize = '35px';
  h1.className = 'know-me';
  
  const p = document.createElement('p');
  p.textContent = "I'm 26 years old Front-end Developer that is always learning and discovering new things in life. I enjoy coding, doing sports, cooking, and reading. When I'm not doing any particular work, I love to hang out with my friends and family members.";
  p.style.width = '600px';
  p.style.margin = "0 auto";
  p.style.fontSize = "25px";
  p.style.marginTop = '23px';
  p.style.fontFamily = 'Red Hat Display';
  p.style.fontWeight = '600';
  p.style.color = '#fff';
  p.style.lineHeight = '35px';
  
  cartoon2.appendChild(h1);
  cartoon2.appendChild(p);
  cartoon2.classList.add('description');  
};

function clickedExit() {
  cartoon2.classList.remove('description');
  developer.style.display = "block"
  blob2.style.display = "block"
  exitBtn.remove();
  document.querySelector('.know-me').remove();
  cartoon2.remove('p')
  buttonClicked = false
};

function h1Hover() {
  h1.classList.add('about-me-h1-white');
}

function h1Out() {
  h1.classList.remove('about-me-h1-white');
}

function hamburgerMenu() {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
};

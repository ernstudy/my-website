const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('tiggle-icon');
const header = document.getElementById('header');
const nav   =   document.getElementById('nav');
const menu   =   document.getElementById('menu');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const textBox = document.getElementById('text-box');





// Switch Theme Dynamically
function switchTheme () {

    if (toggleSwitch.checked == true) {
        document.documentElement.setAttribute('data-theme', 'dark');

        // Dark Mode Style
        header.style.backgroundColor = 'rgb(0 0 0 / 50%)';
        textBox.style.backgroundColor = 'rgb(255  255 255 / 50%)';
        toggleIcon.children[0].textContent = "Dark Mode";
        toggleIcon.children[1].classList = 'bx bx-moon';
        nav.style.background = 'rgb(0 0 0 / 50%)';
        img1.src="image/undraw_code_review_re_dark.svg"
        img2.src="image/undraw_feeling_proud_dark.svg"
        img3.src="image/undraw_conceptual_idea_dark.svg"
       
    }else {
        document.documentElement.setAttribute('data-theme', 'light');

        // Dark Mode Style
        header.style.backgroundColor = 'rgb(255  255 255 / 50%)';
        textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
        toggleIcon.children[0].textContent = "Light Mode";
        toggleIcon.children[1].classList = 'bx bx-sun';
        nav.style.background = 'rgb(255  255 255 / 50%)';
        img1.src="image/undraw_code_review_re_light.svg"
        img2.src="image/undraw_feeling_proud_light.svg"
        img3.src="image/undraw_conceptual_idea_light.svg"
    }
    // console.log(toggleSwitch.checked);
}

// Event Listener

toggleSwitch.addEventListener('change', switchTheme);

    // MENU

function activeMenu() {
    header.classList.toggle('active');
    nav.classList.toggle('active-nav');
    menu.classList.toggle('bx-x-circle')
}

menu.addEventListener('click', activeMenu);
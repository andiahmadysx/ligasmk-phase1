const nav = document.querySelector("nav");
const navItems = nav.querySelectorAll('li');
const btnsFilter = document.querySelectorAll('.btn-filter');


// handle nav link active
navItems.forEach((item) => {
    item.addEventListener("click", function () {
        const current = document.querySelectorAll("li.active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    });
    item.addEventListener('mouseover', () => {
        const subMenu = item.querySelector('.sub-menu')
        const svg = item.querySelector('svg')

        if (subMenu) {
            subMenu.style.display = 'flex';
        }

        if (svg) {
            svg.style.rotate = '-90deg';
        }
    });

    item.addEventListener('mouseout', () => {
        const subMenu = item.querySelector('.sub-menu')
        const svg = item.querySelector('svg')
        if (subMenu) {
            subMenu.style.display = 'none';
        }

        if (svg) {
            svg.style.rotate = '0deg';
        }

    });
})


// handle filter class
btnsFilter.forEach((btn, index) => {
    btn.addEventListener('click', function () {
        const current = document.querySelectorAll(".btn-filter.active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";

        const cards = document.querySelectorAll(".learning .card");
        cards.forEach((card) => {

            // hide all element not contains btn filter key
            if (!card.dataset.category.includes(btn.dataset.key)) {
                card.style.display = 'none';
            } else {
                card.style.display = 'block';
            }
        })
    })
})
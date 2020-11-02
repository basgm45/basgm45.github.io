// Portfolio Item
// Query filther Portfolio
const filterContainer = document.querySelector('.portfolio-filter'),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    portfolioItems = document.querySelectorAll('.portfolio-item'),
    totalPortfolioItem = portfolioItems.length

// get a value and set class active and remove class active when select
for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener('click', function() {
        filterContainer.querySelector('.active').classList.remove('active');
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        for (let k = 0; k < totalPortfolioItem; k++) {
            if (filterValue === portfolioItems[k].getAttribute('data-category')) {
                portfolioItems[k].classList.remove('hide');
                portfolioItems[k].classList.add('show');
            } else {
                portfolioItems[k].classList.remove('show');
                portfolioItems[k].classList.add('hide');
            }
            if (filterValue === 'all') {
                portfolioItems[k].classList.remove('hide');
                portfolioItems[k].classList.add('show');
            }
        }

    })
}

// Portfolio Lightbox
const lightbox = document.querySelector('.lightbox'),
    lightboxImg = lightbox.querySelector('.lightbox-img'),
    lightboxText = lightbox.querySelector('.caption-text'),
    lightboxClose = lightbox.querySelector('.lightbox-close'),
    lightboxCounter = lightbox.querySelector('.caption-counter');

let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
    portfolioItems[i].addEventListener('click', function() {
        itemIndex = i;
        changeitem();
        toggleLightbox();
    })
}

function nextItem() {
    if (itemIndex === totalPortfolioItem - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    changeitem();
}

function prevItem() {
    if (itemIndex === 0) {
        itemIndex = totalPortfolioItem - 1
    } else {
        itemIndex--;
    }
    changeitem();
}
const toggleLightbox = () => {
    lightbox.classList.toggle('open')
}
const changeitem = imgSrc => {
    imgSrc = portfolioItems[itemIndex].querySelector('.portfolio-img img').getAttribute('src');
    lightboxImg.src = imgSrc
    lightboxText.innerHTML = portfolioItems[itemIndex].querySelector('h4').innerHTML;
    lightboxCounter.innerHTML = (itemIndex + 1) + ' of ' + totalPortfolioItem;
}

// close lightbox
lightbox.addEventListener('click', function(event) {
    if (event.target === lightboxClose || event.target === lightbox) {
        toggleLightbox();
    }
})

const checkdownload = document.getElementsByClassName('downloadbtn');
console.log(checkdownload,'hello');
console.log(checkdownload[0].baseURI);
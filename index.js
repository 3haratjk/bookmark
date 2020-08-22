

const menuIcon = document.querySelector('#menu-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileMenu = document.querySelector('.mobile-menu');
menuIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
})
closeIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
})

////////////Feature Fuctionality

const model = {
    featuresData: [
        {
            title: 'Simple Bookmarking',
            img: './images/illustration-features-tab-1.svg',
            description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
        },
        {
            title: 'Speedy Searching',
            img: './images/illustration-features-tab-2.svg',
            description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
        },        {
            title: 'Easy Sharing',
            img: './images/illustration-features-tab-3.svg',
            description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
        },
    ],
    activeFeature: 0,
    getFeaturesData: () => model.featuresData,
    getActiveFeature: () => model.activeFeature,
    setActiveFeature: (n) => model.activeFeature = n,
}

const controller = {
    getFeaturesData: () => model.getFeaturesData(),
    getActiveFeature: () => model.getActiveFeature(),
    setActiveFeature: (n) => model.setActiveFeature(n),
}

const feature = document.querySelector('.feature');


const view = {
    init: () => {
        view.render();
    },
    render: () => {
        let n = controller.getActiveFeature();
        const fList = document.querySelectorAll('.fLItem');
        fList[n].classList.add('activeFLItem');
        feature.innerHTML = '';
        const imgContainer = document.createElement('div');
        const textContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        textContainer.classList.add('text-container');
        const img = document.createElement('img');
        img.src = controller.getFeaturesData()[n].img;
        const title = document.createElement('h2');
        title.textContent = controller.getFeaturesData()[n].title;
        const description = document.createElement('p');
        description.textContent = controller.getFeaturesData()[n].description;
        const button = document.createElement('a');
        button.textContent = 'More Info';
        button.classList.add('moreInfo');
        imgContainer.appendChild(img);
        textContainer.appendChild(title);
        textContainer.appendChild(description);
        textContainer.appendChild(button);
        feature.appendChild(imgContainer);
        feature.appendChild(textContainer);
        n == 2 ? controller.setActiveFeature(0) : controller.setActiveFeature(n+1);
        n == 0 ? fList[n+2].classList.remove('activeFLItem') : fList[n-1].classList.remove('activeFLItem');
        
    }
}

view.init();
setInterval(() => {
    view.render();
}, 3000);


////////////faq 
const faqs = document.querySelectorAll('.faq');
const arrowIcons = document.querySelectorAll('.arrowIcon');
const answers = document.querySelectorAll('.a');

faqs.forEach((faq, i) => {
    faq.addEventListener('click', () => {
        arrowIcons[i].classList.toggle('activeArrow');
        answers[i].classList.toggle('hide');
    })
})
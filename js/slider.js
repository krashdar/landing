const sliderImage = document.querySelector('.slider_image');

const currentCity = document.querySelector('.j-city');
const currentApartArea = document.querySelector('.j-apartArea');
const currentRepTime = document.querySelector('.j-repTime');
const currentRepCost = document.querySelector('.j-repCost');

const sliderMenuItemsDOM = document.querySelectorAll('.slider_menu_item');
const prev = document.querySelector('.j-prev');
const next = document.querySelector('.j-next');
const circles = document.querySelectorAll('.j-circles');

//для мобилки
const sliderImageMobile = document.querySelector('.slider_image_mobile__image');
const prevMobile = document.querySelector('.arrow_left');
const nextMobile = document.querySelector('.arrow_right');



const sliderMenuItems = [
    {
        img: `images/image 2.1.png`,
        imgText: `Rostov-on-Don Admiral photo`,
        city: `Rostov-on-Don<br>LCD admiral`,
        apartArea: `81 m2`,
        repTime: `3.5 months`,
        repCost: `Upon request`
    },
    {
        img: `images/image 2.png`,
        imgText: `Sochi Thieves photo`,
        city: `Sochi Thieves`,
        apartArea: `105 m2`,
        repTime: `4 months`,
        repCost: `Upon request`
    },
    {
        img: `images/image 3.png`,
        imgText: `Rostov-on-Don Patriotic photo`,
        city: `Rostov-on-Don<br>Patriotic`,
        apartArea: `93 m2`,
        repTime: `3 months`,
        repCost: `Upon request`
    },
]

const setEntity = (index) => {
    //очищаем выбранную ссылку и кружочки
    sliderMenuItemsDOM.forEach(function (item,i) {
        let currentMenuElement = item.querySelector('a');
        if (i!==index) {currentMenuElement.setAttribute("class","slider_menu_item_nonactive");}
        else {currentMenuElement.setAttribute("class", "slider_menu_item_active");}
    });
    circles.forEach(item => item.setAttribute("src", "images/krug_grey.svg"));

    //обновляем информацию слайдера
    sliderImage.innerHTML = `<img src="${sliderMenuItems[index].img}" alt="${sliderMenuItems[index].imgText}" title="${sliderMenuItems[index].imgText}">`;
    currentCity.innerHTML = `${sliderMenuItems[index].city}`;
    currentApartArea.innerHTML = `${sliderMenuItems[index].apartArea}`;
    currentRepTime.innerHTML = `${sliderMenuItems[index].repTime}`;
    currentRepCost.innerHTML = `${sliderMenuItems[index].repCost}`;
    circles[index].setAttribute("src", "images/krug_white.svg");

    //для мобилки
    sliderImageMobile.setAttribute("src",`${sliderMenuItems[index].img}`);
    sliderImageMobile.setAttribute("alt", `${sliderMenuItems[index].imgText}`)
    sliderImageMobile.setAttribute("title", `${sliderMenuItems[index].imgText}`)
}


let currentIndex = 0;

sliderMenuItemsDOM.forEach(function (item,i) {

    let currentMenuElement = item.querySelector('a');
    currentMenuElement.addEventListener('click',() => {
        currentIndex = i;
        setEntity((currentIndex));
    });
});

circles.forEach(function (item,i) {
    item.addEventListener('click', () => {currentIndex = i; setEntity(currentIndex);});
});


prev.addEventListener('click', () =>{
    if (currentIndex-1 < 0) {
        currentIndex = sliderMenuItems.length - 1;
        setEntity(currentIndex);
    }else {
        currentIndex -= 1;
        setEntity(currentIndex);
    }
})
next.addEventListener('click', () => {
    if (currentIndex+1 > sliderMenuItems.length - 1) {
        currentIndex = 0;
        setEntity(currentIndex);
    }else {
        currentIndex += 1;
        setEntity(currentIndex);
    }
})


//для мобилки
prevMobile.addEventListener('click', () =>{
    if (currentIndex-1 < 0) {
        currentIndex = sliderMenuItems.length - 1;
        setEntity(currentIndex);
    }else {
        currentIndex -= 1;
        setEntity(currentIndex);
    }
})
nextMobile.addEventListener('click', () =>{
    if (currentIndex+1 > sliderMenuItems.length - 1) {
        currentIndex = 0;
        setEntity(currentIndex);
    }else {
        currentIndex += 1;
        setEntity(currentIndex);
    }
})
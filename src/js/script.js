const langEl = document.querySelector(".lang__wrapper");
const link = document.querySelectorAll(".lang__link");
const translateItem1 = document.querySelector(".name");
const translateItem2 = document.querySelector(".lang__link");
const translateItem3 = document.querySelector(".work1");
const translateItem4 = document.querySelector(".work2");
const translateItem5 = document.querySelector(".work3");
const translateItem6 = document.querySelector(".pad");
const translateItem7 = document.querySelector(".telegram__link");
const translateItem8 = document.querySelector(".phone");

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');
        
        const attr = el.getAttribute('language');
        translateItem1.textContent = data[attr].name;
        translateItem2.textContent = data[attr].lang__link;
        translateItem3.textContent = data[attr].work1;
        translateItem4.textContent = data[attr].work2;
        translateItem5.textContent = data[attr].work3;
        translateItem6.textContent = data[attr].pad;
        translateItem7.textContent = data[attr].telegram__link;
        translateItem8.textContent = data[attr].phone;
         
    })
});

let data = {
    "ua":
    {
        "name": 
            "Лiлiя - майстер депиляцiї",
        "work1":
            "Подарую iдеальну красу",
        "work2":
            "Допоможу пiдiбрати домашнiй догляд",
        "work3":
            "Навчу мистецтву лазерної депіляції",
        "pad":
            "Чекаю на Вас в своєму затишному кабінеті за адресою",
        "telegram__link":
            "Записатися в",
        "phone":
            "Зателефонувати"

    },
    "ru":
    {
        "name": 
            "Лилия - мастер депиляции",
        "work1":
            "Подарю идеальную красоту",
        "work2":
            "Помогу подобрать домашний уход",
        "work3":
            "Обучу искусству лазерной депиляции",
        "pad":
            "Жду Вас в своём уютном кабинете по адресу",
        "telegram__link":
            "Записаться в",
        "phone":
            "Позвонить"

    },
    "pl":
    {
        "name": 
            "Lilia - mistrz depilacji",
        "work1":
            "Dam idealne piękno",
        "work2":
            "Pomogę Ci w wyborze opieki domowej",
        "work3":
            "Nauczę sztuki depilacji laserowej",
        "pad":
            "Czekam na Ciebie w moim przytulnym gabinecie przy ul",
        "telegram__link":
            "Zapisać się do",
        "phone":
            "Połączenie"

    },
        
}
function slowShowModal(item, zIndex) {
    zIndex = zIndex || 20;
    item.setAttribute("style", "display:flex;");
    item.style.zIndex = zIndex;
    item.style.opacity = "0";
    var opacity = 0;
    var itemShowAnimate = setInterval(function () {
        opacity += 0.1;
        if (opacity >= 1){
            clearInterval(itemShowAnimate);
        }
        item.style.opacity = opacity.toFixed(1) + " ";
    },30);
}
function modalShow(e, opener, closer) {
    e.preventDefault();
    slowShowModal(opener, 21);
    closer.addEventListener('click', function () {
        modalCloseClickTarget(e, opener); //добавить хендлер на закрытие по клику на крестик
    });
    slowShowModal(modalBackground);

    modalBackground.addEventListener('click', function () {
        modalCloseClick(opener) //добавить хендлер на закрытие по бэкграунду
    });
    window.addEventListener('keydown', function () {
        modalCloseKey(event, opener);
    }); //добавить хенделер для нажатия кнопки esc
}
function modalCloseClickTarget(event, opener) {
    event.preventDefault();
    opener.removeAttribute('style');
    modalBackground.removeAttribute('style');
}
function modalCloseClick(opener) {
    modalBackground.removeAttribute('style');
    opener.removeAttribute('style');
}
function modalCloseKey(event, opener) {
    if(event.keyCode === 27){
        opener.removeAttribute('style');
        modalBackground.removeAttribute('style');
    }
}

var contactUs = document.querySelector(".contacts__link");
var writeUs = document.querySelector(".write-us");
var modalBackground = document.querySelector(".modal-background");
var writeUsClose = document.querySelector(".write-us__close");
var loginButton = document.querySelector(".main-header__sign-in");
var loginModal = document.querySelector(".login");
var loginModalCloser = document.querySelector(".login__close");
var registrationButton = document.querySelector(".main-header__sign-up");
var registrationModal = document.querySelector(".registration");
var registrationModalCloser = document.querySelector(".registration__close");
var loginRegistrationBtn = document.querySelector(".login__registration-btn");

contactUs.addEventListener('click', function(){
    modalShow(event, writeUs, writeUsClose); //event, opener, closer
});
loginButton.addEventListener('click',function () {
    modalShow(event, loginModal, loginModalCloser); //event, opener, closer
});
registrationButton.addEventListener('click',function () {
    modalShow(event, registrationModal, registrationModalCloser); //event, opener, closer
});
loginRegistrationBtn.addEventListener('click', function () {
    modalShow(event, registrationModal, registrationModalCloser); //event, opener, closer
    loginModal.removeAttribute("style");
});




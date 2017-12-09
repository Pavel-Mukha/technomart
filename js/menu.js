$(document).ready(function(){
    var touch = $('.touch-menu');
    var menu = $('.adaptive-navigation');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 768 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});
// var touch = document.querySelector(".touch-menu");
// var adaptiveNavigation = document.querySelector(".adaptive-navigation");
// function showMenu(event){
//     event.preventDefault();
//     adaptiveNavigation.style.display = 'block';
//     adaptiveNavigation.style.height = '0';
//     adaptiveNavigation.style.overflow = 'hidden';
//     var height = 0;
//     var currentHeight = adaptiveNavigation.scrollHeight; //полчение полной высоты меню
//         var timer = setInterval(function () {
//             adaptiveNavigation.style.height = height + 'px'; //актуальная высота
//             if(parseInt(adaptiveNavigation.style.height) === currentHeight){ //устловие остановки
//                 clearInterval(timer);
//                 touch.removeEventListener('click', showMenu);
//             }
//             height += 13; //итератор высоты
//         },16);
// }
// function closeMenu() {
//     event.preventDefault();
//         adaptiveNavigation.style.overflow = 'hidden';
//             var currentHeight = parseInt(adaptiveNavigation.scrollHeight);
//             var timer = setInterval(function () {
//                 adaptiveNavigation.style.height = currentHeight + 'px'; //актуальная высота
//                 if (parseInt(adaptiveNavigation.style.height) <= currentHeight) { //устловие остановки
//                     clearInterval(timer);
//                 }
//                 currentHeight -= 13; //итератор высоты
//             }, 16);
// }
// if(!adaptiveNavigation.scrollHeight || adaptiveNavigation.style.display === 'none')
//     touch.addEventListener('click', showMenu);
// if(adaptiveNavigation.style.display === 'block')
//     touch.addEventListener('click', closeMenu);
var dateArr = [
    '27.01.2017',
    '25.01.2017',
    '17.01.2017',
    '14.01.2017',
    '30.12.2016',
    '27.12.2016',
    '26.12.2016',
    '23.12.2016',
    '21.12.2016'
];
var news_archive = [
    'Можлива затримка доставок через ускладнені погодні умови',
    'Клієнти «Нова пошта» вже можуть скористатися Viber ботом',
    'Модуль 1С і віджети: «Нова пошта» розширює можливості для e-commerce',
    '«Нова пошта» и RIA.com запустили спільний проект',
    '«Нова пошта» вдруге доставила новорічні подарунки для дітей-сиріт',
    'Графік роботи відділень «Нова пошта» під час зимових свят',
    '«Нова пошта» почала доставляти посилки з китайських інтернет-магазинів',
    'Святковий сезон: «Нова пошта» працює в посиленому режимі',
    'Ринок поштової логістики звернувся до Прем’єр-міністра України В. Гройсмана з листом'];

var massage = 0;
var massageLength = news_archive.length;



function changeMassage (x) {
    

    massage+=x;
    if (massage>massageLength-3) {
        massage=0;
    }
    if (massage<0) {
        massage=massageLength-3;
    }
    
    document.getElementById("caption1").innerHTML = news_archive[massage++];
    document.getElementById("caption2").innerHTML = news_archive[massage++];
    document.getElementById("caption3").innerHTML = news_archive[massage++];
}

function autoRun() {
    
    setInterval("changeMassage(0)",3000);
}
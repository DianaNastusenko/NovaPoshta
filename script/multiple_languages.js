var arrLang = {
    'eng': {
        'about_company': 'About Company',
        'company_news': 'Company News'
    },
    
    'ukr': {
        'about_company': 'Про компанію',
        'company_news': 'Новони Компанії'
    }
    
}


$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');
        
        $('.lang').each(function(index,element){
            $('.this').text(arrLang[lang][$(this).attr('key')]);
        });
    });
});
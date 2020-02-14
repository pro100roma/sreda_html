var show = document.getElementsByClassName('show-cert');

for( var i = 0; i < show.length; i++ ){
    show[i].removeAttribute('href');
    show[i].addEventListener('click', function(){
        document.querySelector('.cert-bg').style.display = 'flex';
    });
}
document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.cert-bg').style.display = 'none';
});

$(document).mouseup(function (e) {
    var popup = $('.certificate');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.cert-bg').fadeOut();
    }
});
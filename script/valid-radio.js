var submit = document.getElementById('submit');

submit.addEventListener('click', function (e) {
    var el = document.querySelectorAll('.radio__option:checked');
    if( el.length < 5 ){
        document.querySelector('.message-overlay').style.display = 'flex';
    }
    else {
        document.querySelector('.test-result-overlay').style.display = 'flex';
    }
});
document.querySelector('.closeMessage').addEventListener('click', function () {
    document.querySelector('.message-overlay').style.display = 'none';
});
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.test-result-overlay').style.display = 'none';
});
$(document).mouseup(function (e) {
    var popup = $('.test-result-popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.test-result-overlay').fadeOut();
    }
});
$(document).mouseup(function (e) {
    var popup = $('.message-popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.message-overlay').fadeOut();
    }
});
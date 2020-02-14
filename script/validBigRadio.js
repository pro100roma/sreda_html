var testForm = document.getElementById('impression-form');
var selectError = document.getElementsByClassName('title-for-required');
testForm.addEventListener('submit', function (e){

    var stopRestart = true;
    e.preventDefault();
    var el = document.querySelectorAll('[data-reqired]');
    var erroreArrayElemnts = [];

    for (var i = 0; i < el.length; i++){
        if (el[i].tagName === 'INPUT'){
            var name = el[i].getAttribute('name');
            if (document.querySelectorAll('[name=' + name + ']:checked').length === 0){
                erroreArrayElemnts.push(el[i]);
                $(el[i]).on('click', function () {
                    $(this).parents('.range-container').find('.error-block').hide();
                })
                $(el[i]).parents('.range-container').find('.error-block').show();
            }
        }
    }
    console.log(testForm);
    if( testForm.quali.value == "0" )
    {
        erroreArrayElemnts.push(testForm.quali);
        $(selectError).fadeIn();
        return false;
    }
 if (erroreArrayElemnts.length === 0) {
        document.querySelector('.message-overlay').style.display = 'flex';
    }
});
document.querySelector('.closeMessage').addEventListener('click', function () {
    document.querySelector('.message-overlay').style.display = 'none';
});
$(document).mouseup(function (e) {
    var popup = $('.message-popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.message-overlay').fadeOut();
    }
});
var red = document.getElementsByClassName('.questions-field');
function validate(e,form_id,email) {
    e.preventDefault();
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_id].elements[email].value;
    if(reg.test(address) == false) {
        document.querySelector('.error-message-overlay').style.display = 'flex';
        document.querySelector('.close-message').addEventListener('click', function(){
            document.querySelector('.error-message-overlay').style.display = 'none';
        });
        // return false;
    }
    else {
        document.querySelector('.success-message-overlay').style.display = 'flex';
        document.querySelector('.closePopupmessage').addEventListener('click', function(){
            document.querySelector('.success-message-overlay').style.display = 'none';
        });
    }
    return false;
}
$(document).mouseup(function (e) {
    var popup = $('.error-message-popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.error-message-overlay').fadeOut();
    }
});
$(document).mouseup(function (e) {
    var popup = $('.success-message-popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.success-message-overlay').fadeOut();
    }
});

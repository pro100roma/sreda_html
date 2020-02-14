document.querySelector('.link-btn').addEventListener('click', function () {
    $('.link-container').fadeIn();
});

function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);

    document.querySelector('.informMessage').style.display = 'flex';
}
 function outFunc(){
     $('.informMessage').fadeOut();
}
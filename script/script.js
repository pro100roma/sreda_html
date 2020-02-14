// for textatre Y resize
$('textarea').keyup(function(){
    $(this).height(0); // min-height
    $(this).height(this.scrollHeight);
});



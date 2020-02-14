var arr = document.getElementsByClassName('profile-item-data');
for (var i=0; i<arr.length; i++ ){
    var item = arr[i];
    item.ondblclick = function (event) {
      $(event.target).hide();
      var editArea =  $(this).parent().find('input[type=text]')[0];
      // console.log(editArea);
      $(editArea).removeClass('hide').focus();
        $(editArea).on('focus', function(e){
            e.target.style.border = '2px solid #63deee';
            e.target.style.boxShadow = 'none';
        });
        $(editArea).on('focusout',function (e) {

            if(
                (e.target.id === 'surname' || e.target.id === 'name' || e.target.id === 'phone' || e.target.id ==='mail') &&
                e.target.value === ''
            ){
                e.target.style.border = '2px solid red';
                e.target.style.boxShadow = '-1px -1px 21px 0px rgba(230,0,0,0.75)';
            }
            else {
                $(this).parent().find('.profile-item-data')[0].innerHTML = editArea.value;
                $(editArea).addClass('hide');
                $(this).parent().find('.profile-item-data').show();
            }
        });
        $(editArea).on('keypress',function (e) {
            e.target.style.border = '2px solid #63deee';
            e.target.style.boxShadow = 'none';
            if (e.keyCode == 13){
                if(
                    (e.target.id === 'surname' || e.target.id === 'name') &&
                    e.target.value === ''
                ){
                    e.target.style.border = '2px solid red';
                    e.target.style.boxShadow = '-1px -1px 21px 0px rgba(230,0,0,0.75)';
                }
                else {
                    $(this).parent().find('.profile-item-data')[0].innerHTML = editArea.value;
                    $(editArea).addClass('hide');
                    $(this).parent().find('.profile-item-data').show();
                }
                return false;
            }
        });
    }
}

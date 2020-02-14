let globalTestBlockIndex = 0;

if( window.location.href.indexOf('#done-test') > -1 ) {
    $('.test-result-overlay').css('display', 'flex');
}

document.addEventListener('DOMContentLoaded', function() {
    if( window.location.href.indexOf('#do_test') > -1) {
        $('#do_test').click();
    }
});


/**
 * Hide button <ПРОЙТИ ТЕСТ ПО КУРСУ>
 * Show First Test block
 * */
$('#do_test').on( 'click', function () {
    // Show Quiz First Block
    const timer = new NITimer( '#timer', 1200, function () {
        // console.log(2222);
    } );
    $('#do_test').fadeOut();
    $('.main-test').removeClass('hide');
    $('.main-test').find('.main-test_questions-wrapper').hide();
    $('.main-test').fadeIn();
    $($('.main-test').find('.main-test_questions-wrapper')[0]).show();

    // add EventListner for buttons on quiz
    $('.main-test').find('.previous-question').on( 'click', function () {
            $($('.main-test').find('.main-test_questions-wrapper')[globalTestBlockIndex]).hide();
            globalTestBlockIndex--;
            $($('.main-test').find('.main-test_questions-wrapper')[globalTestBlockIndex]).show();
    } );
    $('.main-test').find('.next-question').on( 'click', function () {
        if( doValidation( $($('.main-test').find('.main-test_questions-wrapper')[globalTestBlockIndex]) ) ){
            $($('.main-test').find('.main-test_questions-wrapper')[globalTestBlockIndex]).hide();
            globalTestBlockIndex++;
            $($('.main-test').find('.main-test_questions-wrapper')[globalTestBlockIndex]).show();
        }
    } );
    $('.main-test').find('.send-question_btn').on( 'click', function () {

        if( doValidation( $($('.main-test').find('.main-test_questions-wrapper')[globalTestBlockIndex]) ) ){
            // $($('.main-test').find('.main-test_questions-wrapper')[globalTestBlockIndex]).fadeOut();
            window.removeEventListener('beforeunload', beforeLoad);
            $('#form-test').submit();
            console.log('submit1');
        }
    } );

});

/**
 * Test switch
 * Full list or step-by-step
 * */
// $('.test-switch').click(function(e) {
//     e.preventDefault();
//
//     if($('.step-by-step').is(':visible')) {
//         $('.step-by-step').hide();
//         $('.full-test').show();
//         $('.full-test').find('.main-test_questions-wrapper').show();
//     } else {
//         $('.step-by-step').show();
//         $('.full-test').hide();
//         $('.full-test').find('.main-test_questions-wrapper').hide();
//     }
// });



function doValidation( wrapper ) {
    /**
     * @variable nameArrays: array with names of all radio-inputs
     * @variable erroreArray: array with names of radio-inputs witch not-selected
     * @type {Array}
     */
    const nameArrays = [],
          erroreArray = [];
    Array.from($( wrapper[0] ).find('.radio__option')).forEach( (v) => {
        let name = $(v).attr('name');
        nameArrays.indexOf( name ) == -1 ?
            nameArrays.push( name ) :
            false;
    } );

    nameArrays.forEach( v => {
        $('[name='+v+']:checked').length > 0 ?
            console.log( v, 'true' ) :
            erroreArray.push(v);
    } );

    if( erroreArray.length > 0 ) {
        erroreArray.forEach( v => {
            $($( 'input[name="'+v+'"]' )[0]).parents('.main-test_question-wrapper').find('.input-radio-error').remove();
            $($( 'input[name="'+v+'"]' )[0]).parents('.main-test_question-wrapper').append('<p class="input-radio-error">Выберите ответ</p>');
            $( 'input[name="'+v+'"]').on('change', function () {
                $(this).parents('.main-test_question-wrapper').children('.input-radio-error').last().remove();
            });
        } )
        return false;
    }
    else {

        return true;
    }
}
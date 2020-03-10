jQuery(function ($) {
    $(document).ready(function () {
        $('.user-vacancies__row_left .user-vacancies__name').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            if($(this).parents('.user-vacancies__block').find('.user-vacancies__row-content').is(':visible')) {
                $(this).parents('.user-vacancies__block').find('.user-vacancies__row-content').slideUp(300);
                $(this).siblings('.popup-profile-link').fadeOut(300);
            } else {
                $(this).parents('.user-vacancies__block').find('.user-vacancies__row-content').slideDown(300);
                $(this).siblings('.popup-profile-link').fadeIn(300);
            }
        });

        $('a.done-test__profile').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('active');

            if( $(this).siblings('.popup-profile-link').is(':visible') ) {
                $(this).siblings('.popup-profile-link').fadeOut(300);
            } else {
                $(this).siblings('.popup-profile-link').fadeIn(300);
            }

            // $('a.done-test__name').removeClass('active');
            //
            // let tableID = $(this).attr('href');
            //
            // if( $(tableID).is(':visible') ) {
            //     $(this).removeClass('active');
            //     $(tableID).slideUp(200);
            // } else {
            //     $(this).addClass('active');
            //     $('.test-details-wrap').hide();
            //     $(tableID).slideDown(200);
            // }
        });
        $('a.done-test__name.open').click(function(e) {
            e.preventDefault();
            //$(this).toggleClass('active');

            $('a.done-test__name.open').removeClass('active');

            let tableID = $(this).attr('href');

            if( $(tableID).is(':visible') ) {
                $(this).removeClass('active');
                $(tableID).addClass('hide');
            } else {
                $(this).addClass('active');
                $('.test-details-wrap').addClass('hide');
                $(tableID).removeClass('hide');
            }
        });

        $('a.test-details__name').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            if($(this).parents('.custom-table__row').find('.answer-content').is(':visible')) {
                $(this).parents('.custom-table__row').find('.answer-content').slideUp(100);
            } else {
                $(this).parents('.custom-table__row').find('.answer-content').slideDown(100);
            }
        });


        //Icon info hover
        $('.info-icon').mouseenter(function() {
            $(this).find('.icon-info__text').fadeIn(300);
        });
        $('.info-icon').mouseleave(function() {
            $(this).find('.icon-info__text').fadeOut(300);
        });

        //Upload
        let fileInput = document.getElementById('file-input'),
            fileInput2 = document.getElementById('file-input2'),
            fileInput3 = document.getElementById('file-input3');
        if(fileInput) {
            fileInput.onchange = function() {
                if (this.files[0]) // если выбрали файл
                    document.getElementById('file-label').innerHTML = this.files[0].name + '<img class="upload-image" src="../../../img/corp/icons/download-arrow_blue.png">';
            };
        }
        if(fileInput2) {
            fileInput2.onchange = function() {
                if (this.files[0]) // если выбрали файл
                    document.getElementById('file-label2').innerHTML = this.files[0].name + '<img class="upload-image" src="../../../img/corp/icons/download-arrow_blue.png">';
            };
        }
        if(fileInput3) {
            fileInput3.onchange = function() {
                if (this.files[0]) // если выбрали файл
                    document.getElementById('file-label3').innerHTML = this.files[0].name + '<img class="upload-image" src="../../../img/corp/icons/download-arrow_blue.png">';
            };
        }

        //Constructor content section checkbox
        $('.vac-settings__block input[type=checkbox]').change(function() {
            if($(this).parents('.tools-title').siblings('.vac-settings__block-content').is(':visible')) {
                $(this).parents('.tools-title').siblings('.vac-settings__block-content').fadeOut(300);
            } else {
                $(this).parents('.tools-title').siblings('.vac-settings__block-content').fadeIn(300);
            }
        });
        //Constructor content social links checkboxes
        $('.vac-socials__row input[type=checkbox]').change(function() {
            if($(this).parents('.vac-socials__row').find('.input-group').is(':visible')) {
                $(this).parents('.vac-socials__row').find('.input-group').fadeOut(300);
            } else {
                $(this).parents('.vac-socials__row').find('.input-group').fadeIn(300);
            }
        });

        //Constructor content test name click
        $('.test-edit .test-edit__name').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            if($(this).siblings('.test-edit__descr').is(':visible')) {
                $(this).siblings('.test-edit__descr').hide();
            } else {
                $(this).siblings('.test-edit__descr').show();
            }
            // if($(this).parents('.custom-table__row').find('.test-radio').is(':visible')) {
            //     $(this).parents('.custom-table__row').find('.test-radio').fadeOut(300);
            // } else {
            //     $(this).parents('.custom-table__row').find('.test-radio').fadeIn(300);
            // }
            $(this).parents('.custom-table__row').find('.custom-table__cell:nth-of-type(3)').toggleClass('opened');
        });

        //Regular webinar
        $('input[name=regular-webinar-checkbox]').change(function() {
            if($(this).is(':checked')) {
                $(this).parents('.design-content__row').find('.reg-webinar-settings').fadeIn(300);
            } else {
                $(this).parents('.design-content__row').find('.reg-webinar-settings').fadeOut(300);
            }
        });

        $('.webinar-select').change(function() {
            if($(this).val() == 1) {
                $(this).siblings('.webinar-password').fadeIn(300);
            } else {
                $(this).siblings('.webinar-password').fadeOut(300);
            }
        });

        $('input[name=public-link-checkbox]').change(function() {
            if($(this).is(':checked')) {
                $(this).parents('.design-content__row').find('.link-input').fadeIn(300);
            } else {
                $(this).parents('.design-content__row').find('.link-input').fadeOut(300);
            }
        });

        $('input[name=reg-ban-checkbox]').change(function() {
            if($(this).is(':checked')) {
                $(this).parents('.design-content__row').find('.link-input').fadeOut(300);
            } else {
                $(this).parents('.design-content__row').find('.link-input').fadeIn(300);
            }
        });

        $('input[name=webinar-layout-radio]').change(function() {
            if($(this).is(':checked')) {
                $('.webinar-layouts-checkboxes .test-radio').removeClass('active');
                $(this).parents('.test-radio').addClass('active');
            } else {
                $('.webinar-layouts-checkboxes .test-radio').removeClass('active');
            }
        });

        //Speaker photo change
        //let speakerImg = $('.speaker-select-wrap .speaker-img-wrap');
        let speakerImg = document.querySelectorAll(('.speaker-select-wrap .speaker-img-wrap'));

        $('.speaker-select-wrap select').change(function() {
            $('.speaker-select-wrap .speaker-img-wrap').removeClass('active');

            for(let i = 0; i < speakerImg.length; i++) {
                speakerImg[$(this).val()].classList.add('active');
            }
        });

        //Reviews disable
        $('.s-reviews .owl-carousel .vac-tools input').change(function() {
            if($(this).is(':checked')) {
                $(this).parents('.owl-item').removeClass('disabled');
            } else {
                $(this).parents('.owl-item').addClass('disabled');
            }
        });

        // $('.webinar-member-table .custom-table__header .custom-table__col:nth-of-type(1) input[type=checkbox]').change(function() {
        //     $(this).parents('.webinar-member-table').find('.test-radio input[type=checkbox]').attr('checked', true);
        // });

        //Copy click
        $('.copy').click(function(e) {
            e.preventDefault();
            $(this).find('.copy-alert').fadeIn(300);

            setTimeout(function() {
                $('.copy-alert').fadeOut(300);
            }, 2000);
        });

        //Upload photo alert
        $('.upload-photo .upload-container').mouseenter(function() {
            $(this).parents('.upload-photo').find('.max-file-size-alert').fadeIn(300);
        });
        $('.upload-photo .upload-container').mouseleave(function() {
            $(this).parents('.upload-photo').find('.max-file-size-alert').fadeOut(300);
        });

        //Make main email in corporate profile
        $('.do-main-email').click(function(e) {
            e.preventDefault();
            $('.do-main-email').parents('.input-group').removeClass('main-email');
            $(this).parents('.input-group').addClass('main-email');
        });

        //remove emails from corporate profile
        $('.remove-email').click(function(e) {
            $(this).parents('.input-group').slideUp(300);
        });

        //region table drop
        $('.ratings-region-table .done-test__name').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            let regionTableRow = $(this).parent('.custom-table__cell').parent('.custom-table__row').children('.custom-table__row');
            if(regionTableRow.is(':visible')) {
                regionTableRow.removeClass('active');
            } else {
                regionTableRow.addClass('active');
            }
        });

        //Table toggle
        $('.table-toggle').click(function(e) {
            e.preventDefault();
            let tableBody = $(this).parents('.custom-table').children('.custom-table__body');
            if(tableBody.is(':visible')) {
                $(this).addClass('active');
                tableBody.slideUp(300);
            } else {
                $(this).removeClass('active');
                tableBody.slideDown(300);
            }
        });

        //Rating members home work table
        $('.ratings-members-hw-table .done-test__name').click(function (e) {
            e.preventDefault();
            $(this).toggleClass('active');
            let hwLink = $(this).parent('.custom-table__cell').siblings('.custom-table__row-inn');
            if(hwLink.is(':visible')) {
                hwLink.slideUp(300);
            } else {
                hwLink.slideDown(300);
            }
        });

        //Copy members
        $('.members-copy').click(function(e) {
            e.preventDefault();
            if($(this).find('span').is(':visible')) {
                $(this).find('span').fadeOut(300);
            } else {
                $(this).find('span').fadeIn(300);
            }
        });

        //Date disable
        $('.course-set-chk #checkbox01').change(function() {
           if($(this).is(':checked')) {
               $('#course-start input').attr('disabled', false);
           } else {
               $('#course-start input').attr('disabled', true);
           }
        });
        $('.course-set-chk #checkbox02').change(function() {
            if($(this).is(':checked')) {
                $('#course-end input').attr('disabled', false);
            } else {
                $('#course-end input').attr('disabled', true);
            }
        });

        //Title hover info
        $('.title .hover-info').mouseenter(function() {
            $(this).siblings('.hover-info-text').fadeIn(300);
        });
        $('.title .hover-info').mouseleave(function() {
            $(this).siblings('.hover-info-text').fadeOut(300);
        });

        $('.min_res-output_link').click(function(e) {
            if($(this).siblings('.min_res-wrap').is(':visible')) {
                $(this).siblings('.min_res-wrap').fadeOut(300);
            } else {
                $(this).siblings('.min_res-wrap').fadeIn(300);
            }
        });

        $(document).on('click', function(e) {
            let targ = e.target;
            if(targ.classList.contains('min_res-output_link') || targ.classList.contains('min_res-wrap') || targ.classList.contains('test-min_res')) {
                console.log('1');
            } else {
                $('.min_res-wrap').fadeOut(300);
            }

        });
        //Input range
        $('#min_res').change(function() {
            $('.min_res-output').text($(this).val() + '%');
            $('.min_res-output_link').text($(this).val() + '%');
        });

        //Textarea symbols count
        $('textarea').keyup(function() {
            let characterCount = $(this).val().length,
                currentCount = $(this).parent('.input-group').find('.current-count');

            currentCount.text(characterCount);
        });

        //Check all table's checkboxes
        $('.check-all').change(function() {
            $('.custom-table').find('.custom-table__body input[type="checkbox"]').prop('checked', $(this).is(':checked'));
        });

        //Test after webinar checkbox change
        $('.webinar-test-wrap').on('change', 'input[type="checkbox"]', function() {
            if($(this).is(':checked')) {
                $(this).parents('.webinar-test-wrap').find('.test-alert').fadeIn(300);

                setTimeout(function() {
                    $('.test-alert').fadeOut(300);
                }, 2000);
            }
        });

        //Generate link change
        $('.generate-link-wrap .tools-title input[type="checkbox"]').change(function() {
            if($(this).is(':checked')) {
                $('.link-btn-wrapper, .link-container').slideDown(300);
                $('.assign-test-show').slideUp(300);
            } else {
                $('.link-btn-wrapper, .link-container').slideUp(300);
                $('.assign-test-show').slideDown(300);
            }
        });



        //Media queries
        if($(window).width() < 1200) {

        }

    });
});
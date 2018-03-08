(function($) {
// Кастомные лейблы на полях формы
$('.form__item_field').focus(function () {
    $(this).parent().find("label").hide();
});
$('.form__item_field').blur(function () {
   if ($(this).val().trim() === '') {
        $(this).parent().find("label").show();
    }
});

// Маска на поле телефона
function maskInput () {
	$('#form__phone').mask("+7 (999) 999 99 99");
};

$(document).ready(function () {
	maskInput();
});

})(jQuery);
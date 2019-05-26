$(function() {

	// Custom JS
	
$('.nav_menu').click(function(){
	$("#nav_menu").show('blind',1000)
});

$("#close_menu").click(function(){
	$('#nav_menu').hide('blind',1000)
});







$(document).ready(function(){

	$('.button_gallery_modal').click(function(){
		$('.FastFood_modal').show('drop',1000)
	});
	$('.close_modal').click(function(){
		$('.FastFood_modal').hide('drop',1000)
	});

	$('.Drink_btn').click(function(){
		$('.Drinks_modal').show('drop',1000)
	});
	$('.close_modal_drinks').click(function(){
		$('.Drinks_modal').hide('drop',1000)
	});


})


// ****************tabs********************

$(document).ready(function () {

	var $wrapper = $('.tab-wrapper'),
		$allTabs = $wrapper.find('.tab-content > div'),
		$tabMenu = $wrapper.find('.tab-menu li'),
		$line = $('<div class="line"></div>').appendTo($tabMenu);

	$allTabs.not(':first-of-type').hide();
	$tabMenu.filter(':first-of-type').find(':first').width('100%')

	$tabMenu.each(function (i) {
		$(this).attr('data-tab', 'tab' + i);
	});

	$allTabs.each(function (i) {
		$(this).attr('data-tab', 'tab' + i);
	});

	$tabMenu.on('click', function () {

		var dataTab = $(this).data('tab'),
			$getWrapper = $(this).closest($wrapper);

		$getWrapper.find($tabMenu).removeClass('active');
		$(this).addClass('active');

		$getWrapper.find('.line').width(0);
		$(this).find($line).animate({
			'width': '100%'
		}, 'fast');
		$getWrapper.find($allTabs).hide();
		$getWrapper.find($allTabs).filter('[data-tab=' + dataTab + ']').show();
	});

}); //end ready




/*  Плавный переход по якорям */
$(document).ready(function(){
			$(".nav_menu__list").on("click","a", function (event) {
					//отменяем стандартную обработку нажатия по ссылке
					event.preventDefault();
					//забираем идентификатор бока с атрибута href
					var id  = $(this).attr('href'),
					//узнаем высоту от начала страницы до блока на который ссылается якорь
							top = $(id).offset().top;
					//анимируем переход на расстояние - top за 1500 мс
					$('body,html').animate({scrollTop: top}, 1500);
			});
	});
	






});


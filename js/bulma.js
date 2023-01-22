// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1

(function() {
    var burger = document.querySelector('.nav-toggle');
    var menu = document.querySelector('.nav-menu');
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();

$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

    $(".show-auto-button").on('click', function () {
        $(this).siblings('.auto-list').show();
        $(this).siblings('.show-auto-button').hide();
    });
});

$("#volkswagenMultivan-1").click(function() {
  $("#modalVolkswagenMultivan").addClass("is-active");
});

$("#toyotaCamry-1").click(function() {
  $("#modalToyotaCamry").addClass("is-active");
});

$("#mercedesBenzMaybach-1").click(function() {
  $("#modalMercedesBenzMaybach").addClass("is-active");
});

$("#mercedesBenzE-1").click(function() {
  $("#modalMercedesBenzE").addClass("is-active");
});

$("#mercedesBenzS222-1").click(function() {
  $("#modalMercedesBenzS222").addClass("is-active");
});


$("#mercedesVito-1").click(function() {
  $("#modalMercedesBenzVito").addClass("is-active");
});

$("#volkswagenMultivan-2").click(function() {
  $("#modalVolkswagenMultivan").addClass("is-active");
});

$("#toyotaCamry-2").click(function() {
  $("#modalToyotaCamry").addClass("is-active");
});

$("#mercedesBenzMaybach-2").click(function() {
  $("#modalMercedesBenzMaybach").addClass("is-active");
});

$("#mercedesBenzE-2").click(function() {
  $("#modalMercedesBenzE").addClass("is-active");
});

$("#mercedesBenzS222-2").click(function() {
  $("#modalMercedesBenzS222").addClass("is-active");
});

$("#mercedesVito-2").click(function() {
  $("#modalMercedesBenzVito").addClass("is-active");
});

$("#volkswagenMultivan-3").click(function() {
  $("#modalVolkswagenMultivan").addClass("is-active");
});

$("#toyotaCamry-3").click(function() {
  $("#modalToyotaCamry").addClass("is-active");
});

$("#mercedesBenzMaybach-3").click(function() {
  $("#modalMercedesBenzMaybach").addClass("is-active");
});

$("#mercedesBenzE-3").click(function() {
  $("#modalMercedesBenzE").addClass("is-active");
});

$("#mercedesBenzS222-3").click(function() {
  $("#modalMercedesBenzS222").addClass("is-active");
});

$("#mercedesVito-3").click(function() {
  $("#modalMercedesBenzVito").addClass("is-active");
});

$(".car-modal-close").click(function() {
   $(".modal").removeClass("is-active");
});

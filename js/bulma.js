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
});

$("#toyotaCamry-1").click(function() {
  $("#modalToyotaCamry").addClass("is-active");
});

$("#mercedesBenzE-1").click(function() {
  $("#modalMercedesBenzE").addClass("is-active");
});

$("#mercedesBenzS-1").click(function() {
  $("#modalMercedesBenzS").addClass("is-active");
});

$("#lexusLX570-1").click(function() {
  $("#modalLexusLX570").addClass("is-active");
});

$("#toyotaCamry-2").click(function() {
  $("#modalToyotaCamry").addClass("is-active");
});

$("#mercedesBenzE-2").click(function() {
  $("#modalMercedesBenzE").addClass("is-active");
});

$("#mercedesBenzS-2").click(function() {
  $("#modalMercedesBenzS").addClass("is-active");
});

$("#lexusLX570-2").click(function() {
  $("#modalLexusLX570").addClass("is-active");
});

$("#toyotaCamry-3").click(function() {
  $("#modalToyotaCamry").addClass("is-active");
});

$("#mercedesBenzE-3").click(function() {
  $("#modalMercedesBenzE").addClass("is-active");
});

$("#mercedesBenzS-3").click(function() {
  $("#modalMercedesBenzS").addClass("is-active");
});

$("#lexusLX570-3").click(function() {
  $("#modalLexusLX570").addClass("is-active");
});

$(".car-modal-close").click(function() {
   $(".modal").removeClass("is-active");
});

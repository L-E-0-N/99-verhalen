$(document).ready(function() {

	$(".zoeken").select2({
		placeholder: "Zoeken..",
		allowClear: true,
		tags: true,
		tokenSeparators: [',', ' '],
	});

	$("#genrefiltertrigger").click(function() {
		if ($("#genrefilteroptie").height() == 30) {
			$("#genrefilteroptie").animate({ height: "330px" }, 200);
			$("#genrefiltertrigger span").text("");
		}
	});

	$(document).click(function() {
		if (!$(event.target).closest('#genrefilteroptie > label').length && $("#genrefilteroptie").height() == 330) {
			$("#genrefilteroptie").animate({ height: "30px" }, 200);
			$("#genrefiltertrigger span").text("");
		}
	});

	$("#themafiltertrigger").click(function() {
		if ($("#themafilteroptie").height() == 30) {
			$("#themafilteroptie").animate({ height: "180px" }, 200);
			$("#themafiltertrigger span").text("");
		}
	});

	$(document).click(function() {
		if (!$(event.target).closest('#themafilteroptie > label').length && $("#themafilteroptie").height() == 180) {
			$("#themafilteroptie").animate({ height: "30px" }, 200);
			$("#themafiltertrigger span").text("");
		}
	});

	$("#niveaufiltertrigger").click(function() {
		if ($("#niveaufilteroptie").height() == 30) {
			$("#niveaufilteroptie").animate({ height: "180px" }, 200);
			$("#niveaufiltertrigger span").text("");
		}
	});

	$(document).click(function() {
		if (!$(event.target).closest('#niveaufilteroptie > label').length && $("#niveaufilteroptie").height() == 180) {
			$("#niveaufilteroptie").animate({ height: "30px" }, 200);
			$("#niveaufiltertrigger span").text("");
		}
	});

	$("#duurfiltertrigger").click(function() {
		if ($("#duurfilteroptie").height() == 30) {
			$("#duurfilteroptie").animate({ height: "80px" }, 200);
			$("#duurfiltertrigger span").text("");
		}
	});

	$(document).click(function() {
		if (!$(event.target).closest('#duurfilteroptie > label').length && $("#duurfilteroptie").height() == 80) {
			$("#duurfilteroptie").animate({ height: "30px" }, 200);
			$("#duurfiltertrigger span").text("");
		}
	});

	$("#zoekenmobiel").click(function() {
		if ($("header").height() === 0) {
			$("header").animate({ height: "3.125em" }, 200);
			$("#zoekenmobiel").text("");
			$(".select2").animate({ marginTop: "0" }, 200);
			$("aside").animate({ height: "3.125em" }, 200);
		}

		else {
			$("header").animate({ height: "0" }, 200);
			$("aside").animate({ height: "0" }, 200);
			$("#zoekenmobiel").text("");
		}
	});

		// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	//
	// CODE om een tag aan de zoekbalk toe te voegen via een input
	//
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	   //  $("#test6").select2({
    //   tags: true
    // });
      
    // $("#btn-add-state").on("click", function(){
    //   var newStateVal = $("#new-state").val();
    //   // Set the value, creating a new option if necessary
    //   if ($("#test6").find("option[value='" + newStateVal + "']").length) {
    //     $("#test6").val(newStateVal).trigger("change");
    //   } else { 
    //     // Create the DOM option that is pre-selected by default
    //     var newState = new Option(newStateVal, newStateVal, true, true);
    //     // Append it to the select
    //     $("#test6").append(newState).trigger('change');
    //   } 
    // });  

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	//
	// CODE om de css te veanderen en een checkbox checked te maken
	//
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	// $("#test5").click(function() {
	// 	// $('#genrefictie').prop('checked', true);
	// 	$("main").css("background-color", "red");

	// });

	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	//
	// CODE TEST om te kijken of de IF statement werkt met li:contains (WERKTE NIET)
	//
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	// $("#test5").click(function() {
	// 	if ($("li:contains(politiek)")) {
	// 		$('#genrefictie').prop('checked', true);
	// 	}
	// });

	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	//
	// CODE om te kijken of je een actie kan laten uitvoegen na een keypress in de zoekbalk (WERKTE NIET)
	//
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	// $(".select2-search__field").keypress(function() {
	// 	$("main").css("background-color", "red");
	// });

	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	//
	// CODE waarbij er een actie gebeurd zodra een checkbox checked is geworden
	//
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	// $("#genrefilteroptie").click(function() {
	// 	if ($('#genrefictie').is(':checked')) {
	// 		$("main").css("background-color", "red");
	// 		$('.select2-search__field').val("contentString,");
	// 	}

	// 	else {
	// 		$("main").css("background-color", "green");
	// 	}
	// });

});

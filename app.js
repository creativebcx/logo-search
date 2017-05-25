var elButton = $('#js-button');
var k12 = "K-12";
var highSchool = "High School";
var loanProgram = "Loan Program";
var scholarshipProgram = "Scholarship Program"

elButton.click(function(event) {
	var elEdLevel = $('#education-level-input');
	var elProgramType = $('#program-type-input');
	event.preventDefault();
	//console.log(elProgramType.val());
	if (elProgramType.val()==loanProgram) {
		$('.row1 .item3 img').attr('src', 'img/afeColor.png');
		$('.row4 .item3 img').attr('src', 'img/afeColor.png');
		$('.row3 .item1 img').attr('src', 'img/afeColor.png');
		$('.row3 .item4 img').attr('src', 'img/afeColor.png');
	}
	if (elProgramType.val()==scholarshipProgram) {
		$('.row1 .item2 img').attr('src', 'img/acmColor.png');
		$('.row2 .item3 img').attr('src', 'img/afeColor.png');
		$('.row4 .item1 img').attr('src', 'img/acmColor.png');
		$('.row4 .item2 img').attr('src', 'img/aciColor.png');
	}
	if (elEdLevel.val()==k12) {
		$('.row1 .item1 img').attr('src', 'img/aciColor.png');
		$('.row1 .item4 img').attr('src', 'img/aciColor.png');
		$('.row2 .item2 img').attr('src', 'img/afeColor.png');
		$('.row3 .item3 img').attr('src', 'img/aciColor.png');
	}
	if (elEdLevel.val()==highSchool) {
		$('.row2 .item1 img').attr('src', 'img/acmColor.png');
		$('.row2 .item4 img').attr('src', 'img/aciColor.png');
		$('.row3 .item2 img').attr('src', 'img/afeColor.png');
		$('.row4 .item4 img').attr('src', 'img/acmColor.png')
	}	
});

//make and if statement that is equal to itself, if true
//.push a variable with the src location of the file in the images folder
//to be placed in the appropriate row class and the appropriate
//item class.
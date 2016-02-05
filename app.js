var counter = 0;

$(document).ready(function() {
	console.log("works");
	$('.container').on('click', '.buttonGenerate', appendContainer);
	$('.container').on('click','.buttonDelete', deleteButton);
	$('.container').on('click', '.buttonChange', changeBackgroundColor);
});

function appendContainer() {
	counter++;
	$('.container').append('<div class="yellow"><button class="buttonDelete">Delete</button><button class="buttonChange">Change</button></div>');
	$('.container').find("p:first").text(counter);
}

function deleteButton() {
	$(this).parent().remove();
}

function changeBackgroundColor() {
	$(this).parent().toggleClass('red');
}


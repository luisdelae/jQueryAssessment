// When the page loads, have a button on the DOM that says 'generate'. X
// Upon clicking on that button, append a new container onto the DOM. X
// That container should have two buttons, one that reads 'delete', the other that reads 'change'. X
// Additionally, there should be text that provides a number. The number should be the number of times the 'generate' button has been clicked. X

// The delete button should delete JUST the container that the button is in. X;
// The change button should change the background-color of the container to red. The default or 'normal' state of the background-color should be yellow. 
// Clicking the button a second time should change it back to yellow, 3rd time red, 4th time yellow, etc. X

// Do not add in anything additional beyond what is required. 
// The goal is not to be clever here, it is simply to execute on the provided instructions.

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


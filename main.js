// a document.ready function will fire as soon as the DOM is loaded,
// but before the content is rendered.
// this is typically where event handlers are added to elements, or other
// page-initialization code would go
$(function() { // remember $ is shorthand for jQuery

	// let's initialize a todo list and add it to our page's ul elemenet
	window.todos = [ "Learn jQuery" ];

	var todoHtml = '';
	window.todos.forEach(function(todo) {
		todoHtml += '<li class="collection-item">' + todo + '</li>';
	});
	$('ul#todos').html(todoHtml);

	/**
	 * EVENT HANDLERS
	 */

	/**
	 * when show-form-btn is clicked, show the todo form, hide this button
	 */
	$('input#show-form-btn').on('click', function() {
		var showFormBtn = this;
		$('div#form').slideDown('fast', function() {
			$(showFormBtn).hide();
		});
	});

	/**
	 * when cancel-btn is clicked, hide the todo form, show the hidden button
	 */
	$('input#cancel-btn').on('click', function() {
		$('#item').val(''); // clear the textbox
		$('div#form').slideUp('fast', function() {
			$('input#show-form-btn').show();
		});
	});

	$('input#save-btn').on('click', function() {
		var todo = $('#item').val();
		if (typeof todo === 'string' && todo.length > 0) {
			window.todos.push(todo); // add to our array
			$('ul#todos').append('<li class="collection-item">' + todo + '</li>');
			$('input#cancel-btn').trigger('click');
		}
	});

	// let's also hide the form by default
	$('div#form').hide();
});

$(document).ready(function() {
    // $('#new-to-do').click(function() {
    $('form#new-to-do').submit(function(event) {
        event.preventDefault();

//variables
        var taskDescription = $('input#new_task').val();
        // var taskDueDate = $('input#new_date').val();

//objects
        var newTask = {
            descriptions : taskDescription
            // due_date : taskDueDate,
        };

//adds newly created task to list of tasks
        $('ul#tasks').append("<li><span class = 'task'>" + newTask.descriptions + "</span></li>");

//reset the form to empty
        $('input#new_task').val('');





//on checkbox check, moves item to list of completed items
    $('span.task').last().click(function() {
        // $('input#task_checkbox').prop('checked')
        $(this).parent('li').remove();
        $('ul#completed').append("<li><span class = 'complete'>" + newTask.descriptions + "</span></li><br>");

//moves item to list of to-do items
        $('span.complete').last().click(function() {
            $(this).parent('li').remove();
            $('ul#tasks').append("<li><span class = 'task'>" + newTask.descriptions + "</span></li><br>");
        });
    });



});
});

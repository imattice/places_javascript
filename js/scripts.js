var completeTask = function(x,newTask2) {
    if($(x).attr('id')=='task') {
        $(x).parent('div#task').remove();
        $('ul#completed').append("<div id='complete'><li id='complete'>" + newTask2.descriptions + "</li></div>");
    } else {
        $(x).parent('div#complete').remove();
        $('ul#tasks').append("<div id='task'><li id='task'>" + newTask2.descriptions + "</li></div>");
    }
}

$(document).ready(function() {
    $('form#new-to-do').submit(function(event) {
        event.preventDefault();

        //variables
        var taskDescription = $('input#new_task').val();

        //objects
        var newTask = {
            descriptions : taskDescription
        };

        //adds newly created task to list of tasks
        $('ul#tasks').append("<div id = 'task'><li id = 'task'>" + newTask.descriptions + "</li></div>");

        //reset the form to empty
        $('input#new_task').val('');

        //on checkbox check, moves item to list of completed items
        $('li').last().click(function() {
            completeTask(this,newTask);
            $('li').last().click(function() {
                completeTask(this,newTask);
            });
        });
    });
});

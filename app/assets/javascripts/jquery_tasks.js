// This is the equivalent of the JavaScript window.addEventListener("load", function(){}). THis tells our browser to wait until the document is loaded before modifying content.  We select the document object with the Jquery selector, $, followed by ().  All of our Jquery and javascript will go inside of this function. 
$(document).ready(function(){
  // It's conventional to add a $ to the beginning of Jquery variables. 
  var $heading = $("#my-heading");
  var $taskButton = $("#task-button");
  var $taskList = $("#task-list");
  var $contentField = $("#name");
  // We use jquery to select the CSRF token from our html meta tags so that we can use it in the ajax web requests. 
  var $token = $('meta[name="csrf-token"]').prop("content");
  
  
  $heading.html("New Heading");
  $heading.on("mouseover", function(){
  $heading.toggleClass("big-blue-heading");
  });

  $taskList.on("click", function(){
    var $currentTask = $(event.target);
    var $taskId = $currentTask.data("id");

// We send an AJAX (Asynchronous JavaSCript with XML) request when we want to communicate with out Rails back-end with JavaSCript. 
//Example when you want to save something to the database without reloading the page
    $.ajax({
      url: `/tasks/${$taskId}`,
      type: "put",
      // JSON: JavaScript Object Notation
      dataType: "Json",
      headers: {"X-CSRF-TOKEN": $token},
      success: function(){
        $currentTask.toggleClass("completed");
      },
      error: function(){
        console.log("Something went wrong.");
      }

    });
  });

  $taskButton.on("click", function(){
    event.preventDefault();
    var $newTask = $(`<li >${$contentField.val()}</li>`).hide();
    $taskList.append($newTask);
    $newTask.fadeIn();
    $contentField.val("");
  });

});
// We listen for the browser to finish loading and then we know it is safe for our DOM manipulation to run.  We can't manipulate HTML elements that haven't loaded yet, so we need this "magic" function.  Everything that foes insdie is our javascrpt that runs when the page loads. 
window.addEventListener("load", function() {
  
  // console.log(window);

  // Document Object Model (DOM)
  // console.log(document);
  // We can select elements in javascript in the same way that we select them in css.  We use document selector methods to do so:
  // var headings = document.getElementsByTagName("h1");
  // document.getElementsByTageName selects elements based on their tag name-- it will always return a collection or array of elements 
  // var headings = document.getElementsByTagName("h1")
  // document.getElementsByID will select an element based on its ID-- it will always return a single value, not an array.

  var heading = document.getElementById("my-heading");
 // document.getElementsByCLassName always returns a collection and selects elements based on their classes

 var tasks = document.getElementsByClassName("task");
 console.log(tasks);

//   console.log(headings[0]);
  heading.innerHTML = "This is my new heading!";
  // heading.style.color = "Blue";


  heading.addEventListener("click", function(){
    heading.classList.toggle("big-blue-heading")

  });

  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i]

    task.addEventListener("click", function() {
      console.log(task);
;
    });
  }
  
});
    

var view = {
    displayClick: function(clicked) {
        var displayClick = document.getElementById('clickedButton');
        displayClick.innerHTML = '';
        
    }
}

var handlers = {
    twoSec: function() { setTimeout(function() {
        document.write("You clicked the button 2 seconds ago </br> <a href='index.html'>back</a> </br>");
    }, 2000)},
    
    fiveSec: function() { setTimeout(function() {
        document.write("You clicked the button 5 seconds ago </br> <a href='index.html'>back</a> </br>");
    }, 5000)},
    
    EightSec: function() { setTimeout(function() {
        document.write("You clicked the button 8 seconds ago </br> <a href='index.html'>back</a> </br>");
    }, 8000)},
    
    fire: function() { setTimeout(function() {
        document.write("Stop!! Drop!! Roll!! </br> <a href='index.html'>back</a> </br>");
    }, 200)}
}



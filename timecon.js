var useChoice = rightList.querySelectorAll("ul li");

useChoice.forEach(function(item) {
    item.onclick = function(e) {
        document.getElementById('output2').innerText = this.innerText;
    }
}); 

var useChoice = leftList.querySelectorAll("ul li");

useChoice.forEach(function(item) {
    item.onclick = function(e) {
        document.getElementById('output').innerText = this.innerText;
    }
});

var useChoice = ampmchoice.querySelectorAll("ul li");

useChoice.forEach(function(item) {
    item.onclick = function(e) {
        document.getElementById('output3').innerText = this.innerText;
    }
});

function getInput(){
    var inputValLeft = document.getElementById("hourInput").value;
    if (inputValLeft == 12) {inputValLeft = 0}
    var inputValRight = document.getElementById("minInput").value;
    var totalTime = 60*(parseInt(inputValLeft))+parseInt(inputValRight);
    var convertFrom = document.getElementById("output").innerHTML; 
    var convertTo = document.getElementById("output2").innerHTML;
    var ampmChoice = document.getElementById("output3").innerHTML;
    var convertedAmOrPm = ampmChoice;
    var leftCalcTime = 0;
    var rightCalcTime = 0;
    
    if (inputValLeft !== 0 && inputValLeft == ""|| inputValRight !== 0 && inputValRight == "" || convertTo == "" || convertFrom == "" || ampmChoice == "" ) {
        alert("Please fill in all of the required fields!")
    }

    if (convertFrom == convertTo) {
        leftCalcTime = inputValLeft;
        rightCalcTime = inputValRight;
    if (leftCalcTime == 0){leftCalcTime = 12;}
    if (rightCalcTime < 10) {rightCalcTime = "0" +rightCalcTime;}
    
    
    var T = document.getElementById("result"),
    displayValue = "";
    if (T.style.display == "")
    T.style.display = "none";

    T.style.display = displayValue;
    document.getElementById('resultTime').innerText = (leftCalcTime + ":" + rightCalcTime + " "+ convertedAmOrPm + " in " +convertTo);
    }


    if (convertFrom == "EST" && convertTo == "PST") {
        totalTime = totalTime - 180;
       
        if (totalTime < 0) {
            totalTime = totalTime + 720;
            
            if (inputValLeft == 0 && ampmChoice == "PM" || inputValLeft == 1 && ampmChoice == "PM" || inputValLeft == 2 && ampmChoice == "PM") {
                convertedAmOrPm = "AM"}
            
            else {convertedAmOrPm = "PM"}
        }

        else if (totalTime > 720) {
            totalTime = totalTime - 720;
            convertedAmOrPm = "AM"  
        }
        
        leftCalcTime = ((totalTime-(totalTime%60))/60);
        rightCalcTime = (totalTime%60) + " ";

        if (leftCalcTime == 0){leftCalcTime = 12;}
        if (rightCalcTime < 10) {rightCalcTime = "0" +rightCalcTime;}

    }

    if (convertFrom == "EST" && convertTo == "MST") {
        totalTime = totalTime - 120;
       
        if (totalTime < 0) {
            totalTime = totalTime + 720;
            
            if (inputValLeft == 0 && ampmChoice == "PM" || inputValLeft == 1 && ampmChoice == "PM") {
                convertedAmOrPm = "AM"}
            
            else {convertedAmOrPm = "PM"}
        }

        else if (totalTime > 720) {
            totalTime = totalTime - 720;
            convertedAmOrPm = "AM"  
        }
        
        leftCalcTime = ((totalTime-(totalTime%60))/60);
        rightCalcTime = (totalTime%60) + " ";

        if (leftCalcTime == 0){leftCalcTime = 12;}
        if (rightCalcTime < 10) {rightCalcTime = "0" +rightCalcTime;}

    }

    if (convertFrom == "EST" && convertTo == "UTC") {
        totalTime = totalTime + 240;
       
        if (totalTime < 0) {
            totalTime = totalTime + 720;
            
            convertedAmOrPm = "PM"
        }

        else if (totalTime > 720) {
            totalTime = totalTime - 720;

            if (inputValLeft == 8 && ampmChoice == "AM" || inputValLeft == 9 && ampmChoice == "AM" || inputValLeft == 10 && ampmChoice == "AM" || inputValLeft == 11 && ampmChoice == "AM") {
                convertedAmOrPm = "PM"}
            
            else {convertedAmOrPm = "AM"} 
        }

        else if (totalTime == 720 && ampmChoice == "AM") {convertedAmOrPm = "PM"}
        else if (totalTime == 720 && ampmChoice == "PM") {convertedAmOrPm = "AM"}
        
        leftCalcTime = ((totalTime-(totalTime%60))/60);
        rightCalcTime = (totalTime%60) + " ";

        if (leftCalcTime == 0){leftCalcTime = 12;}
        if (rightCalcTime < 10) {rightCalcTime = "0" +rightCalcTime;}

    }

    if (convertFrom == "PST" && convertTo == "EST") {
        totalTime = totalTime + 180;
       
        if (totalTime < 0) {
            totalTime = totalTime + 720;
            
            convertedAmOrPm = "PM"
        }

        else if (totalTime > 720) {
            totalTime = totalTime - 720;

            if (inputValLeft == 9 && ampmChoice == "AM" || inputValLeft == 10 && ampmChoice == "AM" || inputValLeft == 11 && ampmChoice == "AM") {
                convertedAmOrPm = "PM"}
            
            else {convertedAmOrPm = "AM"} 
        }
        
        else if (totalTime == 720 && ampmChoice == "AM") {convertedAmOrPm = "PM"}
        else if (totalTime == 720 && ampmChoice == "PM") {convertedAmOrPm = "AM"}
        
        leftCalcTime = ((totalTime-(totalTime%60))/60);
        rightCalcTime = (totalTime%60) + " ";

        if (leftCalcTime == 0){leftCalcTime = 12;}
        if (rightCalcTime < 10) {rightCalcTime = "0" +rightCalcTime;}

    }

    if (convertFrom == "PST" && convertTo == "MST") {
        totalTime = totalTime + 60;
       
        if (totalTime < 0) {
            totalTime = totalTime + 720;
            
            convertedAmOrPm = "PM"
        }

        else if (totalTime > 720) {
            totalTime = totalTime - 720;

            if (inputValLeft == 11 && ampmChoice == "AM") {
                convertedAmOrPm = "PM"}
            
            else {convertedAmOrPm = "AM"} 
        }
        
        else if (totalTime == 720 && ampmChoice == "AM") {convertedAmOrPm = "PM"}
        else if (totalTime == 720 && ampmChoice == "PM") {convertedAmOrPm = "AM"}
        
        leftCalcTime = ((totalTime-(totalTime%60))/60);
        rightCalcTime = (totalTime%60) + " ";

        if (leftCalcTime == 0){leftCalcTime = 12;}
        if (rightCalcTime < 10) {rightCalcTime = "0" +rightCalcTime;}

    }

    if (convertFrom == "PST" && convertTo == "UTC") {
        totalTime = totalTime + 420;
       
        if (totalTime < 0) {
            totalTime = totalTime + 720;
            
            convertedAmOrPm = "PM"
        }

        else if (totalTime > 720) {
            totalTime = totalTime - 720;

            if (inputValLeft == 5 && ampmChoice == "AM" || inputValLeft == 6 && ampmChoice == "AM" || inputValLeft == 7 && ampmChoice == "AM" || inputValLeft == 8 && ampmChoice == "AM" || inputValLeft == 9 && ampmChoice == "AM" || inputValLeft == 10 && ampmChoice == "AM" || inputValLeft == 11 && ampmChoice == "AM") {
                convertedAmOrPm = "PM"}
            
            else {convertedAmOrPm = "AM"} 
        }
        
        else if (totalTime == 720 && ampmChoice == "AM") {convertedAmOrPm = "PM"}
        else if (totalTime == 720 && ampmChoice == "PM") {convertedAmOrPm = "AM"}
        
        leftCalcTime = ((totalTime-(totalTime%60))/60);
        rightCalcTime = (totalTime%60) + " ";

        if (leftCalcTime == 0){leftCalcTime = 12;}
        if (rightCalcTime < 10) {rightCalcTime = "0" +rightCalcTime;}

    }

    if (convertFrom == "MST" && convertTo == "EST") {
        totalTime = totalTime + 120;
       
        if (totalTime < 0) {
            totalTime = totalTime + 720;
            
            convertedAmOrPm = "PM"
        }

        else if (totalTime > 720) {
            totalTime = totalTime - 720;

            if (inputValLeft == 10 && ampmChoice == "AM" || inputValLeft == 11 && ampmChoice == "AM") {
                convertedAmOrPm = "PM"}
            
            else {convertedAmOrPm = "AM"} 
        }
        
        else if (totalTime == 720 && ampmChoice == "AM") {convertedAmOrPm = "PM"}
        else if (totalTime == 720 && ampmChoice == "PM") {convertedAmOrPm = "AM"}
        
        leftCalcTime = ((totalTime-(totalTime%60))/60);
        rightCalcTime = (totalTime%60) + " ";

        if (leftCalcTime == 0){leftCalcTime = 12;}
        if (rightCalcTime < 10) {rightCalcTime = "0" +rightCalcTime;}

    }

    if (convertFrom == "MST" && convertTo == "PST") {
        totalTime = totalTime - 60;
       
        if (totalTime < 0) {
            totalTime = totalTime + 720;
            
            if (inputValLeft == 0 && ampmChoice == "PM") {
                convertedAmOrPm = "AM"}
            
            else {convertedAmOrPm = "PM"}
        }

        else if (totalTime > 720) {
            totalTime = totalTime - 720;
            convertedAmOrPm = "AM"  
        }
        
        leftCalcTime = ((totalTime-(totalTime%60))/60);
        rightCalcTime = (totalTime%60) + " ";

        if (leftCalcTime == 0){leftCalcTime = 12;}
        if (rightCalcTime < 10) {rightCalcTime = "0" +rightCalcTime;}

    }

    if (convertFrom == "MST" && convertTo == "UTC") {
        totalTime = totalTime + 360;
       
        if (totalTime < 0) {
            totalTime = totalTime + 720;
            
            convertedAmOrPm = "PM"
        }

        else if (totalTime > 720) {
            totalTime = totalTime - 720;

            if (inputValLeft == 6 && ampmChoice == "AM" || inputValLeft == 7 && ampmChoice == "AM" || inputValLeft == 8 && ampmChoice == "AM" || inputValLeft == 9 && ampmChoice == "AM" || inputValLeft == 10 && ampmChoice == "AM" || inputValLeft == 11 && ampmChoice == "AM") {
                convertedAmOrPm = "PM"}
            
            else {convertedAmOrPm = "AM"} 
        }
        
        else if (totalTime == 720 && ampmChoice == "AM") {convertedAmOrPm = "PM"}
        else if (totalTime == 720 && ampmChoice == "PM") {convertedAmOrPm = "AM"}
        
        leftCalcTime = ((totalTime-(totalTime%60))/60);
        rightCalcTime = (totalTime%60) + " ";

        if (leftCalcTime == 0){leftCalcTime = 12;}
        if (rightCalcTime < 10) {rightCalcTime = "0" +rightCalcTime;}

    }

    if (convertFrom == "UTC" && convertTo == "EST") {
        totalTime = totalTime - 240;
       
        if (totalTime < 0) {
            totalTime = totalTime + 720;
            
            if (inputValLeft == 0 && ampmChoice == "PM" || inputValLeft == 1 && ampmChoice == "PM" || inputValLeft == 2 && ampmChoice == "PM" || inputValLeft == 3 && ampmChoice == "PM") {
                convertedAmOrPm = "AM"}
            
            else {convertedAmOrPm = "PM"}
        }

        else if (totalTime > 720) {
            totalTime = totalTime - 720;
            convertedAmOrPm = "AM"  
        }
        
        leftCalcTime = ((totalTime-(totalTime%60))/60);
        rightCalcTime = (totalTime%60) + " ";

        if (leftCalcTime == 0){leftCalcTime = 12;}
        if (rightCalcTime < 10) {rightCalcTime = "0" +rightCalcTime;}
    }

    if (convertFrom == "UTC" && convertTo == "PST") {
        totalTime = totalTime - 420;
       
        if (totalTime < 0) {
            totalTime = totalTime + 720;
            
            if (inputValLeft == 0 && ampmChoice == "PM" || inputValLeft == 1 && ampmChoice == "PM" || inputValLeft == 2 && ampmChoice == "PM" || inputValLeft == 3 && ampmChoice == "PM" || inputValLeft == 4 && ampmChoice == "PM" || inputValLeft == 5 && ampmChoice == "PM" || inputValLeft == 6 && ampmChoice == "PM") {
                convertedAmOrPm = "AM"}
            
            else {convertedAmOrPm = "PM"}
        }

        else if (totalTime > 720) {
            totalTime = totalTime - 720;
            convertedAmOrPm = "AM"  
        }
        
        leftCalcTime = ((totalTime-(totalTime%60))/60);
        rightCalcTime = (totalTime%60) + " ";

        if (leftCalcTime == 0){leftCalcTime = 12;}
        if (rightCalcTime < 10) {rightCalcTime = "0" +rightCalcTime;}
    }

    if (convertFrom == "UTC" && convertTo == "MST") {
        totalTime = totalTime - 360;
       
        if (totalTime < 0) {
            totalTime = totalTime + 720;
            
            if (inputValLeft == 0 && ampmChoice == "PM" || inputValLeft == 1 && ampmChoice == "PM" || inputValLeft == 2 && ampmChoice == "PM" || inputValLeft == 3 && ampmChoice == "PM" || inputValLeft == 4 && ampmChoice == "PM" || inputValLeft == 5 && ampmChoice == "PM") {
                convertedAmOrPm = "AM"}
            
            else {convertedAmOrPm = "PM"}
        }

        else if (totalTime > 720) {
            totalTime = totalTime - 720;
            convertedAmOrPm = "AM"  
        }
        
        leftCalcTime = ((totalTime-(totalTime%60))/60);
        rightCalcTime = (totalTime%60) + " ";

        if (leftCalcTime == 0){leftCalcTime = 12;}
        if (rightCalcTime < 10) {rightCalcTime = "0" +rightCalcTime;}

    }

    var T = document.getElementById("result"),
    displayValue = "";
    if (T.style.display == "")
    T.style.display = "none";

    T.style.display = displayValue;
    document.getElementById('resultTime').innerText = (leftCalcTime + ":" + rightCalcTime + " "+ convertedAmOrPm + " in " +convertTo);
}

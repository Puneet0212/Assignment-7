/*eslint-env browser*/

//STEP 1
function displayMessage() {
    "use strict";
    window.alert("I have been clicked.");
}


function init() {
    "use strict";

//STEP 2
    var stepTwoButton = window.document.getElementById("stepTwoButton");
    stepTwoButton.onclick = function() {
        window.alert("I have been clicked.");
    }


//STEP 3
    var stepThreeButton = window.document.getElementById("stepThreeButton");
    function userDefinedFunction() {
        window.alert("I have been clicked.");
    }
    stepThreeButton.addEventListener("click", userDefinedFunction);



//STEP 4
    var stepFourButton = window.document.getElementById("stepFourButton");
    stepFourButton.addEventListener("click", function () {
        window.alert("I have been clicked.");
    });


//STEP 5
    stepFourButton.addEventListener("click", function () {
        window.alert("I have been clicked.");
    });

}
window.addEventListener("load", init);
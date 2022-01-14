$(document).ready(function() {
    
    var inputCheck = $('.checkedColour');


// Attempt 1
// for (i = 0; i < inputCheck.length; i++) {        
//     inputCheck[i].click(function() {
//         inputCheck[i].parentElement.
//         alert("checked");
//     });
// }

    

// Checked Colour Change

// Attempt 2
// for (i = 0; i < btnCheck.length; i++) {
//     for (a = 0; a < inputCheck.length; a++) {
//         inputCheck.addEventListener("click", function(event) {
//             if (inputCheck[a].checked == true) {
//             btnCheck[i].css("background-color: #CF62F0")
//             }
//         }  
//     }
// }
// if(document.getElementsByClassName('checkedColour').checked) {        
// }

    
// Submit Form
document.getElementById("submit").addEventListener("click", function(event){
    var nameField = document.getElementById('name').value;
    alert("Thank you " + nameField + ", your order has been received!");
});

}); //End DOM Ready
$(document).ready(function() {

    // Bun Options
    $('.bunOptions').change(function(){
        checkSelection($('.bunsImages'), $('.bunOptions:checked'));
    });

    // Patty Options
    $('.pattyOptions').change(function(){
        checkSelection($('.pattyImages'), $('.pattyOptions:checked'));
    });

    // Cheese Options
    $('.cheeseOptions').change(function(){
        checkSelection($('.cheeseImages'), $('.cheeseOptions:checked'));
    });

    var checkSelection = function (imgClass, optionClassChecked) {
        $(imgClass).addClass('d-none');
        console.log($(optionClassChecked).attr('data-id'));
        var selected = $(optionClassChecked).attr('data-id');
        console.log(selected);
        $('#img' + selected).removeClass('d-none');
    }

    // Extras Checkboxes
    $('.extrasOptions').click(function () {
        $('.extraImages').addClass('d-none');
        var allSelected = [];
        $.each($('.extrasOptions'), function() {
            if ($(this).is(':checked')) {
                var selected = $(this).attr('data-id');
                $('#img' + selected).removeClass('d-none');
            }
        })
    });






















// ============ PREV ========================

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
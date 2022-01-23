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

    // Extras Checkboxes ()
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

    
// === Submit Form ===
$('#btnSubmitForm').click(function(e){
    e.preventDefault();
    var error = false;
    $('#sectionForm input').removeClass('is-invalid');
    $('#sectionForm select').removeClass('is-invalid');
    $('#sectionForm input').removeClass('is-valid');
    $('#sectionForm select').removeClass('is-valid');

    // Name
    if ($('#txtName').val() == '' || $('#txtName').val() == null) {
        error = true;
        $('#txtName').addClass('is-invalid');
    } else {
        $('#txtName').addClass('is-valid');
    }

    // Email
    if ($('#txtEmail').val() == '' || $('#txtEmail').val() == null) {
        error == true;
        $('#errorEmail').text('Please enter your email.');
        $('#txtEmail').addClass('is-invalid');
    } else if ($('#txtEmail').val() != '' && $('#txtEmail').val() != null) {
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        var data = $('#txtEmail').val();
        var runner = regex.test(data);

        if (!runner) {
            error = true;
            $('#errorEmail').text('Please enter a valid email.');
            $('#txtEmail').addClass('is-invalid');
        } else if (runner) {
            $('#txtEmail').addClass('is-valid');
        }
    }

    // Quantity
    if ($('#txtQuantity').val() == '' || $('#txtQuantity').val() == null) {
        error = true;
        $('#txtQuantity').addClass('is-invalid');
    } else {
        $('#txtQuantity').addClass('is-valid');
    }

    // Receive Droplist
    if ($('#ddlReceiveType').val() == '' || $('#ddlReceiveType').val() == null) {
        error = true;
        $('#ddlReceiveType').addClass('is-invalid');
    } else {
        $('#ddlReceiveType').addClass('is-valid');
    }

    if (error) {
        return
    } else if (!error) {
        $('#inputNameEntered').text($('#txtName').val());
        $('#modalOrderSubmitted').modal('show');
    }
});

$('#btnCloseModal').on('click', function(){
    window.location.reload();
});


}); //End DOM Ready
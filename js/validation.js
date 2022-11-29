// Name: Aria Siriouthay
// Assignment: HW4
// validation.js
// help: help websites such as w3 schools, geeksforgeeks,
// stackoverflow, jquery doc. for help on jquery.
// Supplied assignment readings. 

//additional methods to ensure min values are not greater than max
$.validator.addMethod("minY_lessthan_maxY", function(value, element){
    return parseInt($("#inputMinY").val()) <= parseInt($("#inputMaxY").val())
}, "Please ensure that the minimum value for Y is given, and that the minimum is not greater than the maximum.");
$.validator.addMethod("minX_lessthan_maxX", function(value, element){
    return parseInt($("#inputMinX").val()) <= parseInt($("#inputMaxX").val())
}, "Please ensure that the minimum value for X is given, and that the minimum is not greater than the maximum.");
//https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.5/additional-methods.js
//method to only accept neg/pos integers (no decimals)
$.validator.addMethod( "integer", function( value, element ) {
	return this.optional( element ) || /^-?\d+$/.test( value );
}, "Please enter a positive or negative non-decimal number." );
$(document).ready(function(){
    $("#form").validate({
        //validation rules input must follow, and corresponding messages to flag errors
        rules: {
            inputMinY:{
                integer:true
            },
            inputMinX:{
                integer:true
            },
            inputMaxY:{
                minY_lessthan_maxY: true,
                integer:true
            },
            inputMaxX:{
                minX_lessthan_maxX: true,
                integer:true
            }
        },
        messages: {
            inputMinY: {
                required: "Please enter a number.",
            },
            inputMaxY: {
                required: "Please enter a number.",
            },
            inputMinX: {
                required: "Please enter a number.",
            },
            inputMaxX: {
                required: "Please enter a number.",
            }
           
        }
    });
    //when save button is clicked check if form is valid & set bool to true to create new tab to save table to
    $("#saveBtn").click(function(){
        if($("#form").valid()){
            createTable(true);
        }
    });
    //to dynamically update table on text change for given input fields
    //bool is false so it will only display to main section
    $("#inputMinY").change(function(){
        if($("#form").valid()){
            createTable(false);
        }
    });
    $("#inputMaxY").change(function(){
        if($("#form").valid()){
            createTable(false);
        }
    });
    $("#inputMinX").change(function(){
        if($("#form").valid()){
            createTable(false);
        }
    });
    $("#inputMaxX").change(function(){
        if($("#form").valid()){
            createTable(false);
        }
    });
});

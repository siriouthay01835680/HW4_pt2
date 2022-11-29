// Name: Aria Siriouthay
// Assignment: HW4
// mySlider.js
// help: help websites such as w3 schools, geeksforgeeks,
// stackoverflow, jquery doc. for help on jquery.
// Supplied assignment readings. 
$(document).ready(function(){
    //initialization of y-slider
    $("#y-slider").slider({
        min: -50,
        max: 50,
        values: [-50, 50],
        range: true,
        create: function(){
            //initialize handles with default values (-50,50)
            $("#y-min").text($(this).slider("values")[0]);
            $("#y-max").text($(this).slider("values")[1]);
        },
        //https://stackoverflow.com/questions/9480039/jquery-ui-slider-with-two-handles-with-input-from-two-text-box
        //on slide, the ui values will be saved to the handles & to the text fields
        slide: function(event, ui){
            var val1 = ui.values[0];
            var val2 = ui.values[1];
            $("#y-min").text(val1); //save UI values to the handles
            $("#y-max").text(val2);
            $("input.sliderVal[data-index=" + 0 + "]").val(ui.values[0]); //update text fields with UI values
            $("input.sliderVal[data-index=" + 1 + "]").val(ui.values[1]);
            //if slide changes are valid, update table dynamically
            if($("#form").valid()){
                createTable(false);
            }
        }
    });
    // on text change update slider & its handles as well
    $("#inputMinY").change(function(){
        $("#y-slider").slider("values", $(this).data("index"), $(this).val());
        $("#y-min").text($(this).val());
    });
    $("#inputMaxY").change(function(){
        $("#y-slider").slider("values", $(this).data("index"), $(this).val());
        $("#y-max").text($(this).val());
    });
    //code for x-slider, same as above.
    $("#x-slider").slider({
        min: -50,
        max: 50,
        values: [-50, 50],
        range: true,
        create: function(){
            $("#x-min").text($(this).slider("values")[0]);
            $("#x-max").text($(this).slider("values")[1]);
        },
        slide: function(event, ui){
            var val1 = ui.values[0];
            var val2 = ui.values[1];
            $("#x-min").text(val1);
            $("#x-max").text(val2);
            $("input.sliderVal2[data-index=" + 0 + "]").val(ui.values[0]);
            $("input.sliderVal2[data-index=" + 1 + "]").val(ui.values[1]);
            if($("#form").valid()){
                createTable(false);
            }
        }
    });
    $("#inputMinX").change(function(){
        $("#x-slider").slider("values",$(this).data("index"), $(this).val());
        $("#x-min").text($(this).val());

    });
    $("#inputMaxX").change(function(){
        $("#x-slider").slider("values", $(this).data("index"), $(this).val());
        $("#x-max").text($(this).val());
    });
});
function createTable(createTab){
    //creating table by getting html table id and 
    //using temp table var to append html to edit
    //doc
    var minY = parseInt($("#inputMinY").val());
    var maxY = parseInt($("#inputMaxY").val());
    var minX = parseInt($("#inputMinX").val());
    var maxX = parseInt($("#inputMaxX").val());
    var mtable = document.getElementById('displayTable');
    var table = '';
    table += '<tr>';
    table += '<td></td>';
    //iterating through input y values to make column header
    for (var j = minY; j <= maxY; j++) {
        table += '<th scope = "col">' + j + '</th>';
    }
    table += '</tr>';
    //iterating through input x values to make row header
    //and to also create table data via nested loop,
    //multiplying each index
    for (var i = minX; i <= maxX; i++) {
        table += '<tr>';
        table += '<th scope = "row">' + i + '</th>';
        for (var j = minY; j <= maxY; j++) {
            table += '<td>' + (i * j) + '</td>';
        }
        table += '</tr>';
    }
    //createTab will be true only when save button is clicked
    if(createTab){
        // display the tab delete button & create new tab
        document.getElementById("deleteBtn").style.display="block";
        addTab(table, minY, maxY, minX, maxX);
    }
    else{
        mtable.innerHTML = table;
    }
}
//function to add tab
//https://stackoverflow.com/questions/14702631/in-jquery-ui-1-9-how-do-you-create-new-tabs-dynamically
function addTab(table, minY, maxY, minX, maxX){
    var totalTabs = $("#myTabs ul li").length + 1; //keep track of number of tabs for indexing/naming purposes
    //creating labelled tab panel with checkbox
    $("#myTabs ul").append("<li><a href='#tab" + totalTabs + "'>" + "Y:[" + minY + ", " +  maxY + "]" + " X:[" + minX + ", " + maxX + "]" + "</a>" + "<input type='checkbox' name='tab"+totalTabs+"'>" +"</li>");
    $("#myTabs").append("<table id='tab" + totalTabs + "'>" + table + "</table>"); //setting table as tab content
    $("#myTabs").tabs("refresh"); //refresh to reflect changes
}
 
// Name: Aria Siriouthay
// Assignment: HW4
// myTabs.js
// help: help websites such as w3 schools, geeksforgeeks,
// stackoverflow, jquery doc. for help on jquery.
// Supplied assignment readings. 
$(document).ready(function(){
    $("#myTabs").tabs();
    var arr= []; //to hold tabIDs

    //https://jqueryui.com/tabs/#manipulation
    //on delete button click all selected tabs will be deleted.
    $("#deleteBtn").click(function(){
        for(var i = 0; i < arr.length; i++){
            var tabID = arr[i];
            var hrefStr = "a[href='#" + tabID + "']"; //remove tab
            $(hrefStr).closest("li").remove();
            $("#"+tabID).remove();  //remove panel
            $("#myTabs").tabs("refresh"); //refresh tabs to reflect changes
        }
        arr = []; //reset array to clear deleted tabIDs 
        if(parseInt($("#myTabs ul li").length) == 0){ //if there are no more tabs, hide delete button
            document.getElementById("deleteBtn").style.display="none";
        }
    });

    //when checkbox of tab is clicked, add its name (which corresponds to the tabID) to an array for deletion
    $("#myTabs ul").on("click", "input[type='checkbox']", function(event){
        var tabID = event.target.name;
        if(this.checked){
            arr.push(tabID);
        }
        else{ //to make sure if a checkbox is clicked then unclicked the tab is not deleted.
            const index = arr.indexOf(tabID);
            if(index > -1){
                arr.splice(index, 1); //remove tabID from arr if found
            }
        }
    });
});
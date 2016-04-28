 /*
Author: Tristan Denyer (based on Charlie Griefer's original clone code, and some great help from Dan - see his comments in blog post)
Plugin repo: https://github.com/tristandenyer/Clone-section-of-form-using-jQuery
Demo at http://tristandenyer.com/using-jquery-to-duplicate-a-section-of-a-form-maintaining-accessibility/
Ver: 0.9.4.1
Last updated: Sep 24, 2014

The MIT License (MIT)

Copyright (c) 2011 Tristan Denyer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
$(function () {
    $('#btnAdd').click(function () {
        var num     = $('.clonedInput').length, // Checks to see how many "duplicatable" input fields we currently have
            newNum  = new Number(num + 1),      // The numeric ID of the new input field being added, increasing by 1 each time
            newElem = $('#CloneRow' + num).clone().attr({'id': 'CloneRow' + newNum}).addClass('addedRow').fadeIn('slow'); // create the new element via clone(), and manipulate it's ID using newNum value

    /*  This is where we manipulate the name/id values of the input inside the new, cloned element
        Below are examples of what forms elements you can clone, but not the only ones.
        There are 2 basic structures below: one for an H2, and one for form elements.
        To make more, you can copy the one for form elements and simply update the classes for its label and input.
        Keep in mind that the .val() method is what clears the element when it gets cloned. Radio and checkboxes need .val([]) instead of .val('').
    */
        // Hour - select
        newElem.find('.input_hr').attr('id', 'ID' + newNum + '_hour').attr('name', 'ID' + newNum + '_hour').val('0');

        // Minute - select
        newElem.find('.input_min').attr('id', 'ID' + newNum + '_min').attr('name', 'ID' + newNum + '_min').val('0');

        // Activiy - text
        newElem.find('.input_act').attr('id', 'ID' + newNum + '_act').attr('name', 'ID' + newNum + '_act').val('');

        // Category - select
        newElem.find('.input_cat').attr('id', 'ID' + newNum + '_cat').attr('name', 'ID' + newNum + '_cat').val('');

    // Insert the new element after the last "duplicatable" input field
        $('#CloneRow' + num).after(newElem);
        $('#ID' + newNum + '_title').focus();

    // Enable the "remove" button. This only shows once you have a duplicated section.
        $('#btnDel').attr('disabled', false);

    // Right now you can only add 13 sections, for a total of 15. Change '13' below to the max number of sections you want to allow.
        if (newNum == 13)
        $('#btnAdd').attr('disabled', true).prop('value', "That's all, folks!"); // value here updates the text in the 'add' button when the limit is reached
    });

    $('#btnDel').click(function () {
    // Confirmation dialog box. Works on all desktop browsers and iPhone.
        // if (confirm("Are you sure you wish to remove this section? This cannot be undone."))
            {
                var num = $('.clonedInput').length;
                // how many "duplicatable" input fields we currently have
                $('#CloneRow' + num).slideUp('slow', function () {$(this).remove();
                // if only one element remains, disable the "remove" button
                    if (num -1 === 1)
                $('#btnDel').attr('disabled', true);
                // enable the "add" button
                $('#btnAdd').attr('disabled', false).prop('value', "add section");});
            }
        return false; // Removes the last section you added
    });
    // Enable the "add" button
    $('#btnAdd').attr('disabled', false);
    // Disable the "remove" button
    $('#btnDel').attr('disabled', true);
    // Reset the entire form
    $('#btnRes').click( function () {
    
    // Confirmation dialog box. Works on all desktop browsers and iPhone.
        if (confirm("Do you really want to reset the form? All data will be lost."))
            {
                 document.getElementById("BudgetFormEng").reset();
                 $('.addedRow').remove();
                 $('#output').empty();
                 
                              }
        return false;
    });



// Code not by tristan denyer follows




    $('#btnCalc').click(function() {

   // Data Structure     

category_hours = {
    Class: [],
    Entertainment: [],
    Exercise: [],
    Extracurricular: [],
    Family: [],
    Meal: [],
    Personal: [],
    Sleep: [],
    Social: [],
    Study: [],
    Work: [],
    Other: []
         };

        var hours = $(".input_hr");
        var minutes = $(".input_min");
        var categories = $(".input_cat");

// For loop that runs through all of the categories that are submitted.  The "if" statements sort the entries and push them to the correct array

        for(var i=0;i<categories.length;i++){
            if (categories[i].value === "Class") {
                category_hours.Class.push({hour:hours[i].value,minute:minutes[i].value});//add object literal 
                
            }
            if (categories[i].value === "Entertainment") {
                category_hours.Entertainment.push({hour:hours[i].value,minute:minutes[i].value});//add object literal
                
            }
            if (categories[i].value === "Exercise") {
                category_hours.Exercise.push({hour:hours[i].value,minute:minutes[i].value});//add object literal
                
            }
            if (categories[i].value === "Extracurricular") {
                category_hours.Extracurricular.push({hour:hours[i].value,minute:minutes[i].value});//add object literal
               
            }
            if (categories[i].value === "Family") {
                category_hours.Family.push({hour:hours[i].value,minute:minutes[i].value});//add object literal
                
            }
            if (categories[i].value === "Meal") {
                category_hours.Meal.push({hour:hours[i].value,minute:minutes[i].value});//add object literal
                
            }
            if (categories[i].value === "Other") {
                category_hours.Other.push({hour:hours[i].value,minute:minutes[i].value});//add object literal
               
            }
            if (categories[i].value === "Personal") {
                category_hours.Personal.push({hour:hours[i].value,minute:minutes[i].value});//add object literal
                
            }
            if (categories[i].value === "Sleep") {
                category_hours.Sleep.push({hour:hours[i].value,minute:minutes[i].value});//add object literal
                
            }
            if (categories[i].value === "Social") {
                category_hours.Social.push({hour:hours[i].value,minute:minutes[i].value});//add object literal
                
            }
            if (categories[i].value === "Study") {
                category_hours.Study.push({hour:hours[i].value,minute:minutes[i].value});//add object literal
                
            }
            if (categories[i].value === "Work") {
                category_hours.Work.push({hour:hours[i].value,minute:minutes[i].value});//add object literal
                
            }
           
        }
$('#modalBody').empty();
if (category_hours.Class[0])
{
    $('#modalTable > tbody:last-child').append('<tr><td id=classHr></td><td id=classMin></td><td id=classCell></td></tr>');
    $('#classCell').append('Class');
};
if (category_hours.Entertainment[0])
{
    $('#modalTable > tbody:last-child').append('<tr><td id=entHr></td><td id=entMin></td><td id=entCell></td></tr>');
    $('#entCell').append('Entertainment');
};
if (category_hours.Exercise[0])
{
    $('#modalTable > tbody:last-child').append('<tr><td id=exerHr></td><td id=exerMin></td><td id=exerCell></td></tr>');
    $('#exerCell').append('Exercise');
};
if (category_hours.Extracurricular[0])
{
    $('#modalTable > tbody:last-child').append('<tr><td id=extraHr></td><td id=extraMin></td><td id=extraCell></td></tr>');
    $('#extraCell').append('Extracurricular');
};
if (category_hours.Family[0])
{
    $('#modalTable > tbody:last-child').append('<tr><td id=familyHr></td><td id=familyMin></td><td id=familyCell></td></tr>');
    $('#familyCell').append('Family');
};
if (category_hours.Meal[0])
{
    $('#modalTable > tbody:last-child').append('<tr><td id=mealHr></td><td id=mealMin></td><td id=mealCell></td></tr>');
    $('#mealCell').append('Meal');
};
if (category_hours.Other[0])
{
    $('#modalTable > tbody:last-child').append('<tr><td id=otherHr></td><td id=otherMin></td><td id=otherCell></td></tr>');
    $('#otherCell').append('Other');
};
if (category_hours.Personal[0])
{
    $('#modalTable > tbody:last-child').append('<tr><td id=personHr></td><td id=personMin></td><td id=personCell></td></tr>');
    $('#personCell').append('Personal');
};
if (category_hours.Sleep[0])
{
    $('#modalTable > tbody:last-child').append('<tr><td id=sleepHr></td><td id=sleepMin></td><td id=sleepCell></td></tr>');
    $('#sleepCell').append('Sleep');
};
if (category_hours.Social[0])
{
    $('#modalTable > tbody:last-child').append('<tr><td id=socialHr></td><td id=socialMin></td><td id=socialCell></td></tr>');
    $('#socialCell').append('Social');
};
if (category_hours.Study[0])
{
    $('#modalTable > tbody:last-child').append('<tr><td id=studyHr></td><td id=studyMin></td><td id=studyCell></td></tr>');
    $('#studyCell').append('Study');
};
if (category_hours.Work[0])
{
    $('#modalTable > tbody:last-child').append('<tr><td id=workHr></td><td id=workMin></td><td id=workCell></td></tr>');
    $('#workCell').append('Work');
};






// From here down is the 12 individual loops that will add hours and minutes to the printable data.  I am fairly certain there is a MUCH better way to accomplish this.


// Class loop
 var timeLoop = category_hours.Class.length;
 var totalHours = 0;
 var totalMins = 0;
 for ( i=0; i<timeLoop; i++)
 { 
    totalHours += parseInt(category_hours.Class[i].hour) * 60;
    console.log(totalHours);
    totalMins += parseInt(category_hours.Class[i].minute);
 }
var totalTime = totalHours + totalMins;
var realMin = totalTime % 60;
var realHour = Math.floor(totalTime / 60);
// Clears the TD's of previously appended data
$('#classHr').empty();
$('#classMin').empty(); 
$('#classHr').append(realHour);
$('#classMin').append(realMin);



// Entertainment loop
var timeLoop = category_hours.Entertainment.length;
 var totalHours = 0;
 var totalMins = 0;
 for ( i=0; i<timeLoop; i++)
 { 
    totalHours += parseInt(category_hours.Entertainment[i].hour) * 60;
    console.log(totalHours);
    totalMins += parseInt(category_hours.Entertainment[i].minute);
 }
var totalTime = totalHours + totalMins;
var realMin = totalTime % 60;
var realHour = Math.floor(totalTime / 60);
// Clears the TD's of previously appended data
$('#entHr').empty();
$('#entMin').empty(); 
$('#entHr').append(realHour);
$('#entMin').append(realMin);

// Exercise loop
var timeLoop = category_hours.Exercise.length;
 var totalHours = 0;
 var totalMins = 0;
 for ( i=0; i<timeLoop; i++)
 { 
    totalHours += parseInt(category_hours.Exercise[i].hour) * 60;
    console.log(totalHours);
    totalMins += parseInt(category_hours.Exercise[i].minute);
 }
var totalTime = totalHours + totalMins;
var realMin = totalTime % 60;
var realHour = Math.floor(totalTime / 60);
// Clears the TD's of previously appended data
$('#exerHr').empty();
$('#exerMin').empty(); 
$('#exerHr').append(realHour);
$('#exerMin').append(realMin);

// Extracurricular loop
var timeLoop = category_hours.Extracurricular.length;
 var totalHours = 0;
 var totalMins = 0;
 for ( i=0; i<timeLoop; i++)
 { 
    totalHours += parseInt(category_hours.Extracurricular[i].hour) * 60;
    console.log(totalHours);
    totalMins += parseInt(category_hours.Extracurricular[i].minute);
 }
var totalTime = totalHours + totalMins;
var realMin = totalTime % 60;
var realHour = Math.floor(totalTime / 60);
// Clears the TD's of previously appended data
$('#extraHr').empty();
$('#extraMin').empty(); 
$('#extraHr').append(realHour);
$('#extraMin').append(realMin);

// Family loop
var timeLoop = category_hours.Family.length;
 var totalHours = 0;
 var totalMins = 0;
 for ( i=0; i<timeLoop; i++)
 { 
    totalHours += parseInt(category_hours.Family[i].hour) * 60;
    console.log(totalHours);
    totalMins += parseInt(category_hours.Family[i].minute);
 }
var totalTime = totalHours + totalMins;
var realMin = totalTime % 60;
var realHour = Math.floor(totalTime / 60);
// Clears the TD's of previously appended data
$('#familyHr').empty();
$('#familyMin').empty(); 
$('#familyHr').append(realHour);
$('#familyMin').append(realMin);

// Meal loop
var timeLoop = category_hours.Meal.length;
 var totalHours = 0;
 var totalMins = 0;
 for ( i=0; i<timeLoop; i++)
 { 
    totalHours += parseInt(category_hours.Meal[i].hour) * 60;
    console.log(totalHours);
    totalMins += parseInt(category_hours.Meal[i].minute);
 }
var totalTime = totalHours + totalMins;
var realMin = totalTime % 60;
var realHour = Math.floor(totalTime / 60);
// Clears the TD's of previously appended data
$('#mealHr').empty();
$('#mealMin').empty(); 
$('#mealHr').append(realHour);
$('#mealMin').append(realMin);

// Personal loop
var timeLoop = category_hours.Personal.length;
 var totalHours = 0;
 var totalMins = 0;
 for ( i=0; i<timeLoop; i++)
 { 
    totalHours += parseInt(category_hours.Personal[i].hour) * 60;
    console.log(totalHours);
    totalMins += parseInt(category_hours.Personal[i].minute);
 }
var totalTime = totalHours + totalMins;
var realMin = totalTime % 60;
var realHour = Math.floor(totalTime / 60);
// Clears the TD's of previously appended data
$('#personHr').empty();
$('#personMin').empty(); 
$('#personHr').append(realHour);
$('#personMin').append(realMin);


// Sleep loop
var timeLoop = category_hours.Sleep.length;
 var totalHours = 0;
 var totalMins = 0;
 for ( i=0; i<timeLoop; i++)
 { 
    totalHours += parseInt(category_hours.Sleep[i].hour) * 60;
    console.log(totalHours);
    totalMins += parseInt(category_hours.Sleep[i].minute);
 }
var totalTime = totalHours + totalMins;
var realMin = totalTime % 60;
var realHour = Math.floor(totalTime / 60);
// Clears the TD's of previously appended data
$('#sleepHr').empty();
$('#sleepMin').empty(); 
$('#sleepHr').append(realHour);
$('#sleepMin').append(realMin);


// Social loop
var timeLoop = category_hours.Social.length;
 var totalHours = 0;
 var totalMins = 0;
 for ( i=0; i<timeLoop; i++)
 { 
    totalHours += parseInt(category_hours.Social[i].hour) * 60;
    console.log(totalHours);
    totalMins += parseInt(category_hours.Social[i].minute);
 }
var totalTime = totalHours + totalMins;
var realMin = totalTime % 60;
var realHour = Math.floor(totalTime / 60);
// Clears the TD's of previously appended data
$('#socialHr').empty();
$('#socialMin').empty(); 
$('#socialHr').append(realHour);
$('#socialMin').append(realMin);


// Study loop
var timeLoop = category_hours.Study.length;
 var totalHours = 0;
 var totalMins = 0;
 for ( i=0; i<timeLoop; i++)
 { 
    totalHours += parseInt(category_hours.Study[i].hour) * 60;
    console.log(totalHours);
    totalMins += parseInt(category_hours.Study[i].minute);
 }
var totalTime = totalHours + totalMins;
var realMin = totalTime % 60;
var realHour = Math.floor(totalTime / 60);
// Clears the TD's of previously appended data
$('#studyHr').empty();
$('#studyMin').empty(); 
$('#studyHr').append(realHour);
$('#studyMin').append(realMin);


// Work loop
var timeLoop = category_hours.Work.length;
 var totalHours = 0;
 var totalMins = 0;
 for ( i=0; i<timeLoop; i++)
 { 
    totalHours += parseInt(category_hours.Work[i].hour) * 60;
    console.log(totalHours);
    totalMins += parseInt(category_hours.Work[i].minute);
 }
var totalTime = totalHours + totalMins;
var realMin = totalTime % 60;
var realHour = Math.floor(totalTime / 60);
// Clears the TD's of previously appended data
$('#workHr').empty();
$('#workMin').empty(); 
$('#workHr').append(realHour);
$('#workMin').append(realMin);


// Other loop
var timeLoop = category_hours.Other.length;
 var totalHours = 0;
 var totalMins = 0;
 for ( i=0; i<timeLoop; i++)
 { 
    totalHours += parseInt(category_hours.Other[i].hour) * 60;

    totalMins += parseInt(category_hours.Other[i].minute);
 }
var totalTime = totalHours + totalMins;
var realMin = totalTime % 60;
var realHour = Math.floor(totalTime / 60);
// Clears the TD's of previously appended data
$('#otherHr').empty();
$('#otherMin').empty(); 
$('#otherHr').append(realHour);
$('#otherMin').append(realMin);

// Clears the arrays after modal has been loaded.  Prevents duplicate hours/minutes from being counted again.
category_hours.Class = [];
category_hours.Entertainment = [];
category_hours.Exercise = [];
category_hours.Extracurricular = [];
category_hours.Family = [];
category_hours.Meal = [];
category_hours.Personal = [];
category_hours.Sleep = [];
category_hours.Social = [];
category_hours.Study = [];
category_hours.Work = [];
category_hours.Other = [];







       

    });

function printElement(elem, append, delimiter){
    var domClone = elem.cloneNode(true);

    var $printSection = document.getElementById("printSection");

    if (!$printSection) {
        $printSection = document.createElement("div");
        $printSection.id = "printSection";
        document.body.appendChild($printSection);
    }
    if (append !==true) {
        $printSection.innerHTML = "";
    }
    else if (append === true) {
        if (typeof (delimiter) === "string") {
            $printSection.innerHTML += delimiter;
        }
        else if (typeof (delimiter) === "object"){
            $printSection.appendChild(delimiter);
        }
    }
    $printSection.appendChild(domClone);
    };

document.getElementById("btnPrint").onclick = function () {
    printElement(document.getElementById("printThis"));
    
    
    
    window.print();
}

});

$(document).ready(function(){
//display the day
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").text(todayDate);

//save information to local storage
$('.saveBtn').on('click', function() {
    
})

//get information from local storage


//time indicator based on color (past,present,future)
function timeIndicator() {
    var currentTime = moment().hour();

    $('.time-block').each(function (){
        var hourBlock = parseInt($(this).attr('id').split('block'[1]));

        if (hourBlock < currentTime) {
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
        }
        else if (hourBlock === currentTime) {
            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');
        }
        else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    })
}
timeIndicator();

});

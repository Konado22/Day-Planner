 var evolve = setInterval( () =>{
    var now = moment().format('MMMM Do YYYY, h:mm:ss a')
    $('#currentDay').html("Today is : " + now)
    }, 1000);

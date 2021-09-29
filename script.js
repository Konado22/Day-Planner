var btn1 =$('#btn1')
var evolve = setInterval( () =>{
    var now = moment().format('MMMM Do YYYY, h:mm:ss a')
    $('#currentDay').html("Today is : " + now)
    }, 1000);
   $('#btn1').on('click', function (){
     var alerts = prompt("Please enter meeting information");
     $('#item1').text(alerts)
   })





















    // btn1.onclick= function () {
    //     $('#btn1').on( 'click', function(){
    //       // window.prompt("Please enter meeting information");
    //       var alerts = window.prompt("Please enter meeting information")
    //       $('#item1').text(alerts)
    //     })};
      
      // function myFunction() {
      //   $('item1').html(clickEL)
      // }
     
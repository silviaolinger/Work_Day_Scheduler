
const viewcurrentDay = document.querySelector('#currentDay');
const currentday= moment();
viewcurrentDay.textContent = currentday.format('LLL');
var currentHour = parseInt(moment().format("H"));
console.log(currentHour)


let timeBlock = $(".time-block").addClass('row');
let description= $('.description').addClass('description');

//Saving Event

    // On button click, get value
    
const savedevent= JSON.parse(localStorage.getItem('savedevent')) || [];
$(document).ready(function () {
    
    $(".saveBtn").click(function (event) {
        event.preventDefault()

        var currentRow=$(this).closest("tr"); 
         
         const data ={
          description: currentRow.find("td:eq(0) input[type='text']").val(),
           time: currentRow.find("th:eq(0)").html(),
        
        }
    
        savedevent.push(data)
        localStorage.setItem('savedevent',JSON.stringify(savedevent));
        
    });

});
//localStorage.clear();

$( window ).on( "load", function() {
   
     
    var events = JSON.parse(localStorage.getItem("savedevent"));
     $.each(events,function (i,val){
        var desc= $('<input desc="'+ val.description + '" />');
           $('.description').append(desc);

        // $('.description')= desc
     });
});
       
   
$(".table input[id]").each(function () {
    var $this = $(this);
    var id = parseInt($($this).attr("id") );
  
  if (id < currentHour){
  $(this).addClass("past");
  $(this).removeClass("present")
  $(this).removeClass("future")
  }
  
  if (id > currentHour){
  $(this).removeClass("past");
  $(this).removeClass("present")
  $(this).addClass("future")
  }
  
  else if(id === currentHour) {
  $(this).removeClass("past");
  $(this).addClass("present")
  $(this).removeClass("future")
  }
  
  
  });
  

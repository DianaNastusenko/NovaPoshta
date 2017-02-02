function validation () {
    //track number validation
  var trackNumb = $("[id='item_number']").val();
  var numbPattern =  /^[0-9]/;  
  if (!numbPattern.test(trackNumb)){
   alert('Waybill number must contain only numbers!');
   return false;   
  }
    
  var trackNumb = $("[id='item_number']").val();
  var numbPattern =  /^[0-9]{14}/;  
  if (!numbPattern.test(trackNumb)){
   alert('Waybill number must contain 14 numbers!');
   return false;   
  }
}


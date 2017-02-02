function validation () {
    //track number validation
  var trackNumb = $("[id='item_number']").val();
  var numbPattern =  /^[0-9]/;  
  if (!numbPattern.test(trackNumb)){
   alert('Tracker number must contain only numbers');
   return false;   
  }
}


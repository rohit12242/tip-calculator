var calculateButton = document.getElementById('calculate');

var calculateTip = function()
{
  var billAmt= document.getElementById('billamt').value ;
  var serviceIndex = document.getElementById('serviceQual').value;
  var peopleAmt = document.getElementById('peopleamt').value;
  if(billAmt ==="" || serviceIndex== 0)
  {
    alert("Please Enter Values");
    return;
  }
  if(peopleAmt==="" || peopleAmt<=1)
  {
    peopleAmt=1;
    document.getElementById('each').style.display = "none";
  }
  else {
    document.getElementById('each').style.display = "block";
  }
  var tip = (billAmt*serviceIndex)/peopleAmt;
  var tipAmt = document.getElementById('tip');
  document.getElementById('totalTip').style.display = "block";
  tipAmt.innerHTML = tip;

};
document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";
calculateButton.addEventListener('click',calculateTip);

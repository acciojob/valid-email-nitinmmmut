// function validEmail(str) {
  //your JS code here.
	function validEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
  //your JS code 
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));

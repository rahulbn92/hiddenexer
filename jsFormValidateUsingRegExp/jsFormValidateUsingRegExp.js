var formValid = new checkFormValidation('formBox');
// variable declarations using id
var form_fields = {
  emailId :                  document.getElementById("emailText"),
  homePageId:                document.getElementById("homePageText"), 
  aboutmeId:                 document.getElementById("aboutMeText"),
  inputValue :           document.getElementsByClassName('inputValue'),
  notificationCheckboxId:    document.getElementById("checkbox")
};
var emailRegExp = /^[a-z0-9_%.-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
var homePageRegExp = /^((https?|ftp|file)\:\/\/)?(www\.)?((\w+)(\.))?((\w+)\.([a-z]{2,4}))\/?(\w+\?\=\#\$\^)?/i;

// function for validating form_fields
function checkFormValidation(formBox) {
  this.formValidate = document.getElementById('formBox');
  this.checkInput = function(e) {    
    var flag=true;
    for(var i = 0 ; i < form_fields.inputValue.length ; i++) {
      if(form_fields.inputValue[i].value == "" || !form_fields.inputValue[i].value.trim() ) {
        alert("no " + form_fields.inputValue[i].id + " entered or spaces are used, please check the field");
        e.preventDefault();
        flag = false;
        return;
      }
    }
    if(form_fields.aboutmeId.value.length < 50 && flag == true)  {
      alert(" less than  50 characters, please check the field");
      e.preventDefault();
      return;
    }
    flag = regExpCheck(emailRegExp, form_fields.emailId, e);
    flag = regExpCheck(homePageRegExp , form_fields.homePageId, e);
    if(flag) {
      if( form_fields.notificationCheckboxId.checked == true) {
        alert( "you will receive notification" );
      }
      else if( form_fields.notificationCheckboxId.checked == false) {
        alert("you will not receive notification");
      }
    }
  }
  this.formValidate.addEventListener("submit" , this.checkInput);
}
// function for checking regexp
function regExpCheck(regExp , field , e) {
  if(regExp.test(field.value) == false ) {
    alert("invalid" + field.id);
    flag = false;
    e.preventDefault();
   return false;
  }
  else
  {
    return true; 
  }
}
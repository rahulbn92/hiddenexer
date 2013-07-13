var validUrl = new alertDomainSubdomainName('formValidate');
var urlRegExp =/^((https?|ftp|file)\:\/\/)?(www\.)?((\w+)(\.))?((\w+)\.([a-z]{2,4}))\/?(\w+\?\=\#\$\^)?/i;
// function for alerting domain and subdomain name
function alertDomainSubdomainName(formBox) {
  this.formValidate = document.getElementById('formBox');
  this.alertDomainSubdomain = function(e) {
    var inputUrl = document.getElementById('inputUrl');
    if (urlRegExp.test(inputUrl.value)) {
      var domain = RegExp.$8;
      var subdomain = RegExp.$5;
      if(subdomain == "") {
        alert("no subdomain");
        alert( "domain " + domain);
      }
      else {
        alert("subdomain " + subdomain + " domain " + domain);
      }
    }
    else {
      alert("invalid url");
      e.preventDefault();
    }
  }
  this.formValidate.addEventListener("submit" , this.alertDomainSubdomain);
}
var inputText = document.getElementById("textBox");
inputText.onkeyup = function() {
var jsonObject = [
  {"name":"Luigi Damiano"},
  {"name":"Zenith Coboro"},
  {"name":"Zig Ziglar"},
  {"name":"Steve Costner"},
  {"name":"Bill Grazer"},
  {"name":"Timothy Frazer"},
  {"name":"Boris Becker"},
  {"name":"Glenn Gladwich"},
  {"name":"Jim Jackson"},
  {"name":"Aaron Kabin"},
  {"name":"Roy Goldwin"},
  {"name":"Jason Goldberg"},
  {"name":"Tim Ferris"},
  {"name":"Buck Singham"},
  {"name":"Malcom Gladwell"},
  {"name":"Joy Rabura"},
  {"name":"Vid Luther"},
  {"name":"Tom Glicken"},
  {"name":"Ray Baxter"},
  {"name":"Ari Kama"},
  {"name":"Kenichi Suzuki"},
  {"name":"Rick Olson"}
];
var person = new showSuggestion(jsonObject);
person.display();
}


// function for autosuggesting names
function showSuggestion(jsonObject){
  this.jsonObject = jsonObject;
  var suggestionBox = document.getElementById("suggestionBox");
  suggestionBox.style.visibility = "visible";
  var inputTextLength = inputText.value.length;
  suggestionBox.innerHTML = "";
  this.display = function() {
    for(var j = 0 ; j < this.jsonObject.length , inputTextLength > 0 ; j++){
      if(inputText.value.substring(0,inputTextLength).toLowerCase() === this.jsonObject[j].name.substring(0,inputTextLength).toLowerCase()){
        suggestionBox.appendChild(document.createTextNode(this.jsonObject[j].name));
        suggestionBox.appendChild(document.createElement("br"));
      }
    }
  }
} 

  
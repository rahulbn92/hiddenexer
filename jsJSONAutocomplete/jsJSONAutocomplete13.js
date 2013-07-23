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

var inputText = document.getElementById("textBox");
inputText.addEventListener("keyup", showSuggestion);

// function for autosuggesting names
function showSuggestion(){
  var suggestionBox = document.getElementById("suggestionBox");
  suggestionBox.style.visibility = "visible";
  var inputTextLength = inputText.value.length;
  check((inputTextLength));
}

// function for checking substrings
function check(i) {
  suggestionBox.innerHTML = "";
  for(var j = 0 ; j < jsonObject.length , i > 0 ; j++){
    if(inputText.value.substring(0,i).toLowerCase() === jsonObject[j].name.substring(0,i).toLowerCase()){
      suggestionBox.appendChild(document.createTextNode(jsonObject[j].name));
      suggestionBox.appendChild(document.createElement("br"));
    }
  }
}

  
 
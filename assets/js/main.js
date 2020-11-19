// Definizione
var numbList = 0;

for (var i = 0; i < 100; i++) {
  numbList = i + 1;


// Multipli
  var resto3 = numbList % 3;
  var resto5 = numbList % 5;
  if (resto3 === 0) {
    numbList = "Fizz";
  }

  if (resto5 === 0) {
    numbList = "Buzz";
  }

  if (resto3 === 0 && resto5 === 0) {
    numbList = "FizzBuzz";
  }


// Stampa
  var numbListiHtml = document.getElementById('numberList').innerHTML;
  document.getElementById('numberList').innerHTML = numbListiHtml + "<li>" + numbList + "</li>";


}
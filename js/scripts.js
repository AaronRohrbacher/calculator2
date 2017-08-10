$(document).ready(function(){
  var length1 = parseInt(prompt("side 1"));
  var length2 = parseInt(prompt("side 2"));
  var length3 = parseInt(prompt("side 3"));

  if (length1 + length2 <= length3 || length1 + length3 <= length2 || length2 + length3 <= length1) {
    alert("'Taint a triangle, man.");
  } else if (length1 === length2 && length2 === length3){
    alert("Equilateral, brah!");
  } else if (length1 === length2 || length1 === length3 || length2 === length3){
    alert("Isosceles, brosephine!");
  } else if (length1 !== length2 !== length3) {
    alert("Scalene, jalene!")
  }
});

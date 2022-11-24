function ageInDays(){
    var birthYear = prompt("what year were you born...Good friend");
    var ageInDayss = (2022 - birthYear) * 365;
    var h2 = document.createElement('h2');
    var textAnswer = document.createTextNode("You are " + ageInDayss + " days old");
    h2.setAttribute('id','ageInDays');
    h2.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h2);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

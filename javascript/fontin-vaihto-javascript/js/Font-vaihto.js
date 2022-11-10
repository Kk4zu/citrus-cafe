var clickCount = 1;
  function myFunction() {
    if (clickCount == 1) {
        document.getElementById("demo").style.fontSize = "20px";
        clickCount++;
    } else if(clickCount == 2) {
        document.getElementById("demo").style.fontSize = "24px";
        clickCount++;
    } else if(clickCount == 3) {
        document.getElementById("demo").style.fontSize = "28px";
        clickCount++;
    } else if(clickCount == 4) {
        document.getElementById("demo").style.fontSize = "32px";
        clickCount++;
    } else {
        document.getElementById("demo").style.fontSize = "16px";
        clickCount = 1;
    }
    document.getElementById("result").innerHTML = "Fonttikoko " +  document.getElementById("demo").style.fontSize;
    console.log(document.getElementById("demo").style.fontSize);
  }
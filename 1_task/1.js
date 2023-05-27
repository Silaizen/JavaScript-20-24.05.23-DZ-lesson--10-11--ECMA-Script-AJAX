class Marker {
    constructor(color, inkPercentage) {
      this.color = color;
      this.inkPercentage = inkPercentage;
      this.previousInkPercentage = inkPercentage;
      this.isInkFinished = false;
    }
  
    print(text) {
      if (this.isInkFinished) {
        alert('У вас закончились чернила!');
        return;
      }
  
      let remainingInk = this.previousInkPercentage;
      let printedText = '';
  
      for (let i = 0; i < text.length; i++) {
        if (remainingInk <= 0) {
          this.isInkFinished = true;
          alert('У вас закончились чернила!');
          break;
        }
  
        let symbol = text[i];
        if (symbol.trim() !== '') {
          remainingInk -= 0.5;
          printedText += symbol;
        }
      }
  
      displayOutput(printedText, remainingInk);
      this.previousInkPercentage = remainingInk;
    }
  }
  
  class RefillableMarker extends Marker {
    refill() {
      this.previousInkPercentage = 100;
      this.inkPercentage = 100;
      this.isInkFinished = false;
      alert('Маркер успешно заправлен.');
    }
  }
  
  let marker = new RefillableMarker('black', 100);
  let outputElement = document.getElementById('output');
  let colorPicker = document.getElementById('colorPicker');
  
  function startPrinting() {
    let inputText = document.getElementById('inputText').value;
    marker.print(inputText);
  }
  
  function displayOutput(text, inkPercentage) {
    let resultText = '';
  
    if (outputElement.innerHTML !== '') {
      resultText += '<br>';
    }
  
    resultText += `<span style="color: ${marker.color}">${text}</span> - Залишок чорнил: ${inkPercentage.toFixed(
      2
    )}%`;
    outputElement.innerHTML += resultText;
  }
  colorPicker.addEventListener('change', function () {
    marker.color = colorPicker.value;
  });
  
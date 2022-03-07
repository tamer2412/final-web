// audio
var nusmses = document.querySelectorAll(".drum").length;
for(var i = 0; i<nusmses; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "k":
      var pudg = new Audio('AUDIO/ya.mp3');
      pudg.play();
        break;
        case "a":
        var storm = new Audio('AUDIO/akhzhol.mp3');
        storm.play();
        break;
        case "t":
        var pudg = new Audio('AUDIO/tamer.mp3');
        pudg.play();
          break;
      default: console.log(buttonInnerHTML);
    }
  });
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const startBtn = document.querySelector("#button");

var recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = "en-US";
recognition.maxAlternatives = 1;

var grammar =
  "#JSGF V1.0; grammar animal; public <animal> = dog | cat | cow | pig | sheep | help | about;";
var SpeechGrammarList = new webkitSpeechGrammarList();
SpeechGrammarList.addFromString(grammar, 1);
recognition.grammars = SpeechGrammarList;

startBtn.addEventListener("click", update);

function update() {
  if (startBtn.textContent === "Speak") {
    startBtn.textContent = "Stop";
    recognition.abort();
  } else {
    startBtn.textContent = "Speak";
    recognition.start();
  }
}

const synth = window.speechSynthesis;

startBtn.addEventListener("click", () => {
  recognition.start();
});

recognition.onresult = (e) => {
  const transcript = e.results[0][0].transcript;
  if (transcript === "help") {
    console.log("help is being called");
    recognition.stop();
    const utter = new SpeechSynthesisUtterance(
      "Say a name of the object on the screen. Say about, to hear about the program."
    );
    synth.speak(utter);
  } else if (transcript === "about") {
    console.log("about is being called");
    recognition.stop();
    const utter2 = new SpeechSynthesisUtterance(
      "Author by Hanfeng Liu, Copyright:2022"
    );
    synth.speak(utter2);
  } else if (transcript === "dog") {
    console.log("dog is being called");
    recognition.stop();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var dog = new Image();
    dog.src = "image/dog.jpg";
    dog.onload = function () {
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      ctx.drawImage(dog, 0, 0);
    };
  } else if (transcript === "cat") {
    console.log("cat is being called");
    recognition.stop();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var cat = new Image();
    cat.src = "image/cat.jpg";
    cat.onload = function () {
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      ctx.drawImage(cat, 0, 0);
    };
  } else if (transcript === "cow") {
    console.log("cow is being called");
    recognition.stop();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var cow = new Image();
    cow.src = "image/cow.jpg";
    cow.onload = function () {
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      ctx.drawImage(cow, 0, 0);
    };
  } else if (transcript === "pig") {
    console.log("pig is being called");
    recognition.stop();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var pig = new Image();
    pig.src = "image/pig.jpg";
    pig.onload = function () {
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      ctx.drawImage(pig, 0, 0);
    };
  } else if (transcript === "sheep") {
    console.log("sheep is being called");
    recognition.stop();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var sheep = new Image();
    sheep.src = "image/sheep.jpg";
    sheep.onload = function () {
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      ctx.drawImage(sheep, 0, 0);
    };
  } else {
    console.log("not  recognize");
    recognition.stop();
    const utter3 = new SpeechSynthesisUtterance("Not  recognize and please try again.");
    synth.speak(utter3);
  }
};

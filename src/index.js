var msg = document.querySelector("#message");
var btn = document.querySelector("#interact");
var ans = document.querySelector("#answer");

btn.addEventListener("click", function () {
  let c = msg.value.toLowerCase();
  let replay = "";
  if (c.match("hello")) {
    replay = "Hello Boss";
  } else if (c.match("hlw")) {
    replay = "Hello Boss";
  } else if (c.match("sing a song")) {
    replay = "I'm singing a song. I'm singing a song. la la la la.";
  } else if (c.match("gan sunaw")) {
    replay = "la la la la. hmmm. la la la. ho ho ho.";
  } else if (c.match("who are you")) {
    replay =
      "Hello I'm assistant of Shuvo Sarker. I'm just a bot and you can play with me.";
  } else if (c.match("what is your name")) {
    replay = "Hi, I'm assistant of Shuvo. My name is Assistant.";
  } else {
    replay = "Sorry! I'm not understand.";
  }
  ans.innerHTML = replay;

  var kotha = new SpeechSynthesisUtterance(replay);
  window.speechSynthesis.speak(kotha);
});

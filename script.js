toSupervisor = document.getElementById("toSupervisor")
toUser = document.getElementById("toUser")
supervisor = document.getElementById("supervisor")
user = document.getElementById("user")
speech = document.getElementById('speech')
speechDisplay = document.getElementById('speechDisplay')
pastEmotion = document.getElementById('pastEmotion')
currentEmotion = document.getElementById('currentEmotion')

happyImage = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/beaming-face-with-smiling-eyes_1f601.png">'
sadImage = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/crying-face_1f622.png">'
fearImage = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/fearful-face_1f628.png">'
angerImage = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/pouting-face_1f621.png">'
surpriseImage = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/face-with-open-mouth_1f62e.png">'
disgustImage = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/face-vomiting_1f92e.png">'


speech.onkeydown = function(e){
  if(e.keyCode == 13){
    alert("Sent!")
    speechDisplay.placeholder = speech.value
    radio = document.querySelector('input[name="emotion"]:checked')
    
    if (radio.value == "happy") {
      currentEmotion.innerHTML = happyImage;
      pastEmotion.innerHTML += happyImage;
    } else if (radio.value == "sad") {
      currentEmotion.innerHTML = sadImage;
      pastEmotion.innerHTML += sadImage;
    } else if (radio.value == "fear") {
      currentEmotion.innerHTML = fearImage;
      pastEmotion.innerHTML += fearImage;
    } else if (radio.value == "anger") {
      currentEmotion.innerHTML = angerImage;
      pastEmotion.innerHTML += angerImage;
    } else if (radio.value == "surprise") {
      currentEmotion.innerHTML = surpriseImage;
      pastEmotion.innerHTML += surpriseImage;
    } else if (radio.value == "disgust") {
      currentEmotion.innerHTML = disgustImage;
      pastEmotion.innerHTML += disgustImage;
    }
  }
};

function letSmile() {
  var emoji = document.getElementById("emoji");
  if ((emoji = "&#128551;")) {
    // console.log(emoji);
    document.getElementById("emoji").innerHTML = "&#128513;" + "<br> ยิ้มแย้วว อิอิ";
    var changeEmoji = setTimeout(painedEmoji, 5000);
  }
}

function painedEmoji() {
  document.getElementById("emoji").innerHTML = "&#128551;" + "<br> วันนี้คุณยิ้มแล้วหรือยัง";
}

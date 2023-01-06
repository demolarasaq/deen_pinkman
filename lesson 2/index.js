function shows() {
  var username = document.getElementById("nname").value;
  var userage = document.getElementById("aage").value;
  var usergender = document.getElementById("ggender").value;

  document.getElementById("first").innerHTML = username;
  document.getElementById("second").innerHTML = userage;
  document.getElementById("third").innerHTML = usergender;
}

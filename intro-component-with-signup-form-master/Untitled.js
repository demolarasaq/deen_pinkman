function validation() {
  if (document.myform.firstname.value == "") {
    document.getElementById("pop").innerHTML =
      "*Please fill all neccessary fields*";
  }
}

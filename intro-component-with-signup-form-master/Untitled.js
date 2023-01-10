function validate() {
  var firstname = document.getElementById("one").value;
  var lastname = document.getElementById("two").value;
  var email = document.getElementById("three").value;
  var password = document.getElementById("four").value;

  if (firstname == "") {
    document.getElementById("firstname").innerHTML =
      "First name can't be empty";
  } else if (firstname != "") {
    document.getElementById("firstname").innerhtml = "";
  }

  if (lastname == "") {
    document.getElementById("lastname").innerHTML = "Last name can't be empty";
  } else if (lastname != "") {
    document.getElementById("lastname").innerhtml = "";
  }

  if (email == "") {
    document.getElementById("email").innerHTML = "Enter your email address";
  } else if (email != "") {
    document.getElementById("email").innerhtml = "";
  }

  if (password == "") {
    document.getElementById("password").innerHTML = "Input your password";
  } else if (password != "") {
    document.getElementById("password").innerhtml = "";
  }

  if (firstname == "" || lastname == "" || email == "" || password == "") {
    document.getElementById("pop").innerHTML = "Kindly Fill all the required!";
    console.log("tatyedijsjm");
  } else if (
    firstname != "" &&
    lastname != "" &&
    email != "" &&
    password != ""
  ) {
    document.getElementById("pop").innerHTML = "You are Good to Go";
    document.getElementById("greetings").innerHTML = "Hello " + firstname;
  }
}

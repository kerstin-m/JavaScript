function versteckeFehler() {
  var fehlerContainer = document.getElementById("fehler");
  fehlerContainer.style.display = "none";
  fehlerContainer.innerHTML = "";
}

function schreibeFehler(meldung) {
  //diese Funktion hilft, Fehlermeldungen auszugeben
  var fehlerContainer = document.getElementById("fehler");
  fehlerContainer.style.display = "block";
  fehlerContainer = document.getElementById("fehler");
  fehlerContainer.innerHTML += "<p>" + meldung + "</p>";
}

function pruefeVornamen() {
  var vorname = document.getElementById("vorname").value;
  if (vorname == "") {
    schreibeFehler("Bitte geben Sie einen Vornamen an");
  } else if (vorname == "Klausie") {
    schreibeFehler("Klausie muss draußen bleiben");
  }
}

function pruefeNachnamen() {
  var nachname = document.getElementById("nachname").value;
  if (nachname == "") {
    schreibeFehler("Bitte geben Sie einen Nachnamen an");
  } else if (nachname.length <= 1) {
    schreibeFehler("Das ist kein Nachname");
  }

  //pruefe, ob Nachname länger als ein Buchstabe ist
}

function pruefeEmail() {
  var email = document.getElementById("email").value;
  if (email == "") {
    schreibeFehler("Bitte geben Sie eine Emailadresse an");
  } else if (email.indexOf("@") < 0) {
    schreibeFehler("Achtung!");
  }

  //pruefe, ob Emailadresse ein @ enthält. Das ist zwar keine ausreichende Prüfung, aber im Moment gibt es nicht mehrs
}

function pruefeFormular() {
  versteckeFehler();
  pruefeVornamen();
  pruefeNachnamen();
  pruefeEmail();
  schickeFormular();
}

function schickeFormular() {
  //hier muss ich dann noch das Formular abschicken, das krieg ich hin
}

/* SmtpJS.com - v3.0.0 */
var Email = {
    send: function (a) {
      return new Promise(function (n, e) {
        (a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = "Send");
        var t = JSON.stringify(a);
        Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
          n(e);
        });
      });
    },
    ajaxPost: function (e, n, t) {
      var a = Email.createCORSRequest("POST", e);
      a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        (a.onload = function () {
          var e = a.responseText;
          null != t && t(e);
        }),
        a.send(n);
    },
    ajax: function (e, n) {
      var t = Email.createCORSRequest("GET", e);
      (t.onload = function () {
        var e = t.responseText;
        null != n && n(e);
      }),
        t.send();
    },
    createCORSRequest: function (e, n) {
      var t = new XMLHttpRequest();
      return (
        "withCredentials" in t
          ? t.open(e, n, !0)
          : "undefined" != typeof XDomainRequest
          ? (t = new XDomainRequest()).open(e, n)
          : (t = null),
        t
      );
    },
  };
  
  const message = document.getElementById("message");
  const name = document.getElementById("nom");
  const firstname = document.getElementById("prenom");
  
  const btn = document.getElementById("sendbtn");
  
  function sendEmail() {
    const form = document.forms.sendMessage;
    const checked = form.querySelector("input[name=age]:checked");
    let age = checked.value;
  
    Email.send({
      SecureToken: "56be052d-0061-4712-ab5d-449c30d9dade",
      To: "contact@ekherchi.fr",
      From: "contact@ekherchi.fr",
      Subject: "text",
      Body:
        "prénom: " +
        firstname.value +
        ", nom: " +
        name.value +
        ", téléphone: " +
        phone.value +
        ", email: " +
        email.value +
        ", message: " +
        message.value +
        ", age: " +
        age,
    }).then((message) => alert("Votre mail est envoyé, merci."));
  }
  
  btn.addEventListener("click", function (e) {
    sendEmail();
    e.preventDefault();
    
  });
  
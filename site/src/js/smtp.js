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
const form = document.forms.sendMessage;
const phone = document.getElementById("phone");
const email = document.getElementById("email");

const regexLettersOnly = /^[a-zA-Z]+$/;
const regexEmail = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
const regexPhone = /^[0-9]{10}$/;

const btn = document.getElementById("sendbtn");

function thanks() {
  const thxDiv = document.createElement("div");
  const contactBlockForm = document.querySelector('.contactBlock-form');
  thxDiv.innerHTML= "<h2>Votre message est envoyé<br>Merci</h2>";
  thxDiv.style.textAlign = 'center';
  thxDiv.style.marginTop = '50px'
  thxDiv.style.marginBottom = '50px'
  form.style.display = 'none';
  
  contactBlockForm.appendChild(thxDiv);
}

function sendEmail() {
  const checked = form.querySelector("input[name=age]:checked");
  let age;

  if (regexLettersOnly.test(name.value) == false) {
    alert("Veuillez informer votre Nom");
  } else {
    if (regexLettersOnly.test(firstname.value) == false) {
      alert("Veuillez informer votre Prénom");
    } else {
      if (regexPhone.test(phone.value) == false) {
        alert("Veuillez informer votre numéro de téléphone");
      } else {
        if (regexEmail.test(email.value) == false) {
          alert("Veuillez renseigner votre adresse Email");
        } else {
          if (checked == undefined || checked == null) {
            alert("Veuillez préciser si vous êtes un adulte ou non");
          } else {
            age = checked.value;

            Email.send({
              SecureToken: "56be052d-0061-4712-ab5d-449c30d9dade",
              To: "contact@ekherchi.fr",
              From: "contact@ekherchi.fr",
              Subject: "Un message du site internet Sandrine Lambert",
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
            })

            thanks();
            
            
            
            
            
          
          }
        }
      }
    }
  }
}



btn.addEventListener("click", function (e) {
  e.preventDefault();
  sendEmail();
});

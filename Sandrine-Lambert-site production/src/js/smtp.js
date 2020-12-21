

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
  // creation de la div et ajout d'un h2 remerciement
  const thxDiv = document.createElement("div");
  const contactBlockForm = document.querySelector(".contactBlock-form");
  thxDiv.innerHTML = "<h2>Votre message est envoyé<br>Merci</h2>";
  thxDiv.style.textAlign = "center";
  thxDiv.style.marginTop = "50px";
  thxDiv.style.marginBottom = "50px";
  form.style.display = "none";
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
            age = checked.value; //si cocher ajout de la valeur à la variable age .

            const form = {
              firstname : firstname.value,
              name: name.value,
              phone: phone.value,
              email: email.value,
              age: age,
              message: message.value
            }

            emailjs
              .send("site_email","siteemail",form,"user_G7KIV6oN96ksI8HoFjWqM")
              .then(
                function () {
                  thanks();
                },
                function (error) {
                  console.log("FAILED...", error);
                }
              );

            
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

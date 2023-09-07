const form = document.getElementById("fs-frm");
const modal = document.getElementById("submission-result");
const closeButton = document.getElementById("close-result");

function closeResult() {
  const buttonDiv = document.querySelector(".contactform .submit-button-inner");
  modal.style.display = "none";
  form.reset();
}

function showResult() {
  const modalContent = document.querySelector(".submission-content");

  modal.style.display = "block";
  setTimeout(() => {
    modal.style.opacity = "1";
    modalContent.style.opacity = "1";
  }, 10);
  closeButton.addEventListener("click", closeResult);
}

async function handleSubmit(event) {
  const status = document.querySelector(".submission-content p");

  event.preventDefault();

  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.textContent = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.textContent = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.textContent = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.textContent = "Oops! There was a problem submitting your form"
  });
  showResult();
}

form.addEventListener("submit", handleSubmit);
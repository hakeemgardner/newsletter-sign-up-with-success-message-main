const subscribe = document.querySelector(".subcribe");
const dismiss = document.querySelector(".dismiss");
const main_content = document.querySelector(".main-content");
const modal = document.querySelector(".thanks-modal");
const input = document.querySelector(".email-input");
const error_message = document.querySelector(".error-message");
subscribe.addEventListener("click", handleModal);
input.addEventListener("focus", handleInput);
function handleModal() {
  modal.classList.add("visible");
  main_content.classList.add("hidden");
}

function handleInput() {
  const email = input.value;
  if (email == "" || email == null) {
    input.setAttribute("style", "border:1px solid hsl(4, 100%, 67%)");
    error_message.setAttribute("style", "display:inline-block");
  } else {
    input.setAttribute("style", "border:1px solid green");
    error_message.setAttribute("style", "display:none");
  }
}

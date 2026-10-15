/* =========================
   GET ELEMENTS
========================= */

const loginBtn =
    document.getElementById("loginBtn");

const welcomeSection =
    document.getElementById("welcomeSection");

const loginSection =
    document.getElementById("loginSection");

const submitLogin =
    document.getElementById("submitLogin");

const quizSection =
    document.getElementById("quizSection");

const chooseBtn =
    document.getElementById("chooseBtn");


/* =========================
   PART 1 → PART 2
========================= */

loginBtn.addEventListener("click", function () {

    // Hide Part 1
    welcomeSection.style.display = "none";

    // Show Part 2
    loginSection.style.display = "flex";

});


/* =========================
   PART 2 → PART 3
========================= */

submitLogin.addEventListener("click", function () {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value.trim();

    const loginMessage =
        document.getElementById("loginMessage");


    // Check empty fields
    if (username === "" || password === "") {

        loginMessage.textContent =
            "Please fill in all fields.";

        loginMessage.style.color = "red";

        return;
    }


    // Login successful
    loginMessage.textContent =
        "Login successful!";

    loginMessage.style.color = "green";


    // Hide Part 2
    loginSection.style.display = "none";


    // Show Part 3
    quizSection.style.display = "flex";

});


/* =========================
   PART 3: MULTIPLE CHOICE
========================= */

chooseBtn.addEventListener("click", function () {

    const selected =
        document.querySelector(
            'input[name="color"]:checked'
        );

    const result =
        document.getElementById("result");


    // Nothing selected
    if (!selected) {

        result.textContent =
            "Please choose one option.";

        result.style.color = "red";

        return;
    }


    // Option selected
    result.textContent =
        "You selected: " + selected.value;

    result.style.color = "green";

});




//=============================

const form =
    document.getElementById("LoginForm");

form.addEventListener("submit", function (event) {
    event.preventDefault()
})
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    document.getElementById("outFullname").textContent = fullname;
    document.getElementById("outUsername").textContent = username;
    document.getElementById("outEmail").textContent = email;

    document.getElementById("output").style.display = "block";
});

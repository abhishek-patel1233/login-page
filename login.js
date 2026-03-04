
function toggleForms() {
    document.getElementById("form").classList.toggle("hidden");
    document.getElementById("regi").classList.toggle("hidden");
}

// Register function
function regis() {
    let name = document.getElementById("rname").value.trim();
    let em = document.getElementById("rem").value.trim();
    let pass = document.getElementById("rpass").value.trim();

    if (!name || !em || !pass) {
        alert("Please fill all fields");
        return;
    }

    // Get existing users or empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    let exist = users.find(u => u.email === em);
    if (exist) {
        alert("This email is already registered!");
        return;
    }

    // Add new user
    users.push({ name, email: em, pass });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Register complete: " + name);

    // Clear input fields
    document.getElementById("rname").value = "";
    document.getElementById("rem").value = "";
    document.getElementById("rpass").value = "";

    toggleForms(); // Show login form
}


function loging() {
    let em = document.getElementById("em").value.trim();
    let pass = document.getElementById("pass").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.email === em && u.pass === pass);

    if (user) {
        alert("Login Successful! Welcome " + user.name);
        
        document.getElementById("em").value = "";
        document.getElementById("pass").value = "";
    } else {
        alert("Invalid Email or Password!");
    }
}

var form = document.getElementById('resumeform');
var output = document.getElementById("resumeoutput");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("School").value;
    var education1 = document.getElementById("University").value;
    var education2 = document.getElementById("Graduation").value;
    var works = document.getElementById("works").value;
    var skills = document.getElementById("skills").value;
    var resumeHtml = "\n    <h2>Editable Resume</h2>\n\n    <h3>Personal Information</h3>\n    <p>Name: <span contentable=\"true\"> ".concat(name, " </span></p>\n    <p>Age: <span contentable=\"true\"> ").concat(age, " </span></p>\n    \n    <h3>Contact</h3>\n    <p>Address: <span contentable=\"true\"> ").concat(address, " </span></p></p>\n    <p>Phone: <span contentable=\"true\"> ").concat(phone, " </span> </p>\n    <p>Email: <span contentable=\"true\"> ").concat(email, " </span></p>\n    <h3>Education</h3>\n    <p>School: <span contentable=\"true\"> ").concat(education, " </span></p>\n    <p>University: <span contentable=\"true\"> ").concat(education1, " </span></p>\n    <p>Graduation:<span contentable=\"true\"> ").concat(education2, " </span></p>\n    <h3>Work Experience</h3>\n    <p contentable=\"true\">Work: ").concat(works, "</p>\n    <h3>Skills</h3>\n    <p contentable=\"true\">Skill: ").concat(skills, "</p>");
    if (output) {
        output.innerHTML = resumeHtml;
    }
    else {
        console.log("Resume preview not found");
    }
});

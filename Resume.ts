
var form = document.getElementById('resumeform') as HTMLFormElement;
var output = document.getElementById("resumeoutput") as HTMLInputElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const age = (document.getElementById("age") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const address = (document.getElementById("address") as HTMLInputElement).value;
  const education = (document.getElementById("School") as HTMLInputElement).value;
  const education1 = (document.getElementById("University") as HTMLInputElement).value;
  const education2 = (document.getElementById("Graduation") as HTMLInputElement).value;
  const works = (document.getElementById("works") as HTMLInputElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  const resumeHtml = `
    <h2>Editable Resume</h2>

    <h3>Personal Information</h3>
    <p>Name: <span contentable="true"> ${name} </span></p>
    <p>Age: <span contentable="true"> ${age} </span></p>
    
    <h3>Contact</h3>
    <p>Address: <span contentable="true"> ${address} </span></p></p>
    <p>Phone: <span contentable="true"> ${phone} </span> </p>
    <p>Email: <span contentable="true"> ${email} </span></p>
    <h3>Education</h3>
    <p>School: <span contentable="true"> ${education} </span></p>
    <p>University: <span contentable="true"> ${education1} </span></p>
    <p>Graduation:<span contentable="true"> ${education2} </span></p>
    <h3>Work Experience</h3>
    <p contentable="true">Work: ${works}</p>
    <h3>Skills</h3>
    <p contentable="true">Skill: ${skills}</p>`;

   if (output) {
    output.innerHTML = resumeHtml;
    
   }else{
    console.log("Resume preview not found");
   }
  
});






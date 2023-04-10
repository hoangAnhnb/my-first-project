document.getElementById("demo").innerHTML = "please complete your form";
function validateForm(event) {
    event.preventDefault();
    let x = document.getElementById("name").value;
    let pattern = (/[0-9]/g);
    if (pattern.test(x)) {
      alert("Name must be filled out");
      return false;
    }
    let y = document.getElementById("name");
    document.getElementById('nameValue').innerHTML =  `name: ${y.value}`
    document.getElementById('nameValue').style.color="red";
}

// let division=document.createElement("div");
// division.innerHTML="";
// // document.body.append(division);

// let form=document.createElement("form");
// division.append(form);
// document.body.append(division);

// let label=document.createElement("label");
// label.innerHTML="firstname";
// label.setattribute("class","fame");
// form.appendChild(label);
// // document.body.append(form);

// const form=document.getElementById("my form");
// const table=document.createElement("table");
// table.setAttribute("id","table");
// form.appendChild(table);
// document.body.append(table);
const form=document.getElementById("my form");
const tbody=document.getElementById("table");
form.addEventListener('submit',function(event){
  event.preventDefault();
})





const firstname=document.getElementById("firstname").value;&nbsp
const lastname=document.getElementById("lastname").value;
const Address=document.getElementById("Address").value;
const pincode=document.getElementById("pincode").value;
const Gender=document.getElementById("gender").value;
const food=document.getElementById("food").value;
const state=document.getElementById("state").value;
const country=document.getElementById("country").value;
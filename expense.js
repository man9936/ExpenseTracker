


// let amt=document.createElement("td");

// let des=document.createElement("td");
// let cat=document.createElement("td");

// amt.innerText="hi";
// des.innerText="hi";
// cat.innerText="hi";

// document.getElementById("add-expense").append(amt,des,cat);



// let getAmt=document.getElementById("expense-input").value;
// let getDes=document.getElementById("description-input").value;
// let getCat=document.getElementById("category").value;
//  <select id="language">
// 	<option value="en" selected>English</option>
// 	<option value="es">Español</option>
// 	<option value="pt">Português</option>
// </select> }
// var select = document.getElementById('category');
// var getCat = select.options[select.selectedIndex].value;

// let edit=document.createElement("td");
// let remove=document.createElement("td");
// edit.innerHTML=`<button>Edit</button>`;
// remove.innerHTML=`<button>X</button>`;



let btn=document.getElementById("submit");

btn.addEventListener('click',addList());
function addList(){



    
let getAmt=document.getElementById("expense-input").value;
let getDes=document.getElementById("description-input").value;
var select = document.getElementById('category');
var getCat = select.options[select.selectedIndex].value;


//saving in local storage
let arr;
if(JSON.parse(localStorage.getItem("arr"))===null) {
   arr= [];
}else {
    arr=JSON.parse(localStorage.getItem("arr"));
}
let obj={
    getAmt,
    getDes,
    getCat
}
arr.push(obj);
localStorage.setItem('arr',JSON.stringify(arr));


let row=document.createElement("tr");
let amt=document.createElement("td");

let des=document.createElement("td");
let cat=document.createElement("td");
let edit=document.createElement("td");
let remove=document.createElement("td");
edit.className="edit";
remove.className="remove";
edit.innerHTML=`<button>Edit</button>`;
remove.innerHTML=`<button>X</button>`;


var retArr=JSON.parse(localStorage.getItem("arr"))


amt.innerText=retArr.getAmt;
des.innerText=retArr.getDes;
cat.innerText=retArr.getCat;

row.append(amt,des,cat,edit,remove);

document.getElementById("add-expense").appendChild(row);




document.getElementById("expense-input").value="";
document.getElementById("description-input").value="";
document.getElementById("category").value="";





};



addEventListener('DOMContentLoaded',reload(e));

    let row=document.createElement("tr");
let amt=document.createElement("td");

let des=document.createElement("td");
let cat=document.createElement("td");
let edit=document.createElement("td");
let remove=document.createElement("td");
edit.className="edit";
remove.className="remove";
edit.innerHTML=`<button>Edit</button>`;
remove.innerHTML=`<button>X</button>`;


var retArr=JSON.parse(localStorage.getItem("arr"))

arr.forEach(element => {
    

amt.innerText=element.getAmt;
des.innerText=element.getDes;
cat.innerText=element.getCat;

row.append(amt,des,cat,edit,remove);

document.getElementById("add-expense").appendChild(row);

});


document.getElementById("expense-input").value="";
document.getElementById("description-input").value="";
document.getElementById("category").value="";






let h2 = document.querySelector("h1");
console.dir(h2.innerText);

let output = h2.innerText + " Welcome to my course";
console.log(output);


let divs = document.querySelectorAll(".box")

// divs[0].innerText = "First unique value";
// divs[1].innerText = "Second unique value";
// divs[2].innerText = "Third unique value";
let indx  = 0;
for(div of divs){
    div.innerText = `unique value at index ${indx}`;
    indx++;
    console.log(div)
}
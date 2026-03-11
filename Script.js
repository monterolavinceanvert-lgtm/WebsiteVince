document.getElementById("menu-toggle").addEventListener("click", () => {
document.querySelector(".nav-links").classList.toggle("active");
});

function sendMessage(e){
e.preventDefault();

const name = document.getElementById("name").value;

alert("Thanks for your message, " + name + "!");

e.target.reset();
}

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});
});


let Sibling = [
            {
                firstname:"Vince",
                lastname:"Monterola",
                age:"16",
                Birth: "April 03 2009",
                Strand: "ICT",
                School:"SHS SAN NICHOLAS III"
            }
        ]
           for(let i = 0;i < Sibling.length;i++){
               console.log(`First Name : ${Sibling[i].firstname}`);
               
               console.log(`Last Name : ${Sibling[i].lastname}`);
               
               console.log(`Age : ${Sibling[i].age}`)
               
               console.log(`Birth : ${Sibling[i].Birth}`);
               
               console.log(`Strand : ${Sibling[i].Strand}`);
               
               console.log(`School : ${Sibling[i].School}`)
           }

alert("Hi,There this is my website");

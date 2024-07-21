var full=document.querySelector(".full");
var pop=document.querySelector(".pop");
var create=document.getElementById("create");

create.addEventListener("click",function(){
    full.style.display="block";
    pop.style.display="block";
})
 var add=document.getElementById("adding");
 var can=document.getElementById("cancel");
 cancel.addEventListener("click",function(event){
         event.preventDefault();
         full.style.display="none";
         pop.style.display="none";

 })
 var title=document.getElementById("title");
 var author=document.getElementById("author");
 var des=document.getElementById("des");
 var cont=document.querySelector(".cont");
 adding.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class", "book-cont");
    div.innerHTML=`<h2>${title.value}</h2>
                   <h5> ${author.value}</h5>
                   <p>${des.value}</p>
                   <button onclick="del(event)">Delete</button>`
                   full.style.display="none";
                   pop.style.display="none";
    cont.append(div);
})
function del(event)
{
    event.target.parentElement.remove();
}


function message()
{
   alert("Hello,"+document.getElementById("name").value+"!");
}
document.getElementById("display").addEventListener("click",message);
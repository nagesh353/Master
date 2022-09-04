function show()
{
    document.getElementById("p1").setAttribute("type","text")
}
function hide()
{
    document.getElementById("p1").setAttribute("type","password")
} 
function math()
{
   var num= document.getElementById("p1").value
   var num1=num.length
   if(num1>=2)
   {
       document.getElementById("s2").removeAttribute("disabled")
       document.getElementById("s1").removeAttribute("disabled")
   }
   else
   {
       
    document.getElementById("s2").setAttribute("disabled",true)
    document.getElementById("s1").setAttribute("disabled",true)

   }

}
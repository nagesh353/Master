function check()
{
    var num=document.getElementById("f2").value
    var len=num.length
    if(len<2)
    {
        document.getElementById("f2").style.borderColor="red"
        //To control cursor position 
        document.getElementById("f2").focus()
    }
    else{
        document.getElementById("f2").style.borderColor="green"

    }
}
function verify()
{
   var res= document.getElementById("f3").getAttribute("type")
   if(res== "password")
   {
       document.getElementById("f3").setAttribute("type","text")
   }
   else
   {
       document.getElementById("f3").setAttribute("type","password")
   }
}
function check()
{
 var num = document.getElementById("i1").value 
 var len=num.length 
 if(len==0)
 {
    document.getElementById("i1").style.borderColor="red"
    document.getElementById("s1").style.color="red"
 document.getElementById("s1").innerHTML="please enter email id"
 }
}
function test()
{
 var num = document.getElementById("i1").value 
 var len=num.length
 if(len>5)
 {
   document.getElementById("i2").removeAttribute("disabled")
 }
 else{
   document.getElementById("i2").setAttribute("disabled","true")


 }
   
}
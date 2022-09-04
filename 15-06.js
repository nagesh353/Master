function check()
{
   var num= document.getElementById("i1").value
   var res=/[A-Z]{1}[a-z]/
   var res1=/[0-9!@#$%^&*]/
   var res2=/[A-Z]/
   var char=num.charAt(0)
   if(num=="")
   {
    document.getElementById("i1").style.boxShadow=" 0px 0px 5px red"
    document.getElementById("s1").innerHTML="Enter Valid name"
    document.getElementById("s1").style.display="block"
   }
   else if(num.match(res1))
   {
    document.getElementById("i1").style.boxShadow="0px 1px 8px red"
    document.getElementById("s1").style.color="red"
    document.getElementById("s1").innerHTML="Enter Valid name"
    document.getElementById("s1").style.display="block"
   }
    else if(num.match(res) && char.match(res2))
   {

      document.getElementById("i1").style.borderColor="green"
      document.getElementById("s1").style.display="none"
    document.getElementById("s1").innerHTML=" Valid name"

   }
   else{
      document.getElementById("i1").style.borderColor="red"
   }
}
function test()
{
   var num=document.getElementById("i1").value 
   console.log(num)
   var exp=/^[A-Z]{1}[a-z]{1,20}$/
   if(num.match(exp))
   {
      document.getElementById("i1").style.borderColor="green"
      document.getElementById("s1").style.color="green"
    document.getElementById("s1").innerHTML=" Valid name"
   }
   else{
      document.getElementById("s1").style.color="red"
     document.getElementById("s1").innerHTML="In Valid name"
   }
}
function verify()
{
   var num=document.getElementById("i1").value 
   var reg=/^[A-Z]{1}(?=.*[0-9]{1,})(?=.*[a-z]{1,})(?=.*[!@#$%^]{1})/
   if(num.match(reg))
   {
      document.getElementById("i2").style.borderColor="green"
   }
   else{
      document.getElementById("i2").style.borderColor="red"
   }


}
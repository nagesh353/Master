function test()
{
 var mobileno=document.getElementById("i1").value
 var len=mobileno.length
 console.log(mobileno)
 var reg=/^(0||91)?[6-9][0-9]{9}$/
  if(mobileno.match(reg))
 {
    document.getElementById("i2").style.color="green"
    document.getElementById("i2").innerHTML="valid"
    document.getElementById("i1").style.outlineColor="green"
 }
  else
  {
    document.getElementById("i2").style.color="red"
    document.getElementById("i2").innerHTML="invalid mobileno"
    document.getElementById("i1").style.outlineColor="red"
    document.getElementById("i1").boxShadow=" 0px 0px 0px 2px red"
  }
}
function check()
{
  var name=document.getElementById("i3").value
  var reg=/[0-9]{3}$/
  var len=name.length
  if(name.match(reg)&& len==3)
  {
    document.getElementById("i4").style.color="green"
    document.getElementById("i4").innerHTML="valid"
    document.getElementById("i3").style.outlineColor="green"
 }
 else{
  document.getElementById("i4").style.color="red"
    document.getElementById("i4").innerHTML="invalid CVV"
    document.getElementById("i3").style.outlineColor="red"
    document.getElementById("i3").boxShadow =" 0px 0px 0px 2px red"
  }
 }
 function ok()
 {
  let name=document.getElementById("e1").value
  let re=/[0-9a-zA-Z][0-9a-zA-Z._]*@gmail[.]com$/
  if(name.match(re))
  {
    document.getElementById("s1").style.color="green"
    document.getElementById("s1").innerHTML="valid"

  }
  else{
    document.getElementById("s1").style.color="red"
    document.getElementById("s1").innerHTML="invalid"

  }
  
 }
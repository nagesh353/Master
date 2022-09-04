/*function test()
{
    var num = document.getElementById("i2").getAttribute("type")
    if(num=="password")
    {
        document.getElementById("i2").setAttribute("type","text")
        document.getElementById("i1").setAttribute("class","fa fa-eye-slash")
    }
    else{
        document.getElementById("i2").setAttribute("type","password")
        document.getElementById("i1").setAttribute("class","fa fa-eye")



    }
}*/
function show()
{
  var x=  document.getElementById("i3").checked
  if(x==true)
  {
    document.getElementById("i4").setAttribute("type","text")
  }
  else{
    document.getElementById("i4").setAttribute("type","password")

  }
}
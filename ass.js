function sub()
{
  var num=  document.getElementById("data").value
  var num1=document.getElementById("data1").value
  var result=num-num1
  document.write(result)
}
function add()
{
    var num=  document.getElementById("data").value
    var num1=document.getElementById("data1").value
    var result= parseInt(num)+parseInt(num1)
  //  document.write(result)
    document.getElementById("dd").innerHTML=result
  }
  function mul()
  {
    var num=  document.getElementById("data").value
    var num1=document.getElementById("data1").value
    var result= num*num1
    //document.write(result)
    document.getElementById("dd").innerHTML=result

  }
  
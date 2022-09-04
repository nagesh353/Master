function math()
{
    var num=document.getElementById("i3").value  
    var num1=num.length
    if(num1>0)
    {
        document.getElementById("i2").style.color="green"
       document.getElementById("i2").setAttribute("class"," fa fa-check-circle")
       document.getElementById("i1").removeAttribute("class")
     //  document.getElementById("i2").removeAttribute("disabled")
    }
    else{
        document.getElementById("i1").style.color="red"
        document.getElementById("i1").setAttribute("class","fa fa-exclamation")
        document.getElementById("i2").removeAttribute("class")
     //  document.getElementById("i1").removeAttribute("disabled")


    }
}
function test()
{
    var num = document.getElementById("msg").checked
    if(num)
    {
        document.getElementById("p1").setAttribute("type","text")
        document.getElementById("p1").style.color="green"
    }
    else{
        document.getElementById("p1").setAttribute("type","password")
        document.getElementById("p1").style.color="red"


    }
   // document.write(num)
}

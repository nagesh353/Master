function validName()
{
    var name=document.getElementById("i1").value   
    var reg=/[0-9!@#$%]/
    var len=name.length
    if(name.match(reg)|| len<2|| len>20)
    {
        document.getElementById("i1").style.boxShadow="red,10,10"
        document.getElementById("s1").style.color="red"
       document.getElementById("s1").innerHTML="Invalid"
s
    }
    else{
        document.getElementById("i1").style.borderColor="green"
        document.getElementById("s1").style.color="green"

        document.getElementById("s1").innerHTML="Valid"
    }
}
function test()
{
    var name=document.getElementById("f2").value 
    var regExp=/[0-9]/
    var len=name.length
    if(name.match(regExp) && len==3)
    {
        document.getElementById("f2").style.borderColor="green"
    }
    else{
        document.getElementById("f2").style.borderColor="red"
    }

}
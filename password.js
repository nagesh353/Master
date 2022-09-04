function checkCount()
{
    var num=document.getElementById("d1").value
    var PswLen=num.length
    if(PswLen>=8)
    {
        document.getElementById("s1").style.color="Green"
        document.getElementById("s1").innerHTML="strong"
        document.getElementById("d1").style.outlineColor="Green"
    }
    else if(PswLen>=4 && PswLen<8)
    {
        document.getElementById("s1").style.color="blue"
        document.getElementById("s1").innerHTML="medium"
        document.getElementById("d1").style.outlineColor="blue"


    }
    else{
        document.getElementById("s1").style.color="red"
        document.getElementById("s1").innerHTML="weak"
        document.getElementById("d1").style.outlineColor="red"


    }
    document.getElementById("length").innerHTML=PswLen
   // document.write("<center> Password length is:"+"<strong>"+PswLen+"</strong>"+"</center>")
   console.log(typeof(PswLen))
}
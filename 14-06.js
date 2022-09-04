function check()
{
    var num=document.getElementById("i1").value
    var res=num.length
    if(res==10)
    {
       var status= confirm("this page will navigate to another page")
       if(status)
       {
        window.open("thank you")
       }
    }
    else{
        alert("invlid number")

    }
}
function test()
{
    var num=prompt("Enter your name")
    var res=num.length
    if(res>0)
    {
    document.getElementById("f2").innerHTML="hello "+num+" welcome to coding world"

    }

    while(res==null)
    {
        prompt("entername")
    }

    
}

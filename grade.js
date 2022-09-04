function findGrade()
{
    var num =document.getElementById("i1").value
    if(num>80 && num<=100)
    {
        document.getElementById("s1").style.color="Green"
        document.getElementById("s1").innerHTML='A'

    }
    else if(num>60 && num<=80)
    {
        document.getElementById("s1").style.color="orange"
         document.getElementById("s1").innerHTML='B'
    }
    else if(num>=40 && num<=60)
    {
        document.getElementById("s1").style.color="blue"
        document.getElementById("s1").innerHTML='C'

    }
    else
    {
        document.getElementById("s1").style.color="red"
          document.getElementById("s1").innerHTML= 'F'
    }
}
function check()
{
    var number=document.getElementById("f3").value
    var count=0;
    while(number>0)
    {
        count++
        number/=10
    }
    if(count==10)
    {
        document.getElementById("f3").style.border="green"
    }
    else{
        document.getElementById("f3").style.border="red"


    }
}
function date()
{
    var temp=new Date()
    document.getElementById("d1").innerHTML=temp
    console.log(temp)
}
function time()
{
    var num=new Date()
    var hour=num.getHours()
    var min=num.getMinutes()
    var sec=num.getSeconds()
    document.getElementById("d1").innerHTML=hour+":"+min+":"+sec
}
function display()
{
    var date=new Date()
    var year=date.getFullYear()
    var mon=date.getMonth()+1
    var day=date.getDate()
    document.getElementById("d1").innerHTML=day+"-"+year+"-"+mon
    
}
function area()
{
    var num=document.getElementById("i1").value
    var arr=Math.PI*num*num
    document.getElementById("m1").innerHTML=Math.round(arr)
}
function click()
{
    var num=document.getElementById("b1").value  
    document.getElementById("e1").innerHTML=Math.sqrt(num)
}
function check()
{
    var data=document.getElementById("i4").value 
    var power=document.getElementById("i5").value 
    document.getElementById("e1").innerHTML=data +"<sup>"+ power+"</sup>"+"="+Math.pow(data,power)
}
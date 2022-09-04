function fact()
{
    var num=document.getElementById("d1").value
    var pro=1
    for(var i=1;i<=num;i++)
    {
          var pro=pro*i
    }
   // document.write(pro)
   document.getElementById("s1").innerHTML=pro
}
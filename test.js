function cube()
{
   var num= document.getElementById("s1").value
   var result=1
   for(var i=0;i<3;i++)
   {
    result=result*num

   }
   document.getElementById("s2").innerHTML=result
}
function square()
{
    var num= document.getElementById("s1").value
    var result=1
    for(var i=0;i<2;i++)
    {
     result=result*num
 
    }
    document.getElementById("s2").innerHTML=result

}
function fact()
{
   var num= document.getElementById("s1").value
   var result=1
   for(var i=1;i<=num;i++)
   {
    result=result*i
   }
   document.getElementById("s2").innerHTML=result


}
function Eve()
{
   var num= document.getElementById("s1").value
   if(num%2==0)
   {
    document.getElementById("s2").innerHTML="Even"
   }
   else
   {
    document.getElementById("s2").innerHTML="odd"


   }
}
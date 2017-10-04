function fibo(m,n)
{
var ar=new Array();
var i=0;
ar[i++]=0;
ar[i++]=1;
while(1)
{
	ar[i]=ar[i-1]+ar[i-2];
	i++;
	if(ar[i-1]+ar[i-2]>30)
	break;
}
return ar;
}

var c=new Array(fibo(1,30));
console.log(c);
console.log("\n");
module.exports=fibo



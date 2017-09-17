function fun(m,n)
{
console.log("1");
var c;var a=0;var b=1;
for (c=m;c<=n;)
{
	c=a+b;
	if(c<=n)
	{console.log(c);
	a=b;
	b=c;}
}
}

fun(1,30);



var a=[1,2,3];
var b=[4,5,6];
let c=[];
for(var i=0;i<3;i++)
{
  c.push(a.shift());
  c.push(b.shift());
}
console.log(c.sort());
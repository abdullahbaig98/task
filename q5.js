var inputarray=[3, 6, -2, -5, 7, 3];
var product=[];
var max=0;
for(var i=0;i<inputarray.length; i++){
  product[i]=inputarray[i]*inputarray[i+1];
  if(max<product[i]){
    max=product[i];
  }
}
console.log(max);


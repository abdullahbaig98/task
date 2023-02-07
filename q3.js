const a=[1,2,3,4,5,6,7];
const new_a=[];
var k=3;
for(var i=0;i<k;i++){
   
    
new_a.unshift(a.pop());
 
    
}


for(var i=3;i<6;i++){
   
    
new_a.push(a.shift());
     
        
    }
    console.log(new_a);
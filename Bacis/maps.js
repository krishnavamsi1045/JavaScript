const map = new Map();
map.set('IN','India');
map.set('AUS',"australia");
map.set('USA','united states of america');

//for of

for(const items of map){
    console.log(items);
}

//to print specific key or values or key and values

for(const [key,value] of map){
    console.log(key,':-',value);
}


//doesn't works
for(const items in map){
    console.log(items);
}

for (const [key,value] in map){
    console.log(key+value,map[key]);
}


//objects use for in loop 
//maps use for of loops
//arrays uses for of loop



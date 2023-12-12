var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color
function addChocolates(chocolates,x,z){
  if(z<=0){
    return "Number cannot be zero/negative"
  }
  
  for(let i=0;i<z;i++){
    chocolates.unshift(x);
  }
}

//Progression 2: Remove z chocolates from the top the dispenser
function removeChocolates(chocolates,z){
  let removedChocolates=[];
  if(z>chocolates.length){
    return "Insufficient chocolates in the dispenser"
  } else if(z<0){
    return "Number cannot be zero/negative"
  }

  for(let i=0;i<z;i++){
    removedChocolates.push(chocolates[i]);
  }
  return removedChocolates;

}

//Progression 3: Dispense z chocolates
function dispenseChocolates(chocolates,z){
  let removedChocolates=[];
  if(z>chocolates.length){
     return "Insufficient chocolates in the dispenser"
  }else if(z<=0){
    return "Number cannot be zero/negative"
  }
  else{
    removedChocolates=chocolates.splice(chocolates.length-z,z);
    removedChocolates.reverse();
    return removedChocolates;
  }  
}

//Progression 4: Dispense z chocolates of x color
function dispenseChocolatesOfColor(chocolates,number,color){
  let dispensedchocolates=[]
  if(number<=0){
    return "Number cannot be zero/negative"
  }else if(number>chocolates.length){
    return "Insufficient chocolates in the dispenser"
  }

  for(let i=0;i<chocolates.length;i++){
    if(chocolates[i]==color){
      dispensedchocolates.push(chocolates[i])
    }
  }
  return dispensedchocolates
}

//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates){
  if(chocolates.length==1){
    return [1]
  }
  let counts=[]
  
  let colours=["green", "silver", "blue", "crimson", "purple", "red", "pink"]
  for(let i=0;i<colours.length;i++){
    let count=0
    for(let j=0;j<chocolates.length;j++){
      if(colours[i]==chocolates[j]){
        count+=1
      }
    }
    if(count>0){counts.push(count)}
  }
//  console.log(counts)
  return counts
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates){
  chocolates.sort();
  let colorsOBJ=[];
  for(let i=0;i<chocolates.length;i++){
    let c=0;
    for(let j=0;j<chocolates.length;j++){
      if(chocolates[i]==chocolates[j]){
        c+=1
        
      }
    }
    colorsOBJ.push({name:chocolates[i],count:c});
  }
  let sortedArray=[]
  for(let i=0;i<colorsOBJ.length;i++){
    for(let j=i+1;j<colorsOBJ.length;j++){
      if(colorsOBJ[i].count < colorsOBJ[j].count){
        let temp = colorsOBJ[i];
        colorsOBJ[i]=colorsOBJ[j];
        colorsOBJ[j]=temp;
      }
    }
  }
  colorsOBJ.forEach((item)=>{
    sortedArray.push(item.name)
  })
  console.log(sortedArray)
  return sortedArray
}

//Progression 7: Change z chocolates of x color to y color
function changeChocolateColor(chocolates,n,c,fc){
  if(n<=0){
    return "Number cannot be zero/negative";
  }
  if(c==fc){
    return "Can't replace the same chocolates"
  }
  let count=0;
  for(let i=0;i<chocolates.length&&count<n;i++){
    if(chocolates[i]==c){
      chocolates[i]=fc
      count++
    }
  }
  return chocolates;
}

//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,c,fc){
  let count=0;
  if(c==fc){
    return "Can't replace the same chocolates"
  }
  for(let i=0;i<chocolates.length;i++){
    if(chocolates[i]==c){
      chocolates[i]=fc
    }
  }
  for(let i=0;i<chocolates.length;i++){
    if(chocolates[i]==fc){
      count++;
    }
  }
  console.log([count,chocolates])
  return [count,chocolates]
}

//Challenge 1: Remove one chocolate of x color from the top
function removeChocolateOfColor(chocolates,color){
  for(let i=0;i<chocolates.length;i++){
    if(chocolates[i]==color){
      chocolates.splice(i,1)
      break;
    }
  }
  return chocolates
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function dispenseRainbowChocolates(chocolates){
  let number=0;
  for(let i=0;i<chocolates.length;i++){
  let count=0;
    for(let j=i;j<chocolates.length;j++){
      if(chocolates[i]==chocolates[j]){
        count++
      }
    }
    if(count==3){
      number++
    }
  }
  return number
}



















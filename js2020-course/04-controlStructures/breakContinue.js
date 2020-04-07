const nums = [1, 2, 3, 4, 5 ,6 ,7 ,8 ,9 ,10]

for(let x in nums){
    if(x == 5){
        break
    }
    console.log(`xa_${x} = ${nums[x]}`)    
}
console.log("---------------------------------");
for(let x in nums){
    if(x == 5){
        continue
    }
    console.log(`xb_${x} = ${nums[x]}`)    
}
console.log("---------------------------------");
rotuloForExterno:
for(let a in nums){
    rotuloForInterno:
    for(let b in nums){
        if(a == 2 && b == 3)
            break rotuloForInterno
        console.log(`Par = ${a},${b}`);            
    }
}
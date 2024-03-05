let nums : number[] = [2,7,11,15]; 
let target: number = 9;
let sum: number = 0;
for (let i = 0; i < nums.length-1; i++) {
    let number1 : number = nums[i]
    for (let j = 1; j < nums.length; j++) {
        let number2 : number = nums[j]
        if (number1 + number2 == target) {
                console.log(i,j)  
            } else {
                break;
            }
        
    }
}



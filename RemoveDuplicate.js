let numbers = [12, 12, 14, 13, 11, 21, 21, 22, 22];

let withoutDuplicate = [...new Set(numbers)].sort((a,b)=>a-b); 
//removing duplicate ...new Set() + shorting the output ((a,b)=>a-b)


console.log("Actual Numbers :- "+numbers);

console.log("Numbers without duplicates are :-"+withoutDuplicate);

//Set → duplicates remove karta hai

// ... (spread operator) → Set ko wapas Array me convert karta hai
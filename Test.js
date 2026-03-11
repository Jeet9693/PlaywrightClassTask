let responses = [200, 201, 404, 500, 404, 200, 503];

let uniqueResponses = [... new Set(responses)];
console.log("Unique responses",uniqueResponses);

for(const response of responses){
    if(response >=200 && response <=299){
        console.log(`${response} is for successful`);
    }
    else{
        console.log(`${response} is a first unsuccess code`);
        break;
    }
}
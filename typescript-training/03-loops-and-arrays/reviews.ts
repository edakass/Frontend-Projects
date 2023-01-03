let reviews: number[] = [6,7,8.6,3,9];

let total: number = 0;

for(let i=0;i<reviews.length;i++){
    console.log(reviews[i]);
    total += reviews[i];
}

let average: number = total / reviews.length;
console.log("Review average = " + average);
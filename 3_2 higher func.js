function higherFunc(number) {
return function(number2){
    return number + number2;
};
}

const res1 = higherFunc(5);
const res2 = res1(3);

console.log(res2)
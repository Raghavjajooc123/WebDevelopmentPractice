console.log("this is module");
function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length;
};
function sum(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum;
};
module.exports = {
    sum:sum,
    avg:average,
}
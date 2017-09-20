var myVar = Number(0);
process.argv.forEach((val, index) => {
if(index > 1 ) {
  myVar += Number(val);
}
});
console.log(myVar);

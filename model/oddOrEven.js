const oddOrEven = function (firstValue, lastValue) {

    //let a = 10
    console.log('EVEN NUMBERS \n')
while(firstValue < lastValue){

   let remainder = (firstValue % 2)
     
   if(remainder== 0){
      console.log(`${firstValue} is even`)

   }firstValue++

}
    //return a + b

 }

const  oddOrEvenOdd= function (firstValue, lastValue) {

   console.log('\n ODD NUMBERS\n')
   //let a = 10
 while(firstValue < lastValue){

  let remainder = (firstValue % 2)
    
  if(remainder != 0){
     console.log(`${firstValue} is Odd`)

  }firstValue++

  }
}
module.exports={
    oddOrEven,
    oddOrEvenOdd

}
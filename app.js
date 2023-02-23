const { oddOrEven } = require("./model/oddOrEven")



//_________________________________________________________________________________________//

var readline = require('readline');

var dataInput = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

//_____________________________________________________________________________________//

dataInput.question('Please insert the first value\n',function(firstValue){
 valueFirst = firstValue

 if(firstValue == ''){
    console.log('Please insert all data')
    dataInput.close()

 }else if( 500 < firstValue || 0> firstValue){
    console.log('Please insert only values betrween 0 and 500')
    dataInput.close()

 }else if( isNaN(firstValue)){
    console.log('Please insert numeric values')
    dataInput.close()

 }else{
 dataInput.question('Please insert the last value\n', function(lastValue){
    valueLast = lastValue;

    if(lastValue == ''){
        console.log('Please insert all data')
        dataInput.close()
    
     }else if( 1000 < lastValue || 100> lastValue){
        console.log('Please insert only values betrween 0 and 500')
        dataInput.close()
    
     }else if( isNaN(lastValue)){
        console.log('Please insert numeric values')
        dataInput.close()
    
     }else{
        var evenOrOdd = oddOrEven(1,10)
        console.log(evenOrOdd)

     }
 })
 }
});
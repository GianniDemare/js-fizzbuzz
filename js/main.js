
// SCRIVI UN PROGRAMMA CHE STAMPI I NUMERI DA 1 A 100

for (let i = 1; i <= 100; i++) {

    // PER I MULTIPLI DI 3 STAMPI "FIZZI" E PER I MULTIPLI DI 5 STAMPI "BUZZ" 

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    
    } else if (i % 3 == 0) {
        console.log("Fizz");
    
    } else if (i % 5 == 0) {
        console.log("Buzz");
    
    } else {
        console.log(i);
    }

}

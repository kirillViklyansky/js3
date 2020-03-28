var counter =  function (){
    var count = 0;
    return function (n){
        if (n !== undefined){
            count = n;
            return count++;
        }else {
            return count++;
        }
    }
}();

console.log(counter()); // 0

console.log(counter()); // 1

console.log(counter(100)); // 100

console.log(counter()); // 101

console.log(counter(500)); // 500

console.log(counter()); // 501

console.log(counter(0)); // 0

console.log(counter());

var counting = function (){
     var number = 0;
     
     return {
        value(y){
            if (y !== undefined) number = y;
            return number;
        },
        increment(){
            number++;
        },
        decrement(){
            number--;
        }
    };
 }();

console.log(counting.value()); // 0

counting.increment();

counting.increment();

counting.increment();

console.log(counting.value()); // 3

counting.decrement();

counting.decrement();

console.log(counting.value()); // 1

console.log(counting.value(100)); // 100

counting.decrement();

console.log(counting.value()); // 99

console.log(counting.value(200)); // 200

counting.increment();

console.log(counting.value()); // 201


var myPow = function(x,y, cb){
    var pow = (x , n) => {
       if (n !== 1){
        return x *= pow(x , n-1);
        }else {
            return x;
        }
    }
    return cb(x,y, pow(x,y));
    
}

 function myPrint (a, b, res) {
    return a + "^" + b + "=" + res;
 }


console.log(myPow(3, 4, myPrint));  
console.log(myPow(2, 3, myPrint));

function infoAboutCar (){
    return this.name + " " + this. model + ", " + this.engine + "cc," + " year " + this.year  + ", " + this.used ;
}

var yearNow = new Date().getFullYear();
var car = {
    engine: 4000,
    model: "Panamera",
    name: "Porsche",
    year: 2018,
    info: infoAboutCar,
    get used() {
        return this.year !== yearNow ? 'used' : 'new';
      },
    set used (value){
        if(value === "new" && this.year < yearNow){
            this.year = yearNow;
        }
    }


}
var car2 = {
    engine: 5000,
    model: "Infinite",
    name: "FX50 AWD",
    year: 2020,
    info: infoAboutCar,
    get used (){
        return this.year !== yearNow ? "used" : "new";
    },
    set used (value){
        if(value === "new" && this.year < yearNow){
            this.year = yearNow;
        }
    }
 
}

console.log(car.info()); // Chevrovar Lacetti, 2000cc, year 2010, used
car.used = 'new';
console.log(car.info()); // Chevrovar Lacetti, 2000cc, year 2019, new -- год изменен
car.used = 'used';
console.log(car.info()); // Chevrovar Lacetti, 2000cc, year 2019, new -- изменения не выполняются
console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new
car.used = 'used';
console.log(car2.info());

var list = [12, 23, 100, 34, 56, 9, 233];

var myMax = function (arr){
    return Math.max.apply(null, arr);
}
console.log(myMax(list)); // 233




var myMul= function(a,b){
    return a*b;
} 

var myDouble = myMul.bind(null, 2);
var myTriple = myMul.bind(null, 3);

console.log(myDouble(3)); // = myMul(2, 3) = 6

console.log(myDouble(4)); // = myMul(2, 4) = 8

console.log(myDouble(5)); // = myMul(2, 5) = 10

console.log(myTriple(3)); // = myMul(3, 3) = 9

console.log(myTriple(4)); // = myMul(3, 4) = 12

console.log(myTriple(5)); // = myMul(3, 5) = 15

var notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];
var notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];

var myUniq = function(arr){

    var mySet = new Set();

     arr.forEach((value)=>{
         mySet.add(value);
     });

    return mySet;
}

console.log(myUniq(notUniqNums));
console.log(myUniq(notUniqStrings));
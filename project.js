function kilometerToMeter(kilometer) {
    var meter = kilometer*1000;
    return meter;
}
var result = kilometerToMeter(100);
console.log(result);
var result = kilometerToMeter(200);
console.log(result);



function budgetCalculator(watch,mobile,laptop){
    var watchPrice = watch*50;
    var mobilePrice = mobile*100;
    var laptopPrice = laptop*500;
    var totalBudget = watchPrice + mobilePrice + laptopPrice;
    return totalBudget;
}
var result = budgetCalculator(2,2,1);
console.log(result);



function hotelCost(day){
    var totalCost = 0;
 if(day <=10){
    totalCost = day * 100;
 } else if (day <= 20) {
    var firstPortion = 10 * 100;
    var remainingDays = day - 10;
    var secondPortion = remainingDays * 80;
    totalCost = firstPortion + secondPortion;
 } else {
    var firstPortion = 10 * 100;
    var secondPortion = 10 * 80;
    var remainingDays = day - 20;
    var thirdPortion = remainingDays * 50;
    totalCost = firstPortion + secondPortion + thirdPortion;   
 }
 return totalCost;
 }
var result = hotelCost(30);
console.log(result);



var friends = ['tonni', 'ruma', 'sheuly', 'touhida', 'kazimustari', 'nandini'];

function megaFriend(friends){
    var maxWord = friends[0]
    for(var i = 1; i<friends.length; i++){
        var element = friends[i];
        if(element.length>maxWord.length){
            maxWord = element;
        }
    }
    return maxWord;
}
var result = megaFriend(['tonni', 'ruma', 'sheuly', 'touhida', 'kazimustari', 'nandini']);
console.log(result);
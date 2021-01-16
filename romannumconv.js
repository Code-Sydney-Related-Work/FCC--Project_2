function convertToRoman(num)
{
    let unitsRem=0; let unitsQuo=0;
    let tensRem=0; let tensQuo=0;
    let thouRem=0; let thouQuo=0;
    let hundRem=0; let hundQuo=0;
    let romThou=''; let romHun=''; let romTen=''; let romUnit='';

    let romanArray = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XX','XXX','XL','L','LX','LXX','LXXX','XC','C','CC','CCC','CD','D','DC','DCC','DCCC','CM','M'];
    let decimalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
   
    let numString = num.toString(); let numlength = numString.length;  
    //console.log("The numString is: "+numString);console.log("The numlength is: "+numlength);

    //### The breaking down of the number into thousands, hundreds, tens and units ###
    if(numlength > 3){thouQuo = Math.floor(num/1000); thouRem = num%1000;
        hundQuo = Math.floor(thouRem/100); hundRem = thouRem%100;
        tensQuo = Math.floor(hundRem/10); tensRem = hundRem%10;
        unitsQuo = tensRem;}
    else if(numlength > 2){hundQuo = Math.floor(num/100); hundRem = num%100;
        tensQuo = Math.floor(hundRem/10); tensRem = hundRem%10;
        unitsQuo = tensRem;}
    else if(numlength > 1){tensQuo = Math.floor(num/10); tensRem = num%10;
        unitsQuo = tensRem;}
    else if(numlength > 0){unitsQuo = num;}
    //console.log("The thousandQ is: "+thouQuo, " The hundredQ is: "+hundQuo, " The tenQ is: "+tensQuo, " The unitQ is: "+unitsQuo);  
    
    //### The conversion into Roman numerals
    if(thouQuo > 0 && thouQuo < 4){for(let i = 0; i < thouQuo; i++){romThou += romanArray[decimalArray.indexOf(1000)];}}
    if(hundQuo > 0){romHun = romanArray[decimalArray.indexOf(hundQuo*100)];}
    if(tensQuo > 0){romTen = romanArray[decimalArray.indexOf(tensQuo*10)];}
    if(unitsQuo > 0){romUnit = romanArray[decimalArray.indexOf(unitsQuo)];}
    let resultR = romThou+romHun+romTen+romUnit;
    return resultR;
    }   
module.exports = convertToRoman;        

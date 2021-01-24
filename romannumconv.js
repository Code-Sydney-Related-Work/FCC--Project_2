function convertToRoman(num)
{
    let unitsRem=0; let unitsQuo=0;
    let tensRem=0; let tensQuo=0;
    let thouRem=0; let thouQuo=0;
    let hundRem=0; let hundQuo=0;
    let romThou=''; let romHun=''; let romTen=''; let romUnit='';

   XXXXXXXXXXXXXXXXXXX PORTION OF CODE DELETED TO PROTECT INTELLECTUAL PROPERTY XXXXXXXXXXXXXXXXXXXXXXXXXXX
    
    //### The conversion into Roman numerals
    if(thouQuo > 0 && thouQuo < 4){for(let i = 0; i < thouQuo; i++){romThou += romanArray[decimalArray.indexOf(1000)];}}
    if(hundQuo > 0){romHun = romanArray[decimalArray.indexOf(hundQuo*100)];}
    if(tensQuo > 0){romTen = romanArray[decimalArray.indexOf(tensQuo*10)];}
    if(unitsQuo > 0){romUnit = romanArray[decimalArray.indexOf(unitsQuo)];}
    let resultR = romThou+romHun+romTen+romUnit;
    return resultR;
    }   
module.exports = convertToRoman;        

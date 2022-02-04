function convertToRoman(num) {
  let numeroRomano = "";
  while(num > 0){
  if(num <= 3){
    numeroRomano += "I";
    num -= 1;
  }else if (num === 4){
    numeroRomano += "IV";
    num -= 4;
  }else if (num >= 5 && num <= 8){
    numeroRomano += "V";
    num -= 5;
  }else if (num === 9){
    numeroRomano += "IX";
    num -= 9;
  }else if (num >= 10 && num <= 39){
    numeroRomano += "X";
    num -= 10;
  }else if (num >= 40 && num <= 49){
    numeroRomano += "XL";
    num -= 40;
  }else if (num >= 50 && num <= 89){
    numeroRomano += "L";
    num -= 50;
  }else if (num >= 90 && num <= 99){
    numeroRomano += "XC";
    num -= 90;
  }else if (num >= 100 && num <= 300){
    numeroRomano += "C";
    num -= 100;
  }else if (num >= 400 && num <= 499){
    numeroRomano += "CD";
    num -= 400;
  }else if (num >= 500 && num <= 799){
    numeroRomano += "D";
    num -= 500;
  }else if (num >= 800 && num <= 899){
    numeroRomano += "DCCC";
    num -= 800;
  }else if (num >= 900 && num <= 999){
    numeroRomano += "CM";
    num -= 900;
  }else if (num >= 1000 && num <= 1999){
    numeroRomano += "M";
    num -= 1000;
  }else if (num >= 2000 && num <= 3999){
    numeroRomano += "MM";
    num -= 2000;
  }
}
  return numeroRomano;
}
console.log(convertToRoman(3999));

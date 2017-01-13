class RomanConverter {

    convert(dec) {
        
        //roman numerals 0 - 99
        let ones = ["\u0020", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
        let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
        let ten = [];
        let one = [];
        let romArr = [];
        let year88 = 0;

        //concat ones and tens
        for (let i = 0; i < dec.length; i++) {
            ten[i] = Math.floor(dec[i] / 10);
            one[i] = dec[i] % 10;
            if (parseInt(dec[dec.length - 1]) === 88) {
                year88 = 2
                romArr[i] = ((tens[ten[i]] + ones[one[i]]) + "\u0020\u0020\u0020\u0020\u0020\u0020\u0020").slice(0, 8);
            } else {
                year88 = 1;
                romArr[i] = ((tens[ten[i]] + ones[one[i]]) + "\u0020\u0020\u0020\u0020\u0020\u0020").slice(0, 7);
            }

        }

        return new HtmlTable().create(romArr, dec, year88, undefined);

    }
}
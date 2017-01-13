class RomanConverter {

    convert(dec) {
        let colName = ["1", "2", "3", "4", "5", "6", "7", "8"];
        //roman numerals 0 - 99
        let ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
        let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
        let ten = [];
        let one = [];
        let romArr = [];
        let year88 = 0;

        //additional cols when year = 88
        (parseInt(dec[dec.length - 1]) === 88)
            ? year88 = 2
            : year88 = 1;
        //concat ones and tens
        for (let i = 0; i < dec.length; i++) {
            ten[i] = Math.floor(dec[i] / 10);
            one[i] = dec[i] % 10;
            romArr[i] = (tens[ten[i]] + ones[one[i]]);
        }

        return new HtmlTable().create(romArr, dec, year88, colName);

    }
}
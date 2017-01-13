class HtmlTable {

    create(numArr, dec, addCol, firstRow) {
        let str = "";

        if (firstRow !== undefined) {
            str += "<tr>";
            for (let i = numArr.length + addCol; i >= 0; i--) {
                (i === numArr.length + addCol)
                    ? str += `<th id="btmRight"></th>`
                    : str += `<th id="bottom">${firstRow[i]}</th>`;
            }
            str += "</tr>";
        }
        //rows for binary numbers of each time unit
        for (let i = 0; i < numArr.length; i++) {
            str += "<tr>";
            for (let j = 0; j <= numArr[i].length; j++) {
                //first column (j = 0) contains time units in dec, else binary numbers
                (j === 0)
                    ? str += `<th class="dec">${dec[i]}</th>`
                    : str += `<td class="bin">${numArr[i][j - 1]}</td>`;
            }
            str += "</tr>";
        }
        return str;
    }
}
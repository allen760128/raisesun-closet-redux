import React from 'react';

const Array = () => {
    //請寫出一個叫做 starReturn 的 function 並且接受一個參數 n，能回傳 n 個 *
    const star = (n) => {
        let x = '';

        for (let i = 0; i < n; i++) {
            x = x + '*'
        }
        return x
        // console.log(x)
    }
    // console.log(star(5))

    //請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，
    //回傳這個字串的第一個字母是否為大寫
    const isUpperCase = (x) => {
        if (x.charAt(0) === x.charAt(0).toUpperCase()) {
            return 'true'
        } return 'false'
    }
    // console.log(isUpperCase('aDD'))

    //請寫一個 function position，接收一個字串並回傳這個字串裡面的
    //第一個大寫字母跟它的 index，若沒有則回傳 -1
    const position = (x) => {
        const y = x.match(/[A-Z]/);
        // console.log(y[0], y.index + 1)
        if (y) {
            return `${y[0]} ${y.index + 1}`
        } return -1
    }
    // console.log(position('abcC'))

    //請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，
    //回傳有多少個數小於 n
    const findSmallCount = (x, y) => {
        const num = x.filter(c => c < y).length;
        return num;
    }
    // console.log(findSmallCount([1, 2, 3, 4, 5], 3))

    //請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，
    // 回傳陣列裡面所有小於 n 的數的總和
    const findSmallTotal = (x, y) => {
        const num = x.filter(c => c < y).reduce((a, b) => a + b);
        return num;
    }
    // console.log(findSmallTotal([1, 2, 3, 4, 5], 5))

    //請寫一個函式 findAllSmall，接收一個陣列跟一個數字 n，
    // 回傳一個裡面有所有小於 n 的數的陣列（需按照原陣列順序）
    const findAllSmall = (x, y) => {
        const num = x.filter(c => c < y);
        return num;
    }
    // console.log(findAllSmall([1, 2, 3, 4, 5], 5))

    //請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和
    const sum = (x) => {
        const total = x.filter(c => c).reduce((a, b) => a + b);
        return total;
    }
    // console.log(sum([1, 2, 3, 4, 5, 6]))

    //請寫出一個 function stars，接收一個參數 n，並且按照規律印出相對應的圖案
    const starlayer = (x) => {
        let m = '';
        for (let i = 0; i < x; i++) {
            m = m + '*'
            // console.log(m)
        }
        return m
    }
    starlayer(5)

    //請寫出一個 function makeStars，接收一個參數 n，並且根據規律「回傳」字串
    const makeStars = (x) => {
        let arr = [];
        let m = '';
        for (let i = 0; i < x; i++) {
            m = m + '*';
            arr.push(m)

        };
        return arr.join('/n');
    }
    // console.log(makeStars(5))

    //請寫出一個函式 reverse，接收一個字串，並且回傳反轉過後的字串。（禁止使用內建函式 reverse）
    const reverase = (x) => {
        let rev = '';

        for (let i = x.length - 1; i >= 0; i--) {
            rev = rev + x[i]
        }
        return rev
    }
    // console.log(reverase('54321'))

    //請寫一個函式 swap，接收一個字串，並且回傳大小寫互換後的字串
    const swap = (x) => {
        let m = [];
        let mm = x.split().toString();
        for (let i = 0; i < mm.length; i++) {
            if (mm[i].match(/[A-Z]/)) {
                let f = mm[i].toLowerCase()
                m.push(f)
            } else {
                let f = mm[i].toUpperCase()
                m.push(f)
            }
        }
        //replace中為正規表達式(亦可換為replaceAll(',',''))
        const toM = m.toString().replace(/,/g, '');
        return toM
    }
    // console.log(swap('aATeHt'))

    //請寫出一個函式 findMin，接收一個陣列並回傳陣列中的最小值。
    // （禁止使用內建函式 sort）
    const findMin = (x) => {
        // let minnum = x[0]
        // for (let i = 0; i < x.length; i++) {
        //     if (minnum > x[i]) {
        //         minnum = x[i]
        //     }
        // }
        // return minnum;
        let minnum = Math.min(...x);
        return minnum
    }
    // console.log(findMin([18, 5, 6, 10, 3, -55, 64, 78, 5]))

    //請寫一個 function findNthMin，接收一個陣列以及一個數字 n，
    // 找出第 n 小的數字。（禁止使用內建函式 sort）
    const findNthMin = (x, y) => {
        const newarr = [...x];//先複製陣列，另外，用...可以把陣列變成純number
        let rearr = ''//做一個假的全域變數，方便for裡面結果存入

        for (let i = 0; i < y; i++) {
            const minnum = Math.min(...newarr);//用複製陣列來取得最小值
            const newindex = newarr.indexOf(minnum);//取得最小值的index
            const replace = newarr.splice(newindex, 1);//再從複製陣列裡把最小值切掉，方便下一輪for繼續抓一次最小值
            const newmin = Math.min(...replace);//從新的陣列繼續抓最小值
            rearr = newmin;//將新的最小值存入外側變數
            // console.log(newarr)
        }
        return rearr
    }
    // console.log(findNthMin([6, 2, 8, 4, 5], 4))


    //排序由大到小
    // console.log([6, 2, 8, 4, 5].sort((a, b) => (b - a)))


    //請寫一個 function sort，接收一個陣列並且回傳由小到大排序後的陣列。
    // （禁止使用內建函式 sort）
    const sort = (x) => {
        const reArr = [...x];
        const newArr = [];
        for (let i = 0; i < x.length; i++) {
            const minNum = Math.min(...reArr);
            newArr.push(minNum)
            const indexArr = reArr.indexOf(minNum);
            const spliceArr = reArr.splice(indexArr, 1)
        }
        return newArr
    }
    // console.log(sort([6, 8, 3, 2, 1]))

    //請寫出一個 function flatten，接收一個多維陣列並回傳「壓平」後的陣列。
    const flatten = (x) => {
        const reArr = [...x];
        // console.log(reArr)
    }
    // console.log(flatten([1, [2, [3, [4]], 5], 6]))
    return (
        <div></div>
    )
}

export default Array;
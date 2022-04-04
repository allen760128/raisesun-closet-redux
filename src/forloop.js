import React from 'react';

const Forloop = () => {
    const star = (n) => {
        let x = '';

        for (let i = 0; i < n; i++) {
            x = x + '*'
        }
        return x
        // console.log(x)
    }
    console.log(star(5))

    const isUpperCase = (x) => {
        if (x.charAt(0) === x.charAt(0).toUpperCase()) {
            return 'true'
        } return 'false'
    }
    console.log(isUpperCase('aDD'))

    const position = (x) => {
        const y = x.match(/[A-Z]/);
        // console.log(y[0], y.index + 1)
        if (y) {
            return `${y[0]} ${y.index + 1}`
        } return -1
    }
    console.log(position('abcC'))
    return (
        <div>
        </div>
    )
}

export default Forloop;
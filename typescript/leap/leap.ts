function isLeapYear(year: number) {
    if (divisibleBy(400)(year)) {
        return true
    }

    if (divisibleBy(4)(year) && !divisibleBy(100)(year)) {
            return true
    }

    return false
}

const divisibleBy = (denominator: number) => (numerator: number): boolean =>
    numerator % denominator === 0

    export default isLeapYear
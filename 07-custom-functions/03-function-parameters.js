/*const getLastChar = (text) => {
    return text[text.length - 1];
}
console.log(getLastChar('Winter'));

const getLastChar = (str) => {
    return str[str.length - 1];
};
console.log(getLastChar('Winter'));

const average = (a, b) => {
    return (a + b) / 2;
};
console.log(average(1, 5)); */

const truncate = (text, length) => {
    return text.slice(0, length) + '...';
}
console.log(truncate('текст', 3));
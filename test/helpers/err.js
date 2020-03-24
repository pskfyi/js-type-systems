// Useful in ternaries where you can't do " : throw new Error"
export default msg => { throw new Error(msg) }
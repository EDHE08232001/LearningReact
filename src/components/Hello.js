/*
function Hello() {
    return <h1>Hello World</h1>;
}
*/

const name = "Edward He";
// using ES6 syntax
const Hello = () => <h1>Hello World {name}!</h1>; // what is return here is JSX, which stands for javascript xml

export default Hello;
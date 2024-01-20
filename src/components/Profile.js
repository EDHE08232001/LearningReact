/*
the complete function
function Profile({ firstName, lastName, children }) {
    return <h1>Anything</h1>;
}
*/

/*
destructuring props
function Profile(props) {
    const {firstName, lastName} = props;

    return (
        <h1>{firstName} {lastName}</h1>
    );
}
*/

function Profile(props) {
    return <h1>Name: {props.firstName} {props.lastName}; {props.children}</h1>;
}

export default Profile;
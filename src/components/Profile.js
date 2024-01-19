function Profile(props) {
    return <h1>Name: {props.firstName} {props.lastName}; {props.children}</h1>;
}

export default Profile;
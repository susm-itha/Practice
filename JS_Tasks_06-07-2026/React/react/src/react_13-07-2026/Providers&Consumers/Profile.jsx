import UserContext from "./Usercontexts";

function Profile() {
  return (
    <UserContext.Consumer>
      {(name) => <h2>Hello {name}</h2>}
    </UserContext.Consumer>
  );
}

export default Profile;
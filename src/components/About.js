// import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass"; // can be used instead of Outlet
import ProfileFunctionalComponent from "./Profile";
import { Component } from "react";
import UserContext from "../utils/UserContext";

const About2 = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>Chapter-07-Finding the Path</h2>
      {/* <Outlet/> */}
      <ProfileFunctionalComponent name={"Chinmayi"}/>
      <Profile name={"Chinmayi"}/>
    </div>
  );
};

class About extends Component {
  constructor(props){
    super(props);
    console.log("Parent - Inside About constructor");
  }

  componentDidMount() {
    console.log("Parent - Inside About componentDidMount");
  }

  render () {
    console.log("Parent - Inside About render");
    return (
      <div>
      <h1>About</h1>
      <h2>Chapter-07-Finding the Path</h2>
      <UserContext.Consumer>
        {({ user })=> (
          // console.log(user);
          <h4 className="font-bold text-xl p-10">{user.name} - {user.email}</h4>
        )}
      </UserContext.Consumer>
      {/* <Outlet/> */}
      {/* <ProfileFunctionalComponent name={"Chinmayi"}/> */}
      <Profile name={"Child 1"}/>
      {/* <Profile name={"Child 2"}/> */}
    </div>
    )
  }
}

export default About;

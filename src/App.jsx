import React, { Component } from "react";
import "./App.css";

// component class start here, an object is created here
class App extends Component {
  state = {
    // object with the given properties
    person: {
      fullName: "Sani Auwal",
      bio: "I am a MERN FullStack Web Developer",
      imgSrc: "profilePicture.jpeg", // Example image URL
      profession: "Web Developer",
    },
    show: false,
    mountTime: null,
  };
  // here is the  function for mounting time
  componentDidMount() {
    this.setState({ mountTime: new Date() });

    // here is the code to set up an interval to update the mounted time every second
    this.intervalId = setInterval(() => {
      this.forceUpdate(); // Force update to re-render and display updated time
    }, 1000);
  }
  //
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };
  // this is the part of the code that the function will return and it will rendered on the browser
  render() {
    const { person, show, mountTime } = this.state;

    return (
      <div className="App app-div">
        <h1>My Profile </h1>
        <button className="toggleBtn" onClick={this.toggleShow}>
          Toggle Profile
        </button>
        {/* here image and profile returns when toggle is show */}
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <div className="div-image">
              <img
                width={300}
                height={400}
                src={person.imgSrc}
                alt={person.fullName}
              />
            </div>

            <h2>Bio: {person.bio}</h2>
            <h3>Profession: {person.profession}</h3>
          </div>
        )}
        <h4>
          Time since mount: {Math.floor((new Date() - mountTime) / 1000)}{" "}
          seconds
        </h4>
      </div>
    );
  }
}

export default App;

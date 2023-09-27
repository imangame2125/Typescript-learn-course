import React from "react";
import { Greet } from "./components/pages/Greet";
import Person from "./components/pages/Person";
import PersonList from "./components/pages/PersonList";
import Status from "./components/pages/Status";
import Heading from "./components/pages/Heading";
import { Wrapper } from "./components/pages/Wrapper";

function App() {
  const personName = {
    firstName: "iman",
    lastName: "majd",
  };

  const nameList = [
    {
      firstName:'Ali',
      lastName:'Rezayie'
    },

    {
      firstName:'Nader',
      lastName:'Nasimi'
    },


    {
      firstName:'Sahar',
      lastName:'Setayesh'
    },


    {
      firstName:'Mina',
      lastName:'Mohammadi'
    },
  ]
  return (
    <div className="App">
      <Greet name="Iman" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList}/>
      <Status status="success"/>
      <Heading>
        This is a Heading site.
      </Heading>
      <Wrapper>
        <Heading>This is Wrapper component.</Heading>
      </Wrapper>
      <Greet name='Mina' isLoggedIn={true}/>
    </div>
  );
}

export default App;

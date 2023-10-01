import React from "react";

type ProfileProps = {
  name: string;
};

const Profile = ({ name }: ProfileProps) => {
  return <div>private profile component. Name is {name}</div>;
};

export default Profile;

import React from "react";
import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
    nameOfMyUser: string;
}

function Followers() {
    const context = useOutletContext<IFollowersContext>();
    return <h1>Here are {nameOfMyUser}'s followers</h1>;
}

export default Followers;
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub(){ 
    const data = useLoaderData()

    return(
        <div>
            <h3>GitHub User Name: {data.name}</h3>
            <h3>GitHub Login: {data.login}</h3>
            <h3>GitHub Followers: {data.followers}</h3>
        </div>
    );
}

export default GitHub;
export const fetchGitApiDataLoader = async () => { 
    const response = await fetch('https://api.github.com/users/RutwikRMC');
    return response.json();
};
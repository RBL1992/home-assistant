import React from "react";
import {Link} from 'react-router-dom';

function Home() {
    return (
      <h1>.home jackson ... rob make a cool logo
        <Link to={"/signup"}>
          <button>signup</button> 
          </Link>
      </h1>
    )
}

export default Home;
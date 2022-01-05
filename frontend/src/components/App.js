import React from "react";
import { ResponsiveNeoGraph } from "./NeoGraph";

const NEO4J_URI = process.env.REACT_APP_NEO4J_URI 
const NEO4J_USER = process.env.REACT_APP_NEO4J_USER
const NEO4J_PASSWORD = process.env.REACT_APP_NEO4J_PASSWORD

const App = () => {
  return (
    <div className="App" style={{ fontFamily: "Quicksand" }}>
      <h1>React Neovis</h1>
      <h4>Twitter Example</h4>
      <code>MATCH (user:User)-[rel:POSTS]-(tweet:Tweet) RETURN user,rel,tweet LIMIT 2000</code>
      <ResponsiveNeoGraph
        containerId={"id0"}
        neo4jUri={NEO4J_URI}
        neo4jUser={NEO4J_USER}
        neo4jPassword={NEO4J_PASSWORD}
        labels={{
          "Tweet": {
            "size": 1,
          },
          "User": {
            "caption": "username",
            "size": 5000,
          }
        }}
        relationships={{
          "POSTS": {
            "thickness": "weight",
            "caption": false
          }
        }}
      initial_cypher="MATCH (user:User)-[rel:POSTS]-(tweet:Tweet) RETURN user,rel,tweet LIMIT 2000"
      />
    </div>
  );
};

export default App;

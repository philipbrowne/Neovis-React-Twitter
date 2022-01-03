import React from "react";
import { ResponsiveNeoGraph } from "./NeoGraph";

const NEO4J_URI = process.env.REACT_APP_NEO4J_URI 
const NEO4J_USER = process.env.REACT_APP_NEO4J_USER
const NEO4J_PASSWORD = process.env.REACT_APP_NEO4J_PASSWORD

const App = () => {
  return (
    <div className="App" style={{ fontFamily: "Quicksand" }}>
      <h1>React Neovis</h1>
      <h4>Actors Example</h4>
      <code>MATCH (n)-[r:ACTED_IN]->(m) RETURN * LIMIT 45</code>
      <ResponsiveNeoGraph
        containerId={"id0"}
        neo4jUri={NEO4J_URI}
        neo4jUser={NEO4J_USER}
        neo4jPassword={NEO4J_PASSWORD}
        labels={{
          "Person": {
            "caption": "name",
            "title_properties": [
              "name",
              "pagerank"
            ]
          },
          "Movie": {
            "caption": "title",
            "title_properties": [
              "title", "released", "tagline"
            ]
          }
        }}
        relationships={{
          "ACTED_IN": {
            "thickness": "weight",
            "caption": true
          }
        }}
      initial_cypher="MATCH (n)-[r:ACTED_IN]->(m) RETURN * LIMIT 45"
      />
      <h4>Directors Example</h4>
      <code>MATCH (n)-[r:DIRECTED]->(m) RETURN * LIMIT 45</code>
      <ResponsiveNeoGraph
        containerId={"id1"}
        neo4jUri={NEO4J_URI}
        neo4jUser={NEO4J_USER}
        neo4jPassword={NEO4J_PASSWORD}
        labels={{
          "Person": {
            "caption": "name",
            "title_properties": [
              "name",
              "pagerank"
            ]
          },
          "Movie": {
            "caption": "title",
            "title_properties": [
              "title", "released", "tagline"
            ]
          }
        }}
        relationships={{
          "DIRECTED": {
            "thickness": "weight",
            "caption": true
          }
        }}
      initial_cypher="MATCH (n)-[r:DIRECTED]->(m) RETURN * LIMIT 45"
      />
    </div>
  );
};

export default App;

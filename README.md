# Neo4J/NeoVis with React and Movie Database Example

Uses Movies Graph DB with Neo4J

Current Example Queries:

`MATCH (n)-[r:ACTED_IN]->(m) RETURN * LIMIT 45`

`MATCH (n)-[r:DIRECTED]->(m) RETURN * LIMIT 45`

Uses NeoVis.js and React-NeoVis

https://github.com/neo4j-contrib/neovis.js/

https://github.com/jackdbd/react-neovis-example

To Launch Local Deployment in Project Folder:

`docker-compose up`

Open browser to http://localhost:3000

To view current Neo4j database locally, open browser to http://localhost:7474



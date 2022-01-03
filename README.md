# Neo4J/NeoVis with React and Movie Database Example

Uses Movies Graph DB with Neo4J

Current Example Queries:

`MATCH (n)-[r:ACTED_IN]->(m) RETURN * LIMIT 45`

`MATCH (n)-[r:DIRECTED]->(m) RETURN * LIMIT 45`

`MATCH (n)-[r:PRODUCED]->(m) RETURN * LIMIT 45`

`MATCH (n)-[r]->(m) RETURN * LIMIT 75`

`MATCH (n:Person)-[r]->(m:Movie) WHERE n.name = 'Keanu Reeves' RETURN *`

Uses NeoVis.js and React-NeoVis

https://github.com/neo4j-contrib/neovis.js/

https://github.com/jackdbd/react-neovis-example

To Launch Local Deployment in Project Folder (must have Docker installed - https://docs.docker.com/get-docker/):

`docker-compose up`

Open browser to http://localhost:3000

To view current Neo4j database locally, open browser to http://localhost:7474

![Screenshot](/screenshot.png?raw=true "Screenshot")


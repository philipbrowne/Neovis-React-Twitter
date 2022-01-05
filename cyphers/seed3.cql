MATCH (tweet:Tweet)
MATCH (user:User {username: tweet.username})
MERGE (user)-[:POSTS]->(tweet)
FROM neo4j:latest
ENV NEO4J_AUTH=none
COPY wrapper.sh wrapper.sh
RUN ["chmod", "+x", "./wrapper.sh"]
COPY tweets.csv import/tweets.csv
COPY users.csv import/users.csv
VOLUME /cyphers
ENTRYPOINT ["./wrapper.sh"]
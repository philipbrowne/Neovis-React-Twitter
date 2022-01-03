FROM neo4j:latest
ENV NEO4J_AUTH=none
COPY wrapper.sh wrapper.sh
RUN ["chmod", "+x", "./wrapper.sh"]
VOLUME /cyphers
ENTRYPOINT ["./wrapper.sh"]
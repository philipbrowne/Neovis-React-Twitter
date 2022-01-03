<script type="text/javascript">

        var viz;

        function draw() {
            var config = {
                container_id: "viz",
                server_url: "bolt://localhost:7687",
                server_user: "neo4j",
                server_password: "secret",
                labels: {
                    "Character": {
                        "caption": "name",
                        "size": "pagerank",
                        "community": "community",
                        "title_properties": [
                            "name",
                            "pagerank"
                        ]
                    }
                },
                relationships: {
                    "INTERACTS": {
                        "thickness": "weight",
                        "caption": false
                    }
                },
                initial_cypher: "MATCH (n) RETURN n"
            };

            viz = new NeoVis.default(config);
            viz.render();
        }
    </script>
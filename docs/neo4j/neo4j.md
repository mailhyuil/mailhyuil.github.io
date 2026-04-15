# neo4j

## install

```sh
npm i neo4j-driver
```

## docker

```sh
docker run \
  --name neo4j \
  -p 7474:7474 \
  -p 7687:7687 \
  -e NEO4J_AUTH=neo4j/password \
  -d neo4j:5

docker run \
  --name neo4j \
  -p 7474:7474 \
  -p 7687:7687 \
  -e NEO4J_AUTH=neo4j/password \
  -v $PWD/neo4j/data:/data \
  -v $PWD/neo4j/logs:/logs \
  -v $PWD/neo4j/import:/import \
  -v $PWD/neo4j/plugins:/plugins \
  -d neo4j:5
```

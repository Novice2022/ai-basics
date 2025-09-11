# Typescript environment with Vite on Nodejs 24.8

## HOWTO

### Build the image using `node.docker` dockerfile

``` bash
docker build -t ts-env -f node.docker .
```

### Run the container in detached mode

``` bash
docker run -dt --publish 5173:5173 --name typescript -v ./src/:/workspace/ ts-env:latest
```

### Open the container in interactive mode

``` bash
docker exec -it typescript bash
```

## Quick start

### Run commands to enter to the typescript container

``` bash
docker build -t ts-env -f node.docker .
docker run -dt --publish 5173:5173 --name typescript -v ./src/:/workspace/ ts-env:latest
docker exec -it typescript bash
```

# AI using TypeScript

## Quick start

### Run commands to enter to the typescript container

``` bash
docker build -t ts-env -f node.docker .
docker run -dt --publish 5173:5173 --name typescript -v ./src/:/workspace/ ts-env:latest
docker exec -it typescript bash
npm i
```

### Run vite

``` bash
npm run dev
```

### Run `main.ts` script using nodejs

``` bash
npx tsx src/main.ts
```

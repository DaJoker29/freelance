# Freelance Page
Single Page Site for my freelance web development business

build instructions
-------------------

first, use [node/npm](https://nodejs.org/) to install dependencies

```
npm install
```

next, use [grunt](http://gruntjs.com/) to build project

```
grunt prod
```
**-- or --**
```
grunt dev
```
> production is compressed and uglified. development is uncompressed with sourcemaps.

> *default `grunt` command will build development version and launch `grunt watch` to jump straight into coding*
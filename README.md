GrUSP website
---

####Site notes

To run [Jekyll][jekyll] from terminal:

```
$ jekyll serve
```

or, via Docker:

```
docker-compose up -d
```


When [Jekyll][jekyll] is up, the site can be tested locally to [0.0.0.0:4000](http://0.0.0.0:4000)

---

#### Front-end notes

To install module to run front-size, from the root folder in terminal:

```
$ npm install
```

To generate CSS styles with front-size run from the root folder in terminal:

```
$ grunt watch:develop
```

[jekyll]: http://jekyllrb.com

### Using Docker to build the website:

```
docker-compose run site npm install
docker-compose run site jekyll build
```
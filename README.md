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
docker-compose run --rm site jekyll build
```

Likewise, Docker can be used to build the frontend:
```
docker-compose run --rm site bash
```

and:

```
npm install
npm install --global grunt
grunt watch:develop
```

In case of Ruby / Gems errors:

```
./update-gems-with-docker.sh
```

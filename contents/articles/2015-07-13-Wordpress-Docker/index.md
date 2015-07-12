---
title: Wordpress + Docker + Github
date: 2015-07-13
author: Benjamin Sternthal
template: article.jade
---

Working with Wordpress and Git for me has been a challenge. Ideally I want to keep just my plugins
and theme in version control and keep all the Wordpress files (that I would never edit) seperate. You can accomplish this manually but how would this work if you are using Docker for local development?

<span class="more"></span>

Docker.. actually makes this easy and quite elegant.

With Docker you are able to leverage the Wordpress container and just have your theme and plugins
in version control. Amazing.

Below is the docker-compose file, a project template using this can be found in this
[github repo](https://github.com/bensternthal/wordpress-docker-template).


## Example docker-compose File:

```dockerfile
web:
  image: wordpress:4.2.2-apache
  links:
    - db:mysql
  ports:
    - "3000:80"
  volumes:
    - plugins/:/var/www/html/wp-content/plugins
    - themes/:/var/www/html/wp-content/themes
db:
  image: mariadb
  environment:
    MYSQL_ROOT_PASSWORD: example
```

**image** This pulls a specific version of wordpress. Use this to match whatever you are developing
against. The list of available versions can be found in the [docker registry](https://registry.hub.docker.com/_/wordpress/tags/manage/)

**volumes** This mounts your plugin folder at the correct location within the container.

That is all!

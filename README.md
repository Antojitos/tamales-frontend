Tamales Frontend
================

A very simple frontend for the Tamales API https://github.com/Antojitos/tamales


Install
-------

Download and install the latest version into a directory served by
your web server, for example if the document root of your site is
`/var/www/tamales` you can run:
```
mkdir -p /var/www/tamales
cd /var/www/tamales
wget https://github.com/Antojitos/tamales-frontend/archive/master.tar.gz
tar --strip-components=1 -zxvf master.tar.gz
rm master.tar.gz
```

To use a self-hosted version of the Tamales API you need to
change the API endpoint, edit `js/tamales.js` and replace

```
var tamales_api = "http://t.antojitos.io/api/v1/urls";
```

with your own server address, for example

```
var tamales_api = "http://tamales.example.com/api/v1/urls";
```

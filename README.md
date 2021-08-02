# Debug failure in image loading in <picture> when using Turbo

In Safari 14.1.2, when page is navigated using [Turbo](https://turbo.hotwired.dev/) the fallback image in the `<picture>` is loaded.

```sh
$ npm install
$ npm run build
$ npm run serve # Serves the web page on http://localhost:5000
```

# gulp-pretty-html

Plugin **Gulp** for decorating **HTML**

# Install

```
npm install gulp-pretty-html --save-dev
```

## Setup 1

```js
var gulp = require('gulp');
var prettyHtml = require('gulp-pretty-html');

gulp.task('pages', function () {
    return gulp.src('app/**/*.html')
        .pipe(prettyHtml())
        .pipe(gulp.dest('dist'));
});
```

## Setup 2

```js
var gulp = require('gulp');
var pug = require('gulp-pug');
var prettyHtml = require('gulp-pretty-html');

gulp.task('pages', function () {
    return gulp.src('app/**/*.pug')
        .pipe(pug())
        .pipe(prettyHtml())
        .pipe(gulp.dest('dist'));
});
```

## Example Usage

```html
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Document</title></head><body><header><h1>Hello World</h1></header><main><section><h2>Content</h2></section></main><footer><p>copyright</p></footer></body></html>
```

*result:*

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>

    <body>
        <header>
            <h1>Hello World</h1>
        </header>
        <main>
            <section>
                <h2>Content</h2>
            </section>
        </main>
        <footer>
            <p>copyright</p>
        </footer>
    </body>

</html>
```

***

## Options

**default**

```js
.pipe(prettyHtml({
    unformatted: ['code', 'pre', 'em', 'strong', 'br'],
    indent: 4
}))
```

## License

ISC License

## Author

Legostaev Vadim (*legostaev.vadim@mail.ru*)

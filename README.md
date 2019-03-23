# gulp-pretty-html

Plugin **Gulp** for decorating **HTML**

# Install

```
npm install gulp-pretty-html --save-dev
```

## Setup

```js
var gulp = require('gulp');
var prettyHtml = require('gulp-pretty-html');

gulp.task('pages', function () {
    return gulp.src('app/**/*.html')
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

**Default**

```js
.pipe(prettyHtml({
    indent_size: 4,
    indent_char: ' ',
    unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br']
}))
```

**HTML: js-beautify**

```
  indent_size                  Indentation size [4]
  indent_char                  Indentation character [" "]
  indent_with_tabs             Indent with tabs, overrides -s and -c
  eol                          Character(s) to use as line terminators. (default newline - "\\n")
  end_with_newline             End output with newline
  preserve_newlines            Preserve existing line-breaks (--no-preserve-newlines disables)
  max_preserve_newlines        Maximum number of line-breaks to be preserved in one chunk [10]
  indent_inner_html            Indent <head> and <body> sections. Default is false.
  brace_style                  [collapse-preserve-inline|collapse|expand|end-expand|none] ["collapse"]
  indent_scripts               [keep|separate|normal] ["normal"]
  wrap_line_length             Maximum characters per line (0 disables) [250]
  wrap_attributes              Wrap attributes to new lines [auto|force|force-aligned|force-expand-multiline] ["auto"]
  wrap_attributes_indent_size  Indent wrapped attributes to after N characters [indent-size] (ignored if wrap-attributes is "force-aligned")
  unformatted                  List of tags (defaults to inline) that should not be reformatted
  content_unformatted          List of tags (defaults to pre) whose content should not be reformatted
  extra_liners                 List of tags (defaults to [head,body,/html] that should have an extra newline before them.
```

## License

ISC License

## Author

Legostaev Vadim (*legostaev.vadim@mail.ru*)
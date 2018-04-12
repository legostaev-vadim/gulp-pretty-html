const beautify = require('js-beautify'),
    through2 = require('through2').obj;


module.exports = function(options = {}) {

    options.indent_size = options.indent_size || 4;
    options.indent_char = options.indent_char || ' ';
    options.unformatted = options.unformatted || ['code', 'pre', 'em', 'strong', 'i', 'b', 'br', 'span'];

    return through2(function(file, enc, callback) {

        if (file.isNull()) return callback(null, file);
        if (file.isStream()) return callback(new Error('gulp-pretty-html: Streaming not supported'));

        file.contents = Buffer.from(beautify.html(file.contents.toString(), options));

        callback(null, file);

    });
}

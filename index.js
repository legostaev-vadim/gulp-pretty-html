const beautify = require('js-beautify').html,
    through2 = require('through2').obj;

module.exports = function(options = {}) {
    return through2(function(file, enc, callback) {
        file.contents = Buffer.from(beautify(file.contents.toString(), {
            unformatted: options.unformatted || ['code', 'pre', 'em', 'strong', 'i', 'b', 'br', 'span'],
            indent_char: options.indent_char || ' ',
            indent_size: options.indent_size || 4
        }));
        callback(null, file);
    });
}

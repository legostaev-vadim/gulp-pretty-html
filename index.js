const pretty = require('pretty'),
    through2 = require('through2').obj;

module.exports = function(options = {}) {
    return through2(function(file, enc, callback) {
        file.contents = Buffer.from(pretty(file.contents.toString(), {
            unformatted: options.unformatted || ['code', 'pre', 'em', 'strong', 'br'],
            indent_size: options.indent || 4
        }));
        callback(null, file);
    });
}
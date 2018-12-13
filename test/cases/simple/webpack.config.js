
const CompileProgressPlugin = require('../../../dist');
module.exports = {
    entry: './index.js',
    mode: 'none',
    plugins: [
        new CompileProgressPlugin()
    ]
};

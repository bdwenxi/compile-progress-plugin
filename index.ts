/**
 * @file compile-progress-plugin core
 * @author simmons8616(simmons0616@gamil.com)
 */

import {Compiler, Plugin} from 'webpack';

class CompileProgressPlugin implements Plugin {
    apply(compiler: Compiler) {
        compiler.hooks.emit.tap(
            'CompileProgressPlugin',
            compilation => {
                console.log(compilation);
            }
        );
    }
}

export default CompileProgressPlugin;
module.exports = CompileProgressPlugin;

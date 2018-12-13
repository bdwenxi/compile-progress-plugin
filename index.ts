/**
 * @file compile-progress-plugin core
 * @author simmons8616(simmons0616@gamil.com)
 */

import {Compiler, Plugin} from 'webpack';

export default class CompileProgressPlugin implements Plugin {
    apply(compiler: Compiler) {
        console.log(compiler.hooks);
    }
}

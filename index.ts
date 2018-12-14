/**
 * @file compile-progress-plugin
 * @author simmons8616(simmons0616@gamil.com)
 */

import webpack from 'webpack';
// import Progress from 'node-progress';
import chalk, {Chalk} from 'chalk';

// new Progress('', 100);

interface IPluginOptions {
    width?: number,
    total?: number,
    clear?: boolean,
    complete?: string | Chalk,
    stream?: NodeJS.WriteStream
}

class CompileProgressPlugin {
    options: IPluginOptions;

    static defaultProps = {
        width: 40,
        total: 100,
        clear: true,
        complete: chalk.bgBlueBright(' '),
        incomplete: chalk.bgWhiteBright(' ')
    };

    constructor(options?: IPluginOptions) {
        this.options = options || {};
        return this.init() as any;
    }

    private combineOptions() {
        this.options = Object.assign(
            {},
            CompileProgressPlugin.defaultProps,
            this.options
        );
    }

    private init() {
        const stream = this.options.stream || process.stderr;
        const enabled = stream && stream.isTTY;

        if (!enabled) {
            throw new Error('');
        }

        this.combineOptions();

        return new webpack.ProgressPlugin(
            (percent, message) => {
                console.log(percent);
                console.log(message);
            }
        );
    }
}

export default CompileProgressPlugin;
module.exports = CompileProgressPlugin;

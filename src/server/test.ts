import { EventEmitter } from 'events';
import fs from 'fs';
import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';

class inputChecker extends EventEmitter {
    name: string;
    file: string;
    constructor(name: string, file: string) {
        super();
        this.name = name;
        this.file = file;
    }

    writeStream() {
        return fs.createWriteStream(`./${this.file}.txt`, {
            flags: 'a',
            encoding: 'utf-8',
            mode: 0o666,
        });
    }

    check(input: string) {
        const command = input.trim().substr(0, 3);
        if (command === ':wr') {
            this.emit('write', input.substr(3, input.length));
        } else if (command === ':en') {
            this.emit('end');
        } else {
            this.emit('echo', input);
        }
    }
}

const ic = new inputChecker('sds', 'output');
const rl = readline.createInterface({ input, output });

ic.on('write', (data) => {
    const wc = ic.writeStream();
    if (wc.write(data, 'utf-8')) {
        output.write(`In file ${ic.file} write ${data}`);
    } else {
        console.log('Some error');
    }
});

ic.on('end', () => {
    rl.close();
});

ic.on('echo', (data) => {
    output.write(ic.name + ' wrote ' + data);
});

rl.on('line', (input) => {
    if (input !== null) {
        ic.check(input);
    }
});

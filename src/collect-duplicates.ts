import fs = require('fs-extra');
import { resolve } from 'path';
import readline = require('readline');

let output = fs.createWriteStream(
    resolve(__dirname, 'database', 'filtered-duplicates')
);

readline.createInterface({
    input: fs.createReadStream(
        resolve(__dirname, 'database', 'duplicates')
    )
})
    .on('line', (line: string) => {
        let match = line.match(/\-+?\s+(.+?)\s*?\(.*?\).*/);
        if (match) {
            output.write(match[1] + '\n');
        }
    });



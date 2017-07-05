import fs = require('fs-extra');
import { resolve } from 'path';
import readline = require('readline');
import { IPathService } from 'strong-paths';


export function collectDuplicates(pathService: IPathService) {

    let projectRoot: string = pathService.getRoot().toString();

    let output = fs.createWriteStream(
        resolve(projectRoot, 'database', 'filtered-duplicates')
    );

    readline
        .createInterface({
            input: fs.createReadStream(
                resolve(projectRoot, 'database', 'duplicates')
            )
        })
        .on('line', (line: string) => {
            let match = line.match(/\-+?\s+(.+?)\s*?\(.*?\).*/);
            if (match) {
                output.write(match[1] + '\n');
            }
        });

}

const fs = require("fs");
const path = require("path");
const archiver = require("archiver");
const chalk = require("chalk");

const distDir = process.cwd() + "/dist";

const files = fs.readdirSync(distDir);

const output = fs.createWriteStream(distDir + "/game.zip");
const archive = archiver("zip", { zlib: { level: 9 } });

archive.pipe(output);
for (file of files) {
    archive.file(file, { name: path.basename(file) });
}
archive.finalize().finally(() => {
    const MAX_BYTES = 13312;
    const filename = "./dist/game.zip";
    
    fileSize = fs.statSync(filename).size;
    const chalkText = MAX_BYTES - fileSize >= 0 ? chalk.blue : chalk.red;
    
    console.log();
    console.log(chalkText(`Build size: ${fileSize} bytes`));
    console.log(chalk.yellow(`Target size: ${MAX_BYTES} bytes`));
    console.log();
    process.exit(0);
});



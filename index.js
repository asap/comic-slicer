const im = require('imagemagick');
const argv = require('yargs')
  .usage('Usage: $0 --file [filename] --tiles [number]')
  .demandOption(['file', 'tiles']).argv;

const { file, tiles } = argv;
console.log(`slicing ${file} into ${tiles} tiles`);

const addToFileName = (filename, addOn = '-thumb', separator = '.') => {
  const index = filename.indexOf(separator);
  return filename.slice(0, index) + addOn + filename.slice(index);
};

// TODO: Maybe make this part of the args?
const sourcePath = `${__dirname}/source/${file}`;
const outputPath = `${__dirname}/converted/${file}`;

im.identify(['-format', '%wx%h', sourcePath], (err, output) => {
  if (err) throw err;
  console.log('dimension: ' + output);
  const dimensions = output.split('x');
  const [width, height] = dimensions;
  const modWidth = Math.ceil(width / tiles);

  console.log(`Each tile will be ${modWidth}x${height}`);

  im.convert(
    [sourcePath, '-crop', `${modWidth}x${height}`, `${outputPath}`],
    (err, stdout, stderr) => {
      if (err) throw err;
      console.info('Excelsior! I did it!');
      console.log('Check the output directory in case I screwed up');
      console.log(outputPath);

      im.resize(
        {
          srcPath: addToFileName(outputPath, '-0'),
          width: 100,
          dstPath: addToFileName(outputPath),
        },
        (err, stdout) => {
          if (err) throw err;
          console.log('generating thumbnail', addToFileName(outputPath));
        }
      );
    }
  );
});

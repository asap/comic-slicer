# Comic Slicer

A simple slicer for my webcomic: [Damn Heroes](http://damnheroes.com)

# Getting Started

## Prerequisites

(optional) Install [NVM](https://github.com/creationix/nvm) in case the version of Node I'm using isn't the same as you're using for other things

# Installing

1. Clone the repo
2. `cd` into the directory
3. (optional) Run `nvm use` or in the directory if you're using [NVM](https://github.com/creationix/nvm)
4. Run `npm install`

# Usage

Toss an image into the `/source` directory in the repo

```
> npm start -- --file comic.jpg --tiles 4

slicing comic.jpg into 4 tiles
dimension: 2234x756
Each tile will be 559x756
Excelsior! I did it!
Check the output directory in case I screwed up
/converted/comic.jpg
```

Ouput will be in `/converted` directory.

Nuff Said!

# Contributing
Nothing formal. Just hit me up with an issue or pull request or something

# Author
* [asap](http://github.com/asap) (that's me) 

# License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

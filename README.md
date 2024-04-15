# Tiny Express Server Boilerplate

![Static Badge](https://img.shields.io/badge/Start-Out-blue)

A boilerplate/starter project that's barely one step above prototyping with `index.html` alone.

# Quick Start

> ## NOTE: HTTPS
> The default configuration expects CA Certificates (`./src/out/localhost.key` and `./src/out/localhost.crt`). If you just need
> an unsecured connection, see the end of `./src/index.js` and comment out the `https.createServer()` in favor of `app.listen()`.

## Start from scratch

Install Node.js and GitHub CLI. Clone the repo. Navigate into the directory you just cloned, and install all dependencies with NPM.

**Windows:**
```bash
scoop install nodejs gh
gh auth login
gh repo fork git@github.com:Start-Out/tinyweight-express-boilerplate.git --clone=true
cd tinyweight-express-boilerplate
npm install
```

**OSX:**
```bash
brew install node gh
gh auth login
gh repo fork git@github.com:Start-Out/tinyweight-express-boilerplate.git --clone=true
cd tinyweight-express-boilerplate
npm install
```
--------------

## Add as a submodule

If you need to include this in an existing repository, run the following commands:

```bash
git submodule add git@github.com:Start-Out/tinyweight-express-boilerplate.git express-server
cd express-server
npm install
```

This will clone a version of this boilerplate into place under a directory called `express-server` in the current directory (that's the last bit of the above commands, feel free to change that)

## Detach from submodules

If you need to be able to commit local changes (which seems pretty likely!) you'll need to detach the submodule. This script should do it:

```bash
mv express-server express-server_tmp
git submodule deinit express-server
git rm --cached express-server
mv express-server_tmp express-server
git add express-server
```

# Run your tiny server

A couple of run scripts are included

```bash
npm start
```

```bash
npm run dev
```

# Tiny Express Server Boilerplate

![Static Badge](https://img.shields.io/badge/Start-Out-blue)

A boilerplate/starter project that's barely one step above prototyping with `index.html` alone.

# Quick Start

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

If you need to include this in an existing repository, run the following command:

```bash
git submodule add git@github.com:Start-Out/tinyweight-express-boilerplate.git express-server
```

This will clone a version of this boilerplate into place under a directory called `express-server` in the current directory (that's the last bit of the above command, feel free to change that)

# Run your tiny server

A couple of run scripts are included

```bash
npm run dev
```

```bash
npm start
```

/*
Author: Trenton Young
Date: 7 March 2024
 */

/********************************************
 *   ##DEPENDENCIES##
 ********************************************/

/// Node Modules
const express = require("express")
const express_handlebars = require('express-handlebars')
const fs = require('fs')
const https = require('https')
const morgan = require('morgan')

/// Local Modules
const tools = require('./tools')

/// Flat Files
const _package = require("../package.json")

/********************************************
 *   ##SERVER SETTINGS##
 ********************************************/

let app = express()

let port = process.env.PORT ? process.env.PORT : tools.DEFAULT_PORT

app.engine('handlebars', express_handlebars.engine({
    defaultLayout: "main"
}));
app.set('view engine', 'handlebars');

/********************************************
 *   ##EXPRESS MIDDLEWARE##
 ********************************************/

/**
 * Middleware to parse POST body
 */
app.use(express.json())

/**
 * Serve static files
 */
app.use(express.static("public/"))

/**
 * Morgan is a popular logger.
 */
app.use(morgan("dev"))


/**
 * Serve required module source without giving out internal path

app.get("/module.js", function (req, res, next) {
    res.status(200).sendFile(__dirname+"/node_modules/module/build/module.js")
})

 */

/********************************************
 *   ##ROUTE HELPERS##
 ********************************************/

let serveHomepage = function (req, res) {
    res.status(200).render("view_index", {
        "package" : _package,
    })
}

/********************************************
 *   ##ROUTES##
 ********************************************/

/**
 * Serve homepages from several URLs
 */
app.get("/", serveHomepage)

/**
 * 404 - final fallthrough reached
 */
app.get("*", function (req, res)  {
    res.status(404).render("err_notFound", {
        "toolVersion" : _package.version
    })
})

/********************************************
 *   ##SERVER INITIALIZATION##
 ********************************************/

https
    .createServer(
        {
            key: fs.readFileSync("out/localhost.key"),
            cert: fs.readFileSync("out/localhost.crt")
        },
        app
    ).listen(port, undefined,function () {
    console.log("SERVER: I'm listening https://localhost:"+port)
})

/**
 * Uncomment this section and remove the above to use unsecured 
 * HTTP instead of HTTPS:
 *
 
app.listen(port, undefined,function () {
    console.log("SERVER: I'm listening http://localhost:"+port)
})
 */

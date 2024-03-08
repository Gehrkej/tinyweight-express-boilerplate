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
const fs = require("fs")

/// Local Modules
const tools = require('./tools')

/// Flat Files
const _package = require("../package.json")

let projectID_cache = []

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
 * Serve required module source without giving out internal path

app.get("/module.js", function (req, res, next) {
    res.status(200).sendFile(__dirname+"/node_modules/module/build/module.js")
})

 */

/********************************************
 *   ##ROUTE HELPERS##
 ********************************************/

let serveHomepage = function (req, res, next) {
    res.status(200).render("view_index", {
        "toolVersion" : _package.version,
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
app.get("*", function (req, res, next)  {
    res.status(404).render("err_notFound", {
        "toolVersion" : _package.version
    })
})

/********************************************
 *   ##SERVER INITIALIZATION##
 ********************************************/

app.listen(port, undefined,function () {
    console.log("SERVER: I'm listening http://localhost:"+port)
})

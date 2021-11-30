/*eslint-env es6*/
const http = require('http');
const path = require('path');
const { parse } = require('rss-to-json');
const express = require('express');

const debug = require('debug')("node-angular");
const app = express();
const data = require('./sources.js');

app.use('/logo', express.static(path.join('logo')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, Accept", "Content-Type", "X-Requested-With, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS, PATCH");
  next();
});

//  list
app.get("/list", (req, res, next) => {
  res.status(200).json({ message: "Fetch successfully", data: data.sources })
});

//  group
app.get("/group", (req, res, next) => {
  res.status(200).json({ message: "Fetch successfully", data: data.groups })
});

//  list/24h
app.get("/list/:code", (req, res, next) => {
  const code = req.params.code;
  const parentSource = data.sources.find(source => source.code === code);
  const url = parentSource.child[0].link;
  parse(url).then(
    rss => res.status(200).json({ message: "Fetch successfully", data: rss }),
    error => res.status(500).json({ message: "Server error", error })
  );
});

//  list/24h/2,4,5
app.get("/list/:code/:groups", (req, res, next) => {
  const code = req.params.code;
  const groupsString = req.params.groups;
  const parentSource = data.sources.find(source => source.code === code);
  const urls = [];
  const names = [];
  const parentCodes = [];
  const groups = [];
  for (const child of parentSource.child) {
    if (groupsString.includes(child.code) && !urls.includes(child.code)) {
      groups.push(child.code);
      urls.push(child.link);
      names.push(parentSource.name);
      parentCodes.push(parentSource.code);
    }
  }
  parseAndSendMultiRequest(res, urls, names, parentCodes, groups);
});

//  group/xe
app.get("/group/:code", (req, res, next) => {
  const code = req.params.code;
  const id = data.groups.find(group => group.code == code).id;
  const urls = [];
  const names = [];
  const parentCodes = [];
  for (const source of data.sources) {
    for (const child of source.child) {
      if (child.group.includes(id) && !urls.includes(child.link)) {
        urls.push(child.link);
        names.push(source.name);
        parentCodes.push(source.code);
      }
    }
  }
  parseAndSendMultiRequest(res, urls, names, parentCodes);
});

const parseAndSendMultiRequest = async (res, urls, names, parentCodes, groups) => {
  const arrPromise = [];
  for (const url of urls) {
    arrPromise.push(parse(url));
  }
  Promise.allSettled(arrPromise).then((values) => {
    const data = [];
    values.forEach((val, i) => {
      if (val.status === 'fulfilled') {
        val.value['name'] = names[i];
        val.value['code'] = parentCodes[i];
        if (groups) {
          val.value.items.forEach(item => {
            item['group'] = groups[i];
          });
        }
        data.push(val.value);
      } else {
        console.error(val);
      }
    });
    res.status(200).json({ message: "Fetch successfully", data });
  }, error => {
    res.status(500).json({ message: "Server error", data: error });
  });
}

const normalizePort = val => {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }
  return false;
}

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " required elevated privileges");
      process.exit(1);
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
    default:
      throw error;
  }
}

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  console.log('Listening on ' + port);
  debug("Listening on " + bind);
}

const port = normalizePort(process.env.PORT || "3000");
app.set('port', port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
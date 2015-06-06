var SSDP = require('node-ssdp-manual');
var client = new SSDP({
    logLevel: 'TRACE',
    log: true
});

client.on('notify', function () {
  //console.log('Got a notification.');
});

client.on('response', function inResponse(msg, rinfo) {
  console.log('Got a response to an m-search.' + JSON.stringify(msg) + '\n'  + JSON.stringify(rinfo));
});



var searchLoop = setInterval(search, 2000);
var searchLoopCount=0;

function search() {
  searchLoopCount++;

  //client.search('urn:schemas-upnp-org:service:ContentDirectory:1');
  client.search('urn:schemas-upnp-org:device:ZoomG:1');

  // Or maybe if you want to scour for everything

  //client.search('ssdp:all');


  if (searchLoopCount>10) {
    clearInterval(searchLoop);
  }
}

// Or maybe if you want to scour for everything

//client.search('ssdp:all');

// This should get you at least started.

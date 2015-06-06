var SSDP = require('node-ssdp-manual')
var server = new SSDP({
  logLevel: 'TRACE',
  log: true,
  description: '',
  ttl: 2000,
  udn: '89373e13-05ab-426a-85e3-42d909a5b5e5'
});

//server.addUSN('upnp:rootdevice');
server.addUSN('urn:schemas-upnp-org:device:ZoomG:1');
//server.addUSN('urn:schemas-upnp-org:device:MediaServer:1');
//server.addUSN('urn:schemas-upnp-org:service:ContentDirectory:1');
//server.addUSN('urn:schemas-upnp-org:service:ConnectionManager:1');

server.on('advertise-alive', function (headers) {
  //console.log("advertise-alive\n" + JSON.stringify(headers));
  // Expire old devices from your cache.
  // Register advertising device somewhere (as designated in http headers heads)
});

server.on('advertise-bye', function (headers) {
  //console.log("advertise-bye\n" + JSON.stringify(headers));
  // Remove specified device from cache.
});

// start server on all interfaces
server.server('0.0.0.0','');

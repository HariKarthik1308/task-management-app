const dns = require("dns");

dns.resolveSrv("_mongodb._tcp.cluster0.pszrq0x.mongodb.net", (err, addresses) => {
  console.log(err || addresses);
});
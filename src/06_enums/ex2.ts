enum MediaTypes {
  JSON = 'application/json',
}

enum Protocols {
  HTTP = 80,
  HTTPS = 443,
  TCP = 90,
}
// union an enum type
type HyperTextProtocols = Protocols.HTTP | Protocols.HTTPS;
type HtttpStatusCodes = 200 | 201 | 400 | 500 | 503;

fetch('http://api.example.com', {
  headers: {
    'Content-Type': MediaTypes.JSON,
  },
});

export default null;

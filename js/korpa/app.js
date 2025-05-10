import http from "http";

const server = http.createServer();
const restaurants = [
  {
    id: 1,
    name: "Pizza bar",
    rate: 3.4,
  },
  { id: 2, name: "Mozaik", rate: 4.1 },
];

console.log(server);
server.on("request", (req, res) => {

  if (req.url == "/restaurants") {
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(restaurants));
  } else if (req.url == "/users") {
  } else {
    res.write("Hello");
  }
  res.end();
});

server.listen(8080);

const express = require("express");
const path = require("path");
const { ApolloServer, gql } = require("apollo-server-express");

const rooms = [
  {
    id: "SDFGHJH",
    size: 2,
    cells: [{ id: "1", state: "BLUE", domination: "player_1" }]
  }
];

const typeDefs = gql`
  enum CellState {
    BLUE
    RED
  }

  type Cell {
    id: String
    state: CellState
    domination: String
  }

  type Room {
    id: String
    size: Int
    cells: [Cell]
  }

  type Query {
    rooms: [Room]
  }
`;

const resolvers = {
  Query: {
    rooms: () => rooms
  }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const app = express();

// Add Apollo to express
apolloServer.applyMiddleware({ app });

// Add static file of React app on /
app.use(express.static(path.join(__dirname, "..", "build")));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

const port = process.env.PORT || 8080;

app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`
  )
);

const { ApolloServer, gql } = require("apollo-server");

const rooms = [
  {
    id: "SDFGHJH",
    size: 2,
    cells: [{ id: "1", state: "BLUE", domination: "BLUE" }]
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

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    rooms: () => rooms
  }
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

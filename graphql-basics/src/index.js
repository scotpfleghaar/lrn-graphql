import { GraphQLServer } from 'graphql-yoga';

// Type definitions (schema)
const typeDefs = `
    type Query {
       title: String!
       price: Float!
       releaseYear: Int
       rating: Float
       inStock: Boolean
    }
`;

// Resolvers
const resolvers = {
    Query: {
        title () {
            return "abc123"
        },
        price () {
            return 2.3
        },
        releaseYear () {
            return 1999
        },
        rating () {
            return null
        },
        inStock () {
            return true
        },

    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => {
    console.log('The Server is Running')
});

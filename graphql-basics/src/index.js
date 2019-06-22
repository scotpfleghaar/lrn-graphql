import {GraphQLServer} from 'graphql-yoga';

// Type definitions (schema)
const typeDefs = `
    type Query {
       me: User
    }
    
    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }
`;

// Resolvers
const resolvers = {
    Query: {
        me() {
            return {
                id: "1234",
                name: "Scot",
                email: "Test",
                age: 23
            }
        }
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => {
    console.log('The Server is Running')
});

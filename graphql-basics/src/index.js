import {GraphQLServer} from 'graphql-yoga';

// Type definitions (schema)
const typeDefs = `
    type Query {
       me: User
       post: Post
    }
    
    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }
    
    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
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
        },
        post() {
            return {
                id: "4321",
                title: "Scot",
                body: "Test",
                published: false
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

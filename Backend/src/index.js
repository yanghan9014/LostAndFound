require("dotenv-defaults").config();
import { GraphQLServer, PubSub } from "graphql-yoga";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
// import Subscription from "./resolvers/Subscription";

const Message = require("./models/message");
const User = require("./models/user");
const FoundItem = require("./models/foundItem");
const LostItem = require("./models/lostItem");
const mongoose = require("mongoose");

if (!process.env.MONGO_URL) {
  console.error("Missing MONGO_URL!!!");
  process.exit(1);
}

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error(error);
});

db.once("open", () => {
  console.log("MongoDB connected!");

  //const pubsub = new PubSub();

  const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers: {
      Query,
      Mutation
      // Subscription,
    },
    context: {
      Message,
      User,
      LostItem,
      FoundItem,
      pubsub,
    },
  });

  server.start({ port: process.env.PORT | 4000 }, () => {
    console.log(`The server is up on port ${process.env.PORT | 4000}!`);
  });
});

require("dotenv-defaults").config();
import { GraphQLServer, PubSub } from "graphql-yoga";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
// import Subscription from "./resolvers/Subscription";

const Message = require("./models/message");
const User = require("./models/user");
const FoundItem = require("./models/foundItem");
const LostItem = require("./models/lostItem");
const NowUsers = require("./models/nowUsers");
const mongoose = require("mongoose");
import bodyParser from 'body-parser';

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
      Mutation,
      // Subscription,
    },
    context: {
      Message,
      User,
      LostItem,
      FoundItem,
      NowUsers,
    },
  });
  server.applyMiddleware({
    // app: WebApp.connectHandlers,
    // path: '/graphql',
    bodyParserConfig: {
      limit: "100mb", // Your Limited Here
    },
  });
<<<<<<< HEAD
  server.start({ port: process.env.PORT | 4000 }, () => {
=======
  server.use(bodyParser.json({limit: '5mb'}))
  const opts = {
    port: process.env.PORT | 4000,
    bodyParserOptions: { limit: "10mb", type: "application/graphql"},
    uploads: {
      maxFieldSize: 1000000000,
      maxFileSize: 1000000000,
    }
  }

  server.start(opts, () => {
>>>>>>> 3f6dc90c37ccfb87b6e4f22bfb0616216d89e58f
    console.log(`The server is up on port ${process.env.PORT | 4000}!`);
  });
});


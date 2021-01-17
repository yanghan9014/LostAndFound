const Query = {
  async messages(parent, args, { Message, pubsub }, info) {
    if (!args.query) {
      return await Message.find();
    }
    return await Message.find({
      $or: [{ senderName: args.query }, { receiverName: args.query }],
    });
  },

  async users(parent, args, { Users }, info) {
    if (!args.query) {
      return await Users.find();
    }
    return await Users.find({ name: args.query });
  },

  async foundItems(parent, args, { FoundItems }, info) {
    if (!args.query) {
      return await FoundItems.find();
    }
    return await FoundItems.find({ name: args.query });
  },
  async lostItems(parent, args, { LostItems }, info) {
    if (!args.query) {
      return await LostItems.find();
    }
    return await LostItems.find({ name: args.query });
  },
};

export { Query as default };

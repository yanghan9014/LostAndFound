const Query = {
  async messages(parent, args, { Message, pubsub }, info) {
    if (!args.query) {
      return await Message.find();
    }
    return await Message.find({
      $or: [{ senderName: args.query }, { receiverName: args.query }],
    });
  },

  async users(parent, args, { User }, info) {
    if (!args.query) {
      return await User.find();
    }
    return await User.find({ name: args.query });
  },

  async foundItems(parent, args, { FoundItem }, info) {
    if (!args.query) {
      return await FoundItem.find();
    }
    return await FoundItem.find({ name: args.query });
  },
  async lostItems(parent, args, { LostItem }, info) {
    if (!args.query) {
      return await LostItem.find();
    }
    return await LostItem.find({ name: args.query });
  },
};

export { Query as default };

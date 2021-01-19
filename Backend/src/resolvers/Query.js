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
    if (args.query === "") {
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
  async login(parent, args, { User }, info) {
    let user = await User.find({
      $and: [{ name: args.query.name }, { password: args.query.password }],
    });
    // console.log(user);
    if (user.length === 0) return { Login: false };
    else return { Login: true };
  },
};

export { Query as default };

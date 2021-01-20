const Mutation = {
  createUser(parent, args, { User }, info) {
    const newUser = {
      ...args.data,
    };

    User.collection.insert(newUser);

    return newUser;
  },
  createMessage(parent, args, { Message }, info) {
    const newMsg = {
      ...args.data,
    };
    Message.collection.insert(newMsg);
    return newMsg;
  },
  createFoundItem(parent, args, { FoundItem }) {
    const newFoundItem = {
      ...args.data,
    };
    FoundItem.collection.insert(newFoundItem);
    return newFoundItem;
  },
  updateFoundItem(parent, args, { FoundItem }) {
    const [id, name] = args.data;
    const targetFoundItem = FoundItem.collection.find({ _id: id, name: name });

    FoundItem.collection.findOneAndUpdate(targetFoundItem, {
      isReturned: !targetFoundItem.isReturned,
    });

    return targetFoundItem;
  },
  createLostItem(parent, args, { LostItem }) {
    const newLostItem = {
      ...args.data,
    };
    LostItem.collection.insert(newLostItem);
    return newLostItem;
  },
  updateLostItem(parent, args, { LostItem }) {
    const [id, name] = args.data;
    const targetLostItem = LostItem.collection.find({ _id: id, name: name });

    FoundItem.collection.findOneAndUpdate(targetLostItem, {
      isFound: !targetLostItem.isFound,
    });

    return targetLostItem;
  },
};

export { Mutation as default };

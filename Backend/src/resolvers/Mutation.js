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
  async updateFoundItem(parent, args, { FoundItem }) {
    const {id} = args.data;
    const targetFoundItem = await FoundItem.collection.find({ _id: id});
    console.log(targetFoundItem)
    targetFoundItem.isReturned = !targetFoundItem.isReturned

    FoundItem.collection.deleteOne({_id: id});
    FoundItem.collection.insert(targetFoundItem)
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
    const {id} = args.data;
    const targetLostItem = LostItem.collection.find({ _id: id});

    targetLostItem.isFound = !targetLostItem.isFound
/*
    FoundItem.collection.findOneAndUpdate(targetLostItem, {
      isFound: !targetLostItem.isFound,
    });
*/
    return targetLostItem;
  },
};

export { Mutation as default };

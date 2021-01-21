// import NowUsers from "../models/nowUsers";

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
<<<<<<< HEAD
  updateFoundItem(parent, args, { FoundItem }) {
    // const data = [...args.data];
    const targetFoundItem = FoundItem.collection.find({ _id: args.data._id });

    FoundItem.collection.findOneAndUpdate(
      { _id: { $eq: targetFoundItem._id } },
      {
        isReturned: !targetFoundItem.isReturned,
      }
    );
    // targetFoundItem.isReturned = !targetFoundItem.isReturned;
    // targetFoundItem.save();
=======
  async updateFoundItem(parent, args, { FoundItem }) {
    const {id} = args.data;
    const targetFoundItem = await FoundItem.collection.find({ _id: id});
    console.log(targetFoundItem)
    targetFoundItem.isReturned = !targetFoundItem.isReturned

    FoundItem.collection.deleteOne({_id: id});
    FoundItem.collection.insert(targetFoundItem)
>>>>>>> 3f6dc90c37ccfb87b6e4f22bfb0616216d89e58f
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
<<<<<<< HEAD
    // const data = [...args.data];
    const targetLostItem = LostItem.collection.find({ _id: args.data._id });
    LostItem.collection.findOneAndUpdate(
      { _id: { $eq: targetLostItem._id } },
      {
        isReturned: !targetLostItem.isReturned,
      }
    );
=======
    const {id} = args.data;
    const targetLostItem = LostItem.collection.find({ _id: id});

    targetLostItem.isFound = !targetLostItem.isFound
/*
    FoundItem.collection.findOneAndUpdate(targetLostItem, {
      isFound: !targetLostItem.isFound,
    });
*/
>>>>>>> 3f6dc90c37ccfb87b6e4f22bfb0616216d89e58f
    return targetLostItem;
  },
  createNowUser(parent, args, { NowUsers }) {
    new NowUsers({ user: args.data }).save();
    return args.data;
  },
};

export { Mutation as default };

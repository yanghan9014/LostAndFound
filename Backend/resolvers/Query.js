const Query = {
    async users(parent, args, { Message, pubsub }, info) {
      const message = await Message.collection.find().toArray()

      if (!args.query) {
        const senderNames = message.map((senderName, receiverName, body)=>{
          return senderName
        })
        const receiverNames = message.map((senderName, receiverName, body)=>{
          return receiverName
        })
        const allNames = [...senderNames, ...receiverNames]
        const filtedNoRepeatName = Array.from(new Set(allNames))
        
        return filtedNoRepeatName
      }

      const filtedMsg =  message.filter((msg) => {
        return msg.senderName.toLowerCase().includes(args.query.toLowerCase()) || msg.receiverName.toLowerCase().includes(args.query.toLowerCase())
      });

      const filtedSenderNames = filtedMsg.map((senderName, receiverName, body)=>{
        return senderName
      });

      const filtedReceiverNames = filtedMsg.map((senderName, recieverName, body)=>{
        return receiverName
      });
      const filtedAllNames = [...filtedSenderNames, ...filtedReceiverNames]

      const filtedNoRepeatName = Array.from(new Set(filtedAllNames))

      return filtedNoRepeatName
    },

    async messages(parent, args, { Message }, info) {
      const allData = await Message.collection.find().toArray()
      return allData
    },
    me() {
      return {
        name: 'Tony'
      }
    }
  }
  
  export { Query as default }
  
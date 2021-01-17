const Mutation = {
  createMessage(parent, args, { Message, pubsub }, info) {
    const message = {
      ...args.data
    }

    Message.collection.insert(message)

    pubsub.publish('message', {
      message: {
        mutation: 'CREATED',
        data: message
      }
    })

    return message

  },
  updateMessage(parent, args, {Message, pubsub}){
    const newMsg = {
      senderName: args.data.senderName,
      receiverName: args.data.receiverName,
      body: args.data.newBody
    }

    Message.collection.findOneAndReplace(
      {"senderName": args.data.senderName, "receiverName": args.data.receiverName, "body": args.data.body},
      newMsg
    )

    pubsub.publish('message', {
      message: {
        mutation: 'UPDATED',
        data: newMsg
      }
    })

    return newMsg

  },
  async deleteMessage(parent, args, { Message, pubsub }, info) {
    const deletedMsg = {
      ...args.data
    }

    try{
      Message.collection.deleteOne(deletedMsg)
    }
    catch{
      console.log('cannot delete the assigned message')
    }

    pubsub.publish('message', {
      message: {
        mutation: 'DELETED',
        data: deletedMsg
      }
    })

    return deletedMsg
  }
}

export { Mutation as default }

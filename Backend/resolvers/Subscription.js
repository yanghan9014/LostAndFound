const Subscription = {
    message: {
      subscribe(parent, {}, { Message, pubsub }, info) {
        return pubsub.asyncIterator('message')
      }
    }
  }
  
  export { Subscription as default }
  
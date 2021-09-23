import { prop, Ref } from "@typegoose/typegoose"
import Message from "./Message"

class Thread {
    @prop({ required: true, ref: () => Message })
    message!: Ref<Message>
}

export default Thread

/*
type Thread {
  id: UUID,
  message: Message
}
*/
import { prop, Ref } from '@typegoose/typegoose'
import Chat from './Chat';
import Thread from './Thread';
import User from './User';

enum MessageType{
    TEXT,
    MEDIA,
    REPLY
}

class Message {
    @prop({ ref: () => Chat, required: true })
    public chatId!: Ref<Chat>

    @prop({required:true,enum:MessageType})
    public messageType!: MessageType

    @prop({ required: true })
    public content!: any

    @prop({ required: true })
    public seenByAll!: boolean

    @prop({ ref: () => User, required: true })
    public sentBy!: Ref<User>

    @prop({ ref: () => User, required: true })
    public seen!: Ref<User>[]

    @prop({ ref: () => Message })
    public reply?: Ref<Message>

    @prop({ ref: () => Thread })
    public thread?: Ref<Thread>

}

export default Message

/*
type Message {
  id: UUID,
  chatId : UUID,
  type: 'TEXT' | 'MEDIA' | 'REPLY',
  content: any, // { text: string }, { caption: string, media: URL }, { caption: string, reply: Message }
  sentBy: UserId,
  seen : User[],  //UserId
  seenByAll : boolean,
  replyTo? : Message,
  thread?: Thread
}
*/

/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { prop, Ref } from '@typegoose/typegoose'
import Message from './Message'
import User from './User'

enum ChatType {
    PRIVATE,
    GROUP,
    THREAD
}

class Chat {
    @prop({ required: true, enum: ChatType })
    public chatType!: ChatType

    @prop()
    public name?: string

    @prop()
    public description?: string

    @prop({ required: true })
    public isPinnedTop!: string

    @prop({ required: true })
    public muted!: string

    @prop({ required: true, ref: () => User })
    public participants!: Ref<User>[]

    @prop()
    public createdAt?: Date

    @prop({ ref: () => User })
    public createdBy?: Ref<User>

    @prop({ required: true, ref: () => Message })
    public lastMessage!: Ref<Message>

    @prop({ required: true })
    public seenByAll!: boolean
}

export default Chat

/*
type Chat {
  id: UUID,
  type: 'PRIVATE' | 'GROUP' | 'THREAD',
  name?: string,
  description?: string,
  isPinnedTop: boolean,
  isMuted: boolean,
  participants: User[], // UIDs
  createdAt?: Date,
  createdBy?: User,
  lastMessage: Message, // tentative
  seenByAll: boolean,
  // seen: User[], // tentative
}
*/

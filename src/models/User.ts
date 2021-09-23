import { prop } from '@typegoose/typegoose'

class User {
    @prop({ required: true })
    public name!: string

    @prop({ required: true })
    public phone!: string

    @prop({ required: true })
    public bio?: string

    @prop({ required: true })
    public profilePic?: string
}

export default User

/*
type User {
  id: UUID,
  phone: string,
  name: string,
  profilePic: string,
  bio: string
}
*/

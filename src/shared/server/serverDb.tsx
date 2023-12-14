import { factory, primaryKey } from '@mswjs/data'

export const db = factory({
  user: {
    id: primaryKey(Number),
    email: String,
    password: String,
  },
})

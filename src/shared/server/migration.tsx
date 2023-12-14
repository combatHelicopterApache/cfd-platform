import { db } from './serverDb'

export function startDatabaseMigration() {
  const user = db.user.create({
    id: 1,
    email: 'hvacdemo@orcatec.com',
    password: 'Orcatec12345',
  })
}

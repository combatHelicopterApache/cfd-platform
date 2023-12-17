import React, { useState } from 'react'

import { Profile } from 'shared/ui'

import { Finish, Form } from 'features/changePassword'

const breadcrumbs = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Change password',
  },
]

export const ChangePassword = () => {
  const [finish, setFinish] = useState(false)

  return (
    <Profile title='Change password' breadcrumbs={breadcrumbs}>
      {finish ? <Finish /> : <Form goFinish={() => setFinish(true)} />}
    </Profile>
  )
}

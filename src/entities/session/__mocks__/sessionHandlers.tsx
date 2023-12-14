import { rest } from 'msw'
import {
  parseTokenFromRequest,
  signAccessToken,
  verifyAccessToken,
} from 'shared/lib/jwt'
import { __serverDatabase } from 'shared/server'

export const sessionHandlers = [
  rest.get(`${process.env.REACT_APP_API_URL}/me`, async (req, res, ctx) => {
    try {
      const payload = await verifyAccessToken(parseTokenFromRequest(req))

      return await res(
        ctx.delay(200),
        ctx.status(200),
        ctx.json({
          id: payload.userId,
          email: payload.email,
        }),
      )
    } catch (err) {
      return await res(
        ctx.status(401),
        ctx.json('Token is expired or not valid'),
      )
    }
  }),

  rest.post(`${process.env.REACT_APP_API_URL}login`, async (req, res, ctx) => {
    // const body = await req.json()
    const { email, password } = req.body

    const maybeUser = __serverDatabase.user.findFirst({
      where: {
        email: { equals: email },
        password: { equals: password },
      },
    })
    if (!maybeUser) {
      return await res(ctx.status(400), ctx.json('Wrong email or password'))
    }
    const accessToken = await signAccessToken({
      userId: maybeUser.id,
      email,
    })
    return await res(
      ctx.delay(200),
      ctx.status(200),
      ctx.json({
        accessToken,
        user: {
          email,
          id: maybeUser.id,
        },
      }),
    )
  }),
]

console.log(sessionHandlers, 'sessionHandlers')

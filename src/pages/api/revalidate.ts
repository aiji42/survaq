import { NextApiHandler, NextApiRequest } from 'next'
import crypto from 'crypto'

// const validate = (request: NextApiRequest): boolean => {
//   const expectedSignature = crypto
//     .createHmac('sha256', process.env.SECRET_KEY ?? '')
//     .update(
//       typeof request.body === 'string'
//         ? request.body
//         : JSON.stringify(request.body)
//     )
//     .digest('hex')
//   const signature = request.headers['x-microcms-signature'] as string
//   if (
//     !crypto.timingSafeEqual(
//       Buffer.from(signature),
//       Buffer.from(expectedSignature)
//     )
//   ) {
//     throw new Error('Invalid signature.')
//   }
//   return true
// }

const handler: NextApiHandler = async (req, res) => {
  if (!req.body.api || !req.body.id) {
    return res.status(400).json({ message: 'Bad Request' })
  }
  console.log(req.body)
  try {
    if (req.body.api === 'top') {
      res.unstable_revalidate('/')
      res.status(200)
      return
    }
    res.unstable_revalidate(`/${req.body.api}/${req.body.id}`)
    res.status(200)
    return
  } catch (e) {
    return res.status(400).json({ message: 'Bad Request' })
  }
}

export default handler

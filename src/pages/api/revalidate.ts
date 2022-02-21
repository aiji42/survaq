import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  if (req.query.secret !== process.env.SECRET_KEY) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  if (typeof req.query.revalidateTarget === 'string') {
    await res.unstable_revalidate(req.query.revalidateTarget)
    res.redirect(req.query.revalidateTarget)
    return
  }

  res.redirect('/')
}

export default handler

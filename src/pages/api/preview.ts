import { NextApiHandler } from 'next'

const handler: NextApiHandler = (req, res) => {
  if (req.query.secret !== process.env.SECRET_KEY || !req.query.draftKey) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  res.setPreviewData({ draftKey: req.query.draftKey }, { maxAge: 60 * 15 })

  res.redirect(
    typeof req.query.redirectTo === 'string' ? req.query.redirectTo : '/'
  )
}

export default handler

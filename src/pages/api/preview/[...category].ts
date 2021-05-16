import { NextApiHandler } from 'next'

const preview: NextApiHandler = async (req, res) => {
  if (!Array.isArray(req.query.category)) {
    return res.status(401).json({ message: 'Invalid' })
  }
  const content = await fetch(
    `${process.env.MICRO_CMS_API_ENDPOINT}/${req.query.category.join('/')}?draftKey=${req.query.draftKey}`,
    { headers: { 'X-API-KEY': process.env.MICRO_CMS_API_KEY ?? '' } }
  )
    .then((res) => res.json())
    .catch(() => null)

  if (!content) {
    return res.status(401).json({ message: 'Invalid' })
  }

  res.json(content)
}

export default preview

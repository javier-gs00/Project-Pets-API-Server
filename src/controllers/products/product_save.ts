import { Request, Response } from 'express'
import Product from 'Src/models/product.model'

export default async function(req: Request, res: Response) {
  try {
    const { product } = req.body
    const newProduct = new Product({ ...product, date: new Date() })
    const savedProduct = await newProduct.save()
    return res.status(200).json(savedProduct)
  } catch (err) {
    return res.status(500).json({ error: true })
  }
}

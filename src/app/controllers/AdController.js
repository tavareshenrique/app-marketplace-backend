const Ad = require('../models/Ad')

class AdController {
  // Método para Listagem
  async index (req, res) {
    const ads = await Ad.find()

    return res.json(ads)
  }

  // Mostrar um único Ad
  async show (req, res) {
    const ad = await Ad.findById(req.params.id)

    return res.json(ad)
  }

  // Para criar um Ad
  async store (req, res) {
    const ad = await Ad.create({ ...req.body, author: req.userId })

    return res.json(ad)
  }

  // Para alterar um Ad
  async update (req, res) {
    const ad = await Ad.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.json(ad)
  }

  // Para deletar um Ad
  async destroy (req, res) {
    await Ad.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

module.exports = new AdController()

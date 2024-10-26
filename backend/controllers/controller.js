import { addData, deleteData, editData, getData } from "../models/productModel.js"

export const getAll = async (req, res) => {
  const re = await getData()
  res.json(re)
}

export const addNew = async (req, res) => {
  const { name, description, price, quantity } = req.body
  if (!name || !description || !price || !quantity) {
    res.json("Provide name, description, price, quantity")
    return
  }
  console.log(name, description, price, quantity)
  await addData(name, description, price, quantity)
  res.json("ok")
}

export const deleteD = async (req, res) => {
  const id = req.params.id
  if (!id) {
    res.json("Provide id to delete")
    return
  }
  await deleteData(id)
  res.json("ok")
}

export const updateD = async (req, res) => {
  const id = req.params.id
  if (!id) {
    res.json("Provide id to update")
    return
  }
  const { name, description, price, quantity } = req.body
  if (!name || !description || !price || !quantity) {
    res.json("Provide name,description,price,quantity")
    return
  }
  await editData(id, name, description, price, quantity)
  res.json("ok")
}

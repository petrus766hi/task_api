import Product from '../models/product.js'

const list =  () => async(req, res) => {
  try{

    const productData = await Product.findAll();

    return res.json(productData);

  } catch(err){
    return res.send(err);
  }
};

const create = () => async(req, res) => {
  try{
    const createProduct = await Product.create(req.body);

    res.status(201).json({
      'status': 'OK',
      'messages': 'Product berhasil ditambahkan',
      'data': createProduct,
    })
  }catch(err){

    return res.send(err);
  }
};


export default {
  list,
  create,
}
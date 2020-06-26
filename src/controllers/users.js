import User from '../models/users.js'

const list =  () => async(req, res) => {
  try{

    const usersData = await User.findAll();

    return res.json(usersData);

  } catch(err){
    return res.send(err);
  }
};

const create = () => async(req, res) => {
  try{
    const createUsers = await User.create(req.body);

    res.status(201).json({
      'status': 'OK',
      'messages': 'User berhasil ditambahkan',
      'data': createUsers,
    })
  }catch(err){

    return res.send(err);
  }
};


export default {
  list,
  create,
}
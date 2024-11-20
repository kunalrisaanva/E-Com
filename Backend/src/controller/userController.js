// import User from '../models/user.model.js';

const getUsers = async (request, reply) => {
//   const users = await User.find();
//   return { users };
return { message: 'User created successfully' };
};

const createUser = async (request, reply) => {
  const { name, email, password } = request.body;
  const newUser = await User.create({ name, email, password });
  return { message: 'User created successfully', };
};



export { getUsers , createUser}
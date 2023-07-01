import {Like} from '../../db/models';
const apiMatchRouter = require('express').Router();

apiMatchRouter.post('/id', async (req, res) => {
try{
  const {id}=req.body
  const newMatch = await like.findAll({
    where: pet_id === id})//найдем всех кого мы лайкнули
    console.log(newMatch);
}catch((e)=>console.log(e))



})

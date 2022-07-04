const { response } = require('express')
const User = require('../models/User.model')


//mrigl 
const index=(req, res, next) => 
{
    User.find()
    .then((user) =>{res.json({user})})
    .catch(error=>{res.json({error})})      
}


//mrigl 
// const show = (req, res, next) => {
//     let _id= req.params.id
//     User.findById(_id)
//     .then(res => {
//         res.json({
//             res,

//         })
//     })
//     console.log(res);
// }

const show= async (req, res) => {
    let active= req.params.phoneNumber;
    res.send({ user: await User.findOne({ 'phoneNumber': active }) })
    console.log(req.params.phoneNumber)
  }
  

//mrigl 
const stores = (req, res, next) => {
    
        let user= new User({
            phoneNumber:req.body.phoneNumber,
            otp:req.body.otp,
            password:req.body.password,

        })


        user.save()
        .then(response => {
            res.json({
                message:'User Added Sucessfull!'
            })
        })
    .catch(error => {
        res.json({
            message:'an error Occured here!'
        })
    })
    }
    



// //mrigll
// const update =(req, res, next)=>
// {
//     let id=req.params.id
//     let updateData={
//         titre:req.body.titre,
//         marque:req.body.marque,
//         prix:req.body.prix,
//         date:req.body.date,
//         gouvernorat:req.body.gouvernorat,
//         delegation:req.body.delegation,
//         description:req.body.description,       
//         image:req.body.image,
        
//     }
//     Annonce.findByIdAndUpdate(id, {$set:updateData})
//     .then(()=>{
//         res.json( {
//             message:'Annonce updated successfully!'
//         })
//     })
// .catch(error =>{
//     res.json({
//         message:'an error Occured!'
//     })
// })
// }


// //mrigll
// const destory=(req,res,next) =>{
//     let _id= req.params.AnnonceID
//     console.log(_id);
//     Annonce.findByIdAndDelete(_id)
//     .then(() => {
//       res.json({
//         message: "Delete sucess!",
//       });
//     })
//     .catch((error) => {
//         res.statusCode = 400;

//       console.log(error);
//       res.json({
//         error,
//       });
//     });
    
// };

module.exports={
    index,show,stores
}

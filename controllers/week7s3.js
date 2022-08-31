const Week7s3 = require('../models/Week7s3')

module.exports = {
    getWeek7: async (req,res)=>{
        try{
            const week7s3Items = await Week7s3.find()
            
            res.render('week7s3.ejs', {week7s3s: week7s3Items})
        }catch(err){
            console.log(err)
        }
    },
    createWeek7: async (req,res)=>{
        try{
            await Week7s3.create({week7s3: req.body.week7s3Item})
            console.log('Nice work, week 7 progress')
            res.redirect('/week7s3')
        }catch(err){
            console.log(err)
        }
    },
    deleteWeek7: async (req,res)=>{
        try{
            await Week7s3.findOneAndDelete({_id:req.body.week7s3IdFromJSFile})
            console.log('delete comment')
            res.json('deleted obj')
        }catch(err){
            console.log(err)
        }
    }
}
const Week8s3 = require('../models/Week8s3')

module.exports = {
    getWeek8: async (req,res)=>{
        try{
            const week8s3Items = await Week8s3.find()
            
            res.render('week8s3.ejs', {week8s3s: week8s3Items})
        }catch(err){
            console.log(err)
        }
    },
    createWeek8: async (req,res)=>{
        try{
            await Week8s3.create({week8s3: req.body.week8s3Item})
            console.log('Nice work, week 8 progress')
            res.redirect('/week8s3')
        }catch(err){
            console.log(err)
        }
    },
    deleteWeek8: async (req,res)=>{
        try{
            await Week8s3.findOneAndDelete({_id:req.body.week8s3IdFromJSFile})
            console.log('delete comment')
            res.json('deleted obj')
        }catch(err){
            console.log(err)
        }
    }
} 
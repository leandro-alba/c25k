const Week6s3 = require('../models/Week6s3')

module.exports = {
    getWeek6: async (req,res)=>{
        try{
            const week6s3Items = await Week6s3.find()
            
            res.render('week6s3.ejs', {week6s3s: week6s3Items})
        }catch(err){
            console.log(err)
        }
    },
    createWeek6: async (req,res)=>{
        try{
            await Week6s3.create({week6s3: req.body.week6s3Item})
            console.log('Nice work, week 6 progress')
            res.redirect('/week6s3')
        }catch(err){
            console.log(err)
        }
    },
    deleteWeek6: async (req,res)=>{
        try{
            await Week6s3.findOneAndDelete({_id:req.body.week6s3IdFromJSFile})
            console.log('delete comment')
            res.json('deleted obj')
        }catch(err){
            console.log(err)
        }
    }
}
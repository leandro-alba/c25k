const Week6s1 = require('../models/Week6s1')

module.exports = {
    getWeek6: async (req,res)=>{
        try{
            const week6s1Items = await Week6s1.find()
            
            res.render('week6s1.ejs', {week6s1s: week6s1Items})
        }catch(err){
            console.log(err)
        }
    },
    createWeek6: async (req,res)=>{
        try{
            await Week6s1.create({week6s1: req.body.week6s1Item})
            console.log('Nice work, week 6 progress')
            res.redirect('/week6s1')
        }catch(err){
            console.log(err)
        }
    },
    deleteWeek6: async (req,res)=>{
        try{
            await Week6s1.findOneAndDelete({_id:req.body.week6s1IdFromJSFile})
            console.log('delete comment')
            res.json('deleted obj')
        }catch(err){
            console.log(err)
        }
    }
}
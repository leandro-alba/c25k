const Week8s1 = require('../models/Week8s1')

module.exports = {
    getWeek8: async (req,res)=>{
        try{
            const week8s1Items = await Week8s1.find()
            
            res.render('week8s1.ejs', {week8s1s: week8s1Items})
        }catch(err){
            console.log(err)
        }
    },
    createWeek8: async (req,res)=>{
        try{
            await Week8s1.create({week8s1: req.body.week8s1Item})
            console.log('Nice work, week 8 progress')
            res.redirect('/week8s1')
        }catch(err){
            console.log(err)
        }
    },
    deleteWeek8: async (req,res)=>{
        try{
            await Week8s1.findOneAndDelete({_id:req.body.week8s1IdFromJSFile})
            console.log('delete comment')
            res.json('deleted obj')
        }catch(err){
            console.log(err)
        }
    }
}
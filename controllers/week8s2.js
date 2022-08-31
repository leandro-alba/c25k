const Week8s2 = require('../models/Week8s2')

module.exports = {
    getWeek8: async (req,res)=>{
        try{
            const week8s2Items = await Week8s2.find()
            
            res.render('week8s2.ejs', {week8s2s: week8s2Items})
        }catch(err){
            console.log(err)
        }
    },
    createWeek8: async (req,res)=>{
        try{
            await Week8s2.create({week8s2: req.body.week8s2Item})
            console.log('Nice work, week 8 progress')
            res.redirect('/week8s2')
        }catch(err){
            console.log(err)
        }
    },
    deleteWeek8: async (req,res)=>{
        try{
            await Week8s2.findOneAndDelete({_id:req.body.week8s2IdFromJSFile})
            console.log('delete comment')
            res.json('deleted obj')
        }catch(err){
            console.log(err)
        }
    }
} 
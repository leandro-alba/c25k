const Week7s1 = require('../models/Week7s1')

module.exports = {
    getWeek7: async (req,res)=>{
        try{
            const week7s1Items = await Week7s1.find()
            
            res.render('week7s1.ejs', {week7s1s: week7s1Items})
        }catch(err){
            console.log(err)
        }
    },
    createWeek7: async (req,res)=>{
        try{
            await Week7s1.create({week7s1: req.body.week7s1Item})
            console.log('Nice work, week 7 progress')
            res.redirect('/week7s1')
        }catch(err){
            console.log(err)
        }
    },
    deleteWeek7: async (req,res)=>{
        try{
            await Week7s1.findOneAndDelete({_id:req.body.week7s1IdFromJSFile})
            console.log('delete comment')
            res.json('deleted obj')
        }catch(err){
            console.log(err)
        }
    }
}
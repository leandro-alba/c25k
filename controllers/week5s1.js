const Week5s1 = require('../models/Week5s1')

module.exports = {
    getWeek5: async (req,res)=>{
        try{
            const week5s1Items = await Week5s1.find()
            //const itemsLeft = await Week5s1.countDocuments({completed: false})
            res.render('week5s1.ejs', {week5s1s: week5s1Items})
        }catch(err){
            console.log(err)
        }
    },
    createWeek5: async (req,res)=>{
        try{
            await Week5s1.create({week5s1: req.body.week5s1Item})
            console.log('Nice work, week 5 progress')
            res.redirect('/week5s1')
        }catch(err){
            console.log(err)
        }
    },
    deleteWeek5: async (req,res)=>{
        try{
            await Week5s1.findOneAndDelete({_id:req.body.week5s1IdFromJSFile})
            console.log('delete comment')
            res.json('deleted obj')
        }catch(err){
            console.log(err)
        }
    }
}
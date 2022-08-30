const Week5s2 = require('../models/Week5s2')

module.exports = {
    getWeek5: async (req,res)=>{
        try{
            const week5s2Items = await Week5s2.find()
            
            res.render('week5s2.ejs', {week5s2s: week5s2Items})
        }catch(err){
            console.log(err)
        }
    },
    createWeek5: async (req,res)=>{
        try{
            await Week5s2.create({week5s2: req.body.week5s2Item})
            console.log('Nice work, week 5 progress')
            res.redirect('/week5s2')
        }catch(err){
            console.log(err)
        }
    },
    deleteWeek5: async (req,res)=>{
        try{
            await Week5s2.findOneAndDelete({_id:req.body.week5s2IdFromJSFile})
            console.log('delete comment')
            res.json('deleted obj')
        }catch(err){
            console.log(err)
        }
    }
}
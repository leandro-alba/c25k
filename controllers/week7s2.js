const Week7s2 = require('../models/Week7s2')

module.exports = {
    getWeek7: async (req,res)=>{
        try{
            const week7s2Items = await Week7s2.find()
            
            res.render('week7s2.ejs', {week7s2s: week7s2Items})
        }catch(err){
            console.log(err)
        }
    },
    createWeek7: async (req,res)=>{
        try{
            await Week7s2.create({week7s2: req.body.week7s2Item})
            console.log('Nice work, week 7 progress')
            res.redirect('/week7s2')
        }catch(err){
            console.log(err)
        }
    },
    deleteWeek7: async (req,res)=>{
        try{
            await Week7s2.findOneAndDelete({_id:req.body.week7s2IdFromJSFile})
            console.log('delete comment')
            res.json('deleted obj')
        }catch(err){
            console.log(err)
        }
    }
}
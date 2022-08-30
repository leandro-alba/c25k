const Week2 = require('../models/Week2')

module.exports = {
    getWeek2: async (req,res)=>{
        try{
            const week2Items = await Week2.find()
            const itemsLeft = await Week2.countDocuments({completed: false})
            res.render('week2.ejs', {week2s: week2Items, left: itemsLeft})
        }catch(err){
            console.log(err)
        }
    },
    createWeek2: async (req,res)=>{
        try{
            await Week2.create({week2: req.body.week2Item})
            console.log('Nice work, week 2 progress')
            res.redirect('/week2')
        }catch(err){
            console.log(err)
        }
    },
    deleteWeek2: async (req,res)=>{
        try{
            await Week2.findOneAndDelete({_id:req.body.week2IdFromJSFile})
            console.log('delete comment')
            res.json('deleted obj')
        }catch(err){
            console.log(err)
        }
    }
}
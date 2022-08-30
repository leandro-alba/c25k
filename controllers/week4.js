const Week4 = require('../models/Week4')

module.exports = {
    getWeek4: async (req,res)=>{
        try{
            const week4Items = await Week4.find()
            const itemsLeft = await Week4.countDocuments({completed: false})
            res.render('week4.ejs', {week4s: week4Items, left: itemsLeft})
        }catch(err){
            console.log(err)
        }
    },
    createWeek4: async (req,res)=>{
        try{
            await Week4.create({week4: req.body.week4Item})
            console.log('Nice work, week 4 progress')
            res.redirect('/week4')
        }catch(err){
            console.log(err)
        }
    },
    deleteWeek4: async (req,res)=>{
        try{
            await Week4.findOneAndDelete({_id:req.body.week4IdFromJSFile})
            console.log('delete comment')
            res.json('deleted obj')
        }catch(err){
            console.log(err)
        }
    }
}
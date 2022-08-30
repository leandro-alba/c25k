const Week3 = require('../models/Week3')

module.exports = {
    getWeek3: async (req,res)=>{
        try{
            const week3Items = await Week3.find()
            const itemsLeft = await Week3.countDocuments({completed: false})
            res.render('week3.ejs', {week3s: week3Items, left: itemsLeft})
        }catch(err){
            console.log(err)
        }
    },
    createWeek3: async (req,res)=>{
        try{
            await Week3.create({week3: req.body.week3Item})
            console.log('Nice work, week 3 progress')
            res.redirect('/week3')
        }catch(err){
            console.log(err)
        }
    },
    deleteWeek3: async (req,res)=>{
        try{
            await Week3.findOneAndDelete({_id:req.body.week3IdFromJSFile})
            console.log('delete comment')
            res.json('deleted obj')
        }catch(err){
            console.log(err)
        }
    }
}
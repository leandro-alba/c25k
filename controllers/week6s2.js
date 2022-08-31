const Week6s2 = require('../models/Week6s2')

module.exports = {
    getWeek6: async (req,res)=>{
        try{
            const week6s2Items = await Week6s2.find()
            
            res.render('week6s2.ejs', {week6s2s: week6s2Items})
        }catch(err){
            console.log(err)
        }
    },
    createWeek6: async (req,res)=>{
        try{
            await Week6s2.create({week6s2: req.body.week6s2Item})
            console.log('Nice work, week 6 progress')
            res.redirect('/week6s2')
        }catch(err){
            console.log(err)
        }
    },
    deleteWeek6: async (req,res)=>{
        try{
            await Week6s2.findOneAndDelete({_id:req.body.week6s2IdFromJSFile})
            console.log('delete comment')
            res.json('deleted obj')
        }catch(err){
            console.log(err)
        }
    }
}
const Week5s3 = require('../models/Week5s3')

module.exports = {
    getWeek5: async (req,res)=>{
        try{
            const week5s3Items = await Week5s3.find()
            //const itemsLeft = await Week5s1.countDocuments({completed: false})
            res.render('week5s3.ejs', {week5s3s: week5s3Items})
        }catch(err){
            console.log(err)
        }
    },
    createWeek5: async (req,res)=>{
        try{
            await Week5s3.create({week5s3: req.body.week5s3Item})
            console.log('Nice work, week 5 progress')
            res.redirect('/week5s3')
        }catch(err){
            console.log(err)
        }
    },
    deleteWeek5: async (req,res)=>{
        try{
            await Week5s3.findOneAndDelete({_id:req.body.week5s3IdFromJSFile})
            console.log('delete comment')
            res.json('deleted obj')
        }catch(err){
            console.log(err)
        }
    }
}
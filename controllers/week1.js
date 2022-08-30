const Week1 = require('../models/Week1')

module.exports = {
    getWeek1: async (req,res)=>{
        try{
            const week1Items = await Week1.find()
            res.render('week1.ejs', {week1s: week1Items})
        }catch(err){
            console.log(err)
        }
    },
    createWeek1: async (req,res)=>{
        try{
            await Week1.create({week1: req.body.week1Item})
            console.log('Nice Work, week 1 progress')
            res.redirect('/week1')
        }catch(err){
            console.log(err)
        }
    },
    deleteWeek1: async (req,res)=>{
        console.log(req.body.week1IdFromJSFile)
        try{
            await Week1.findOneAndDelete({_id:req.body.week1IdFromJSFile})
            console.log('Comment deleted from week 1')
            res.json('deleted')
        }catch(err){
            console.log(err)
        }
    },
    // updateWeek1: async (req,res)=>{
    //     try{
    //         await Week1.findOneAndUpdate({_id:req.body.week1IdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('completed')
    //         res.json('completed')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // undoWeek1: async (req,res)=>{
    //     try{
    //         await Week1.findOneAndUpdate({_id:req.body.week1IdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('completed false')
    //         res.json('completed false')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
}
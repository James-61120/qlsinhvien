const express = require('express')
const router = express.Router()
const studentModel = require('../Models/student.model')

router.get('/sinhvien',async(req,res)=>{
    const students = await studentModel.find()
    console.log(students)
    res.render('students/list',{students:students})
})

router.get('/sinhvien/add',(req,res)=>
{
    res.render('students/add')
})
router.post('/sinhvien/add',async(req,res)=>{
    try{
        const stud = new studentModel(
            {
                name:req.body.name,
                age:req.body.age,
                email:req.body.email
            }  
        )
         await stud.save()
         res.redirect('/sinhvien/')
    }
    catch(e)
    {
        console.log(e)
        res.redirect('/')
    }   
})

router.get('/sinhvien/edit/:id',async(req,res)=>{
    
    try{
        const SV = await studentModel.findById(req.params.id)
        res.render('students/edit',{SV,SV,SV})
    }
    catch(e)
    {
        console.log(e)
        res.redirect('/')
    }   
})


router.put('/sinhvien/edit/:id',async(req,res)=>{
    
    try{
       const siv = await studentModel.findById(req.params.id)
       siv.name = req.body.name
       siv.age = req.body.age
       siv.email = req.body.email
       await siv.save()
       res.redirect('/sinhvien')
    }
    catch(e)
    {
        console.log(e)
        res.redirect('/')
    }   
})

router.delete('/sinhvien/delete/:id',async(req,res)=>{
    try{
        await studentModel.findByIdAndDelete(req.params.id)
        res.redirect('/sinhvien/')
    }
    catch(e)
    {
        console.log(e)
        res.redirect('/')
    }
})

module.exports = router
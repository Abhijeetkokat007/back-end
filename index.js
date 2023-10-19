// console.log('backent running');
import  Express  from "express";

const app = Express();

app.use(Express.json());
app.post('/student', (req, res)=>{

    const {name, number} = req.query

    res.json({
        information : `my name is ${name}. my mo number is ${number}`
    })

    console.log(req.query)
    console.log(req.body)

})

const PORT = 5050;

app.listen(PORT, ()=>{
    console.log(` server running on port ${PORT} `)
})
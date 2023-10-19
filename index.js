import Express from "express";

const app = Express();

app.use(Express.json());

const PORT = 5000;

const students = [];

app.get('/students', (req, res) => {



    res.json({
        success: true,
        data: students,
        message: `successfully fecth data. `,

    });
});

app.post('/student', (req, res) => {
    const { name, age, number, email } = req.body;

    if (!name) {

        return res.json({
            success: false,
            message: `name is required `,

        });
    }

    if (!number) {

        return res.json({
            success: false,
            message: `number is required `,

        });
    }

    if (!age) {

        return res.json({
            success: false,
            message: `age is required `,

        });
    }

    if (!email) {

        return res.json({
            success: false,
            message: `email is required `,

        });
    }

    const id = Math.floor(Math.random() * 1000) + 1;

    const newstudent = {
        id,
        name,
        number,
        age,
        email

    }

    students.push(newstudent);

    res.json({
        success: true,
        data: newstudent,
        message: `successfully added new data. `,

    });

})

app.get('/boy', (req, res) => {
    const { id } = req.query;
    let boy = null;

    students.forEach((stud) => {
        if (stud.id == id) {
            boy = stud;
        }

    })

    if (boy == null) {

        return res.json({
            success: false,
            message: `student not found `,
        })
    }

    res.json({
        success: true,
        data: boy,
        message: `successfully added new student. `,
    })



})
app.listen(PORT, () => {
    console.log(` server running on port ${PORT} `);
})
const express = require("express")
const router = express.Router()
const users = require("../models/UserSchema")


// router.get("/", (req, res) => {
//     console.log("Connect");
// })

    router.post("/register", async (req, res) => {
        console.log(req.body)
        const {name,fName,cnic,regId,corseType,email,password,quizmarks, typingmarks, oralmarks } = req.body;

        // if(!name || !fName || !cnic || !regId || !corseType || !email || !password || !marks)
        // {
        //     res.status(404).send("Data Enter Kr BSDK")
        // }

        try {
             
            const preuser = await users.findOne({
                email:email
            })
            console.log(preuser)
            if (preuser){
                res.status(404).send("User Already exist")
            }
            else {
                const addUser = new users({
                    name,fName,cnic,regId,corseType,email,password,quizmarks,typingmarks,oralmarks
                });

                await addUser.save()
                res.status(201).json(addUser)
                console.log(addUser)
            }
        }
        catch (err) {
            res.status(404).send(err)
        }

    })

    router.get("/getdata", async(req, res)=> {
        try{
                const userGetData = await users.find()
                console.log(userGetData)
                res.status(201).json(userGetData)
        }
        catch (err){
            res.status(404).send(err)
        }
    })

    router.delete("/deleteuser/:id", async (req, res) => {
        try{
            const {id} = req.params;
            const deleteuser = await users.findByIdAndDelete({_id:id})
            req.status(201).json(deleteuser);
        }
        catch (err) {
            res.status(422).json(err)
        }
    })

module.exports = router
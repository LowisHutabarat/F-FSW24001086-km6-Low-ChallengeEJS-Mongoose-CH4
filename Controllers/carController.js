const { Car } = require("../models");

const createCar = async (req,res) => {
    // desctructing Object
    const {name, rentPerDay, capacity, image} = req.body

    try {
        const newCar = await Customer.create({
            name,
            rentPerDay,
            capacity,
            image
        })

        res.status(200).json({
            status: "success",
            data : {
                newCar
            }
        })
    } catch (err) {
        console.log(err.message)
    }

}


    module.exports =  {
        createCar,
    }
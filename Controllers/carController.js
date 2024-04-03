const { Car } = require("../models");

const createCar = async (req, res) => {
    // Destructuring object
    const { name, rentPerDay, capacity, image } = req.body;

    try {
        const newCar = await Car.create({
            name,
            rentPerDay,
            capacity,
            image
        });

        res.status(200).json({
            status: "success",
            data: {
                newCar
            }
        });
    } catch (err) {
        console.error(err.message); // Log the error message to console for debugging
        res.status(500).json({
            status: "error",
            message: "Failed to create car"
        });
    }
};

module.exports = {
    createCar,
};

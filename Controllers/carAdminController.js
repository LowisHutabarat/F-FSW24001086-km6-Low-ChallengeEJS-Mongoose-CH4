const { Car } = require("../models");

const carPage = async (req, res) => {
    try {
        const cars = await Car.findAll();
        console.log(cars);
        res.render("cars/index.ejs", {
            cars,
            
            message: req.flash("message", ""),
        });
    } catch (error) {
        res.render("error.ejs", {
            message: error.message,
        });
    }
};

const createCarPage = async (req, res) => {
    try {
        res.render("cars/create.ejs");
    } catch (error) {
        res.render("error.ejs", {
            message: error.message,
        });
    }
};

const createCar = async (req, res) => {
try {
        // Check if file was uploaded
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        const data = req.body;

        // Set the image path in the data object
        data.image = './images/' + req.file.filename;

        // Create the car with the data
        await Car.create(data);

        req.flash("message", "Car created successfully.");
        res.redirect("/cars");
        } catch (error) {
        res.render("error.ejs", {
            message: error.message,
        });
    }
};

const editCarPage = async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id);
        res.render("cars/edit.ejs", {
            car,
        });
    } catch (error) {
        res.render("error.ejs", {
            message: error.message,
        });
    }
};

const editCar = async (req, res) => {
    try {
        await Car.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        req.flash("message", "Car updated successfully.");
        res.redirect("/cars");
    } catch (error) {
        res.render("error.ejs", {
            message: error.message,
        });
    }
};

const deleteCar = async (req, res) => {
    try {
        await Car.destroy({
            where: {
                id: req.params.id,
            },
        });
        req.flash("message", "Car deleted successfully.");
        res.redirect("/cars");
    } catch (error) {
        res.render("error.ejs", {
            message: error.message,
        });
    }
};

module.exports = {
    carPage,
    createCarPage,
    createCar,
    editCarPage,
    editCar,
    deleteCar,
};


// const {Car} = require("../models");

// //callback
// const carPage = async (req, res) => {
//     try {
//         const cars = await Car.findAll()
//         res.render("customers/index.ejs", {
//             cars,
//             message: req.flash("message",""),
//         });
//     } catch (error) {
//         res.render("error.ejs", {
//             message : error.message,
//         });
//     }
// };

// const createCarPage = async (req, res) => {
//     try {
//         res.render("cars/create.ejs");
//     } catch (error) {
//         res.render("error.ejs", {
//             message : error.message,
//         });
//     }
// };

// const createCar = async (req, res) => {
//     try {
//         await Car.create(req.body);
//         res.redirect("/cars")
//         req.flash("message","Ditambah");
//     } catch (error) {
//         res.render("error.ejs", {
//             message : error.message,
//         });
//     }
// };

// const editCarPage = async (req, res) => {
//     try {
//         const cars = await Customer.findByPk(
//             req.params.id
//         );
//         res.render("cars/edit.ejs", {
//             cars,
//         });
//     } catch (error) {
//         res.render("error.ejs", {
//             message : error.message,
//         });
//     }
// };

// const editCar = async (req, res) => {
//     try {
//         await Car.update(
//             req.params.id,req.body, {
//                 where: {
//                     id: req.params.id,
//                 }
//             }
//         );
// res.redirect("/cars")
//     } catch (error) {
//         res.render("error.ejs", {
//             message : error.message,
//         });
//     }
// };


// const deleteCar = async (req, res) => {
//     try {
//         await Car.destroyAll({
            
//                 where: {
//                     id: req.params.id,
//                 }
//             }
//         );
// res.redirect("/cars")
//     } catch (error) {
//         res.render("error.ejs", {
//             message : error.message,
//         });
//     }
// };

// module.exports = {
//     carPage,
//     createCarPage,
//     createCar,
//     editCarPage,
//     editCar,
//     deleteCar,
// };


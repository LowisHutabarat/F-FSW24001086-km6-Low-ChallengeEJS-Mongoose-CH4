const {Car} = require("../models");

//callback
const carPage = async (req, res) => {
    try {
        const cars = await Car.findAll()
        res.render("customers/index.ejs", {
            cars,
            message: req.flash("message",""),
        });
    } catch (error) {
        res.render("error.ejs", {
            message : error.message,
        });
    }
};

const createCarPage = async (req, res) => {
    try {
        res.render("cars/create.ejs");
    } catch (error) {
        res.render("error.ejs", {
            message : error.message,
        });
    }
};

const createCar = async (req, res) => {
    try {
        await Car.create(req.body);
        res.redirect("/cars")
        req.flash("message","Ditambah");
    } catch (error) {
        res.render("error.ejs", {
            message : error.message,
        });
    }
};

const editCarPage = async (req, res) => {
    try {
        const cars = await Customer.findByPk(
            req.params.id
        );
        res.render("cars/edit.ejs", {
            cars,
        });
    } catch (error) {
        res.render("error.ejs", {
            message : error.message,
        });
    }
};

const editCar = async (req, res) => {
    try {
        await Car.update(
            req.params.id,req.body, {
                where: {
                    id: req.params.id,
                }
            }
        );
res.redirect("/cars")
    } catch (error) {
        res.render("error.ejs", {
            message : error.message,
        });
    }
};


const deleteCar = async (req, res) => {
    try {
        await Car.destroyAll({
            
                where: {
                    id: req.params.id,
                }
            }
        );
res.redirect("/cars")
    } catch (error) {
        res.render("error.ejs", {
            message : error.message,
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
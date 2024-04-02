const router = require("express").Router();

const CustomerAdmin = require("../controllers/customerAdminController");

router.get("/", CarAdmin.CarPage);
router.get("/create", CarAdmin.createCarPage);
router.post("/admin/create", CarAdmin.createCar);
router.get("/edit/:id", CarAdmin.editCarPage);
router.post("admin/edit/:id", CarAdmin.editCar);
router.post("admin/delete/:id", CarAdmin.deleteCar);

module.exports = router;
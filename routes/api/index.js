const router = require("express").Router();
const contactRoutes = require("./contacts");
const mailRoutes = require('./sendMail')
const projectsRoutes = require('./myProjects')

router.use("/contacts", contactRoutes);
router.use('/sendMail', mailRoutes)
router.use('/myProjects', projectsRoutes)

module.exports = router;

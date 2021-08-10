const express = require("express");
const router = express.Router();

const {
    homePage,
    aboutPage,
    contactPage,
    composePage,
    deletePost,
    composePost,
    findPostsById
  } = require("../controllers/controller");


router.get("/", homePage)
router.get("/about", aboutPage) 
router.get("/contact",contactPage) 
router.get("/compose", composePage)
router.post("/delete", deletePost)
router.post("/compose", composePost)
router.get("/posts/:postid", findPostsById)

module.exports = router;

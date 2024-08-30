const express = require("express");
const blogController = require("../controllers/blogCotroller");

const router = express.Router();

// BLOG-ROUTES
const {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
} = blogController;

router.get("/", blog_index);
router.post("/", blog_create_post);
router.get("/create", blog_create_get); // we should keep this before blogs/:id only if we give it bottom it will be error because after blogs/  the create is identified as id so it won't go bottom and its not id so its an error
router.get("/:id", blog_details);
router.delete("/:id", blog_delete);

module.exports = router;

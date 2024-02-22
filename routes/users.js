const express = require("express");
const router = express.Router();

//always remember the route will always read top to bottom

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("users lists");
});
router.get("/create", (req, res) => {
  res.render("users/news", { firstName: "Test" });
});
router.post("/", (req, res) => {
  const isValid = true;

  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("error");
    res.render("users/news", { firstName: req.body.firstName });
  }

  console.log(req.body.firstName);
  res.send("Hi");
});

// use router.rout to chain routes
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send("user get with id " + req.params.id);
  })
  .put((req, res) => {
    res.send("update user  with id " + req.params.id);
  })
  .delete((req, res) => {
    res.send("delete user  with id " + req.params.id);
  });

const users = [{ name: "Klye" }, { name: "Skaly" }];

//this function will always run when the param is matched with what you passed in
// it saves code and time, to get the data / value of objects that you need
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

//to make the router dynamic depends on the users id or others
// router.get("/:id", (req, res) => {
//   req.params.id;
//   res.send("user get with id " + req.params.id);
// });
// router.put("/:id", (req, res) => {
//   req.params.id;
//   res.send("update user  with id " + req.params.id);
// });
// router.delete("/:id", (req, res) => {
//   req.params.id;
//   res.send("delete user  with id " + req.params.id);
// });
module.exports = router;

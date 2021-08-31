module.exports = app => {
  const items = require("../controllers/item.controller.js");

  var router = require("express").Router();

  // Crear un nuevo item
  router.post("/", items.create);

  // Leer todos los items
  router.get("/", items.findAll);

  // Leer todos los publicados
  router.get("/published", items.findAllPublished);

  // Leer un solo item por ID
  router.get("/:id", items.findOne);

  // Modificar un item por ID
  router.put("/:id", items.update);

  // Borrar un item por ID
  router.delete("/:id", items.delete);

  // Borrar todos los items
  router.delete("/", items.deleteAll);

  app.use("/api/items", router);
};

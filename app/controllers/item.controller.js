const db = require("../models");
const Item = db.items;
const Op = db.Sequelize.Op;

// Crear nuevo item
exports.create = (req, res) => {
  // Validar campo en blanco
  if (!req.body.ItemCode) {
    res.status(400).send({
      message: "Existen campos vacios"
    });
    return;
  }

  // Crear elemento
  const item = {
    id: req.body.id,
    IdItem: req.body.IdItem,
    ItemCode: req.body.ItemCode,
    IdOwn: req.body.IdOwn,
    AltItemCode: req.body.AltItemCode,
    Description: req.body.Description,
    IdGrpItem1: req.body.IdGrpItem1,
    IdGrpItem2: req.body.IdGrpItem2,
    IdGrpItem3: req.body.IdGrpItem3,
    IdGrpItem4: req.body.IdGrpItem4,
    LongItemName: req.body.LongItemName,
    ShortItemName: req.body.ShortItemName,
    Status: req.body.Status,
    ItemComment: req.body.ItemComment,
    ShelfLife: req.body.ShelfLife,
    ExpirationDays: req.body.ExpirationDays,
    CtrlSerialInbound: req.body.CtrlSerialInbound,
    CtrlSerialInternal: req.body.CtrlSerialInternal,
    CtrlSerialOutbound: req.body.CtrlSerialOutbound,
    LotControlInbound: req.body.LotControlInbound,
    LotControlInternal: req.body.LotControlInternal,
    LotControlOutbound: req.body.LotControlOutbound,
    Weight: req.body.Weight,
    Volume: req.body.Volume,
    Length: req.body.Length,
    Width: req.body.Width,
    Height: req.body.Height,
    NestedVolume: req.body.NestedVolume,
    InspectionRequerid: req.body.InspectionRequerid,
    InspectionCode: req.body.InspectionCode,
    IdPutawayZone: req.body.IdPutawayZone,
    ControlExpDate: req.body.ControlExpDate,
    ControlFabDate: req.body.ControlFabDate,
    Acumulable: req.body.Acumulable,
    ReOrderPoint: req.body.ReOrderPoint,
    ReOrderQty: req.body.ReOrderQty,
    PalletQty: req.body.PalletQty,
    CutMinimum: req.body.CutMinimum,
    Originator:req.body.Originator,
    VASProfile:req.body.VASProfile,
    Hazard: req.body.Hazard,
    Price: req.body.Price,
    InventoryType:req.body.InventoryType,
    StackingSequence: req.body.StackingSequence,
    CommentControl: req.body.CommentControl,
    CompatibilityCode: req.body.CompatibilityCode,
    MSDSUrl:req.body.MSDSUrl,
    PictureUrl:req.body.PictureUrl,
    GrpClass1:req.body.GrpClass1,
    GrpClass2:req.body.GrpClass2,
    GrpClass3:req.body.GrpClass3,
    GrpClass4:req.body.GrpClass4,
    GrpClass5:req.body.GrpClass5,
    GrpClass6:req.body.GrpClass6,
    GrpClass7:req.body.GrpClass7,
    GrpClass8:req.body.GrpClass8,
    SpecialField1:req.body.SpecialField1,
    SpecialField2:req.body.SpecialField2,
    SpecialField3:req.body.SpecialField3,
    SpecialField4:req.body.SpecialField4,
    DateCreated: req.body.DateCreated,
    UserCreated: req.body.UserCreated,
    DateModified: req.body.DateModified,
    UserModified: req.body.UserModified
    // published: req.body.published ? req.body.published : false
  };
      console.log(item)
  // Crea en la DB
  Item.create(item)
  
    .then(data => {

      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al crear elemento en la base de datos"
      });
    });
};

// Lectura de todos los elementos
exports.findAll = (req, res) => {
  /*
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
*/
  Item.findAll(/*{ where: condition }*/)
    .then(data => {
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      console.log(data)
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error en la lectura de la base de datos"
      });
    });
};

// Buscar por ID
exports.findOne = (req, res) => {
  const id = req.params.id;
  //console.log(req)
  console.log("!!!!!!" + id)

  Item.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error de lectura del elemento con ID=" + id
      });
    });
};

// Update elemento por ID
exports.update = (req, res) => {
  const id = req.params.id;

  Item.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Elemento correctamente actualizado"
        });
      } else {
        res.send({
          message: `No se puede actualizar elemento con ID=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al actualizar elemento con ID=" + id
      });
    });
};

// Delete por ID
exports.delete = (req, res) => {
  const id = req.params.id;

  Item.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "El elemento se a eliminado correctamente"
        });
      } else {
        res.send({
          message: `No se puede eliminar el elemento con ID=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Item with id=" + id
      });
    });
};

// elimina todo de la tabla de la BD
exports.deleteAll = (req, res) => {
  Item.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `Se eliminaron ${nums} elementos correctamente` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrio un error al intentar eliminar todos los elementos"
      });
    });
};

// Traer todos los elementos
exports.findAllPublished = (req, res) => {
  Item.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrio un error al intentar leer todos los elementos"
      });
    });
};

module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("item", {
    IdItem: {
      type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
    },
    ItemCode: {
      type: Sequelize.STRING(30)
    },
    IdOwn: {
      type: Sequelize.INTEGER
    },
    AltItemCode: {
      type: Sequelize.STRING(30)
    },
    Description: {
      type: Sequelize.STRING(100)
    },
    IdGrpItem1: {
      type: Sequelize.INTEGER
    },
    IdGrpItem2: {
      type: Sequelize.INTEGER
    },
    IdGrpItem3: {
      type: Sequelize.INTEGER
    },
    IdGrpItem4: {
      type: Sequelize.INTEGER
    },
    LongItemName: {
      type: Sequelize.STRING(60)
    },
    ShortItemName: {
      type: Sequelize.STRING(20)
    },
    Status: {
      type: Sequelize.INTEGER
    },
    ItemComment: {
      type: Sequelize.STRING(100)
    },
    ShelfLife: {
      type: Sequelize.INTEGER
    },
    ExpirationDays: {
      type: Sequelize.INTEGER
    },
    CtrlSerialInbound: {
      type: Sequelize.INTEGER
    },
    CtrlSerialInternal: {
      type: Sequelize.INTEGER
    },
    CtrlSerialOutbound: {
      type: Sequelize.INTEGER
    },
    LotControlInbound: {
      type: Sequelize.INTEGER
    },
    LotControlInternal: {
      type: Sequelize.INTEGER
    },
    LotControlOutbound: {
      type: Sequelize.INTEGER
    },
    Weight: {
      type: Sequelize.FLOAT(12, 4)
    },
    Volume: {
      type: Sequelize.FLOAT(12, 4)
    },
    Length: {
      type: Sequelize.FLOAT(12, 4)
    },
    Width: {
      type: Sequelize.FLOAT(12, 4)
    },
    Height: {
      type: Sequelize.FLOAT(12, 4)
    },
    NestedVolume: {
      type: Sequelize.FLOAT(12, 4)
    },
    InspectionRequerid: {
      type: Sequelize.STRING(5)
    },
    InspectionCode: {
      type: Sequelize.INTEGER
    },
    IdPutawayZone: {
      type: Sequelize.INTEGER
    },
    ControlExpDate: {
      type: Sequelize.INTEGER
    },
    ControlFabDate: {
      type: Sequelize.INTEGER
    },
    Acumulable: {
      type: Sequelize.INTEGER
    },
    ReOrderPoint: {
      type: Sequelize.FLOAT(12, 4)
    },
    ReOrderQty: {
      type: Sequelize.FLOAT(12, 4)
    },
    PalletQty: {
      type: Sequelize.INTEGER
    },
    CutMinimum: {
      type: Sequelize.INTEGER
    },
    Originator: {
      type: Sequelize.STRING(30)
    },
    VASProfile: {
      type: Sequelize.STRING(10)
    },
    Hazard: {
      type: Sequelize.INTEGER
    },
    Price: {
      type: Sequelize.FLOAT(12, 4)
    },
    InventoryType: {
      type: Sequelize.STRING(5)
    },
    StackingSequence: {
      type: Sequelize.INTEGER
    },
    CommentControl: {
      type: Sequelize.INTEGER
    },
    CompatibilityCode: {
      type: Sequelize.STRING(5)
    },
    MSDSUrl: {
      type: Sequelize.STRING(200)
    },
    PictureUrl: {
      type: Sequelize.STRING(200)
    },
    GrpClass1: {
      type: Sequelize.STRING(20)
    },
    GrpClass2: {
      type: Sequelize.STRING(20)
    },
    GrpClass3: {
      type: Sequelize.STRING(20)
    },
    GrpClass4: {
      type: Sequelize.STRING(20)
    },
    GrpClass5: {
      type: Sequelize.STRING(20)
    },
    GrpClass6: {
      type: Sequelize.STRING(20)
    },
    GrpClass7: {
      type: Sequelize.STRING(20)
    },
    GrpClass8: {
      type: Sequelize.STRING(20)
    },
    SpecialField1: {
      type: Sequelize.STRING(20)
    },
    SpecialField2: {
      type: Sequelize.STRING(20)
    },
    SpecialField3: {
      type: Sequelize.STRING(20)
    },
    SpecialField4: {
      type: Sequelize.STRING(20)
    },
    DateCreated: {
      type: Sequelize.DATE
    },
    UserCreated: {
      type: Sequelize.STRING(20)
    },
    DateModified: {
      type: Sequelize.DATE
    },
    UserModified: {
      type: Sequelize.STRING(20)
    }
  });

  return Item;
};

const Computer = require("../models/computer");

//metodo para obtener todas las máquinas
exports.getComputers = (req, res) => {
  Computer.find().then((computerResult) => {
    if (!computerResult) {
      return res.status(200).json({ message: "Machine not found" });
    }
    res.status(200).json(computerResult);
  });
};

//metodo para consultar una máquina por id
exports.getComputer = (req, res) => {
  Computer.findById(req.params.id).then((computerResult) => {
    if (!computerResult) {
      return res.status(200).json({ message: "Computer not found" });
    }
    res.status(200).json(computerResult);
  });
};

//metodo para crear una nueva máquina
exports.createComputer = (req, res) => {
  const newComputer = new Computer({
    gce_nombre_equipo: req.body.gce_nombre_equipo,
    gce_board: req.body.gce_board,
    gce_case: req.body.gce_case,
    gce_procesador: req.body.gce_procesador,
    gce_grafica: req.body.gce_grafica,
    gce_ram: req.body.gce_ram,
    gce_disco_duro: req.body.gce_disco_duro,
    gce_teclado: req.body.gce_teclado,
    gce_mouse: req.body.gce_mouse,
    gce_pantalla: req.body.gce_pantalla,
    gce_estado: req.body.gce_estado,
  });

  newComputer
    .save()
    .then(() => {
      res.status(201).json({ message: "Computer created" });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

//metodo para actualizar una máquina
exports.updateComputer = (req, res) => {
  const id = req.params.id;
  const computer = new Computer({
    _id: id,
    gce_nombre_equipo: req.body.gce_nombre_equipo,
    gce_board: req.body.gce_board,
    gce_case: req.body.gce_case,
    gce_procesador: req.body.gce_procesador,
    gce_grafica: req.body.gce_grafica,
    gce_ram: req.body.gce_ram,
    gce_disco_duro: req.body.gce_disco_duro,
    gce_teclado: req.body.gce_teclado,
    gce_pantalla: req.body.gce_mouse,
    gce_pantalla: req.body.gce_pantalla,
    gce_estado: req.body.gce_estado,
  });

  Computer.updateOne({ _id: id }, computer).then((result) => {
    if (result.modifiedCount > 0) {
      res.status(200).json({ message: "Update success" });
    } else {
      res.status(200).json({ message: "Update failed" });
    }
  });
};

//metodo para eliminar una máquina
exports.deleteComputer = (req, res) => {
  Computer.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(req.params.id);
    if (result.deletedCount > 0) {
      res.status(200).json({ message: "Computer eliminated" });
    } else {
      res.status(200).json({ message: "Computer not found" });
    }
  });
};

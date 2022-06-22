const mongoose = require("mongoose");

const computerSchema = mongoose.Schema({
  gce_nombre_equipo: { type: String, required: false },
  gce_board: { type: String, required: false },
  gce_case: { type: String, required: false },
  gce_procesador: { type: String, required: false },
  gce_grafica: { type: String, required: false },
  gce_ram: { type: String, required: false },
  gce_disco_duro: { type: String, required: false },
  gce_teclado: { type: String, required: false },
  gce_mouse: { type: String, required: false },
  gce_pantalla: { type: String, required: false },
  gce_estado: { type: Boolean, required: false },
});

module.exports = mongoose.model("Computer", computerSchema);

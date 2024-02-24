const express = require("express");
const app = express();
const puerto = 3000;

const bodyParser = require("body-parser");

//saca el contendio y lo parsea en le body
app.use(bodyParser.json());
//funcion midelware
app.use("/student", (request, response, next) => {
  console.log("Ingrese a la funcion de midelware");
  console.log("Headers", request.headers);
  console.log("Body", request.body);

  next();
});

//peticion get
app.get("/student", (request, response) => {
  //objeto estudiantes: cedula,nombre,apellido,insitucion,tutor,correo,telefono
  const student = [
    {
      cedula: "01",
      nombre: "Majo",
      apellido: "Vaca",
      institucion: "Maria axuliadora",
      tutor: "jonathan",
      correo: "major@gmail.com",
      telefono: "09675611",
    },
    {
      cedula: "02",
      nombre: "Joel",
      apellido: "Mendoza",
      institucion: "Don bosco",
      tutor: "Yunio",
      correo: "joel@gmail.com",
      telefono: "09675611",
    },
    {
      cedula: "03",
      nombre: "Carlos",
      apellido: "Farias",
      institucion: "salesiano",
      tutor: "jonathan",
      correo: "carlos@gmail.com",
      telefono: "0969293599",
    },
  ];
  console.log("Ingrese al get para obtener los contactos");
  response.send(student);
});

//peticion post
app.post("/student", (rep, rsp) => {
    rep.body.cedula="00803473784"
  rsp.send(rep.body);

});

//peticion put
app.put("/student/:idParam", (res, rsp) => {
  const cedula =res.params.idParam
  console.log("Cedula:"+cedula)
  rsp.send(res.body);
});

//peticion delete
app.delete("/student/:id", (res, rsp) => {
  const cedula=res.params.id
  console.log("Cedula eliminada:"+cedula)
  rsp.send();
});
app.listen(puerto, () => {
  console.log("Servior listo en el puerto " + puerto);
});

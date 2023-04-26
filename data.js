module.exports = function () {
  var data = {
    boletas: [
      {
        id:1,
        idContrato: 1,
        descripcion: "Presentación en boda",
        precioTotal:770.50,
      },
      {
        id:2,
        idContrato: 2,
        descripcion: "Festival de música",
        precioTotal:300.00,
      },
      {
        id:3,
        idContrato: 3,
        descripcion: "Fiesta de cumpleaños",
        precioTotal:400.00,
      },
      {
        id:4,
        idContrato: 4,
        descripcion: "Presentación en aniversario de colegio",
        precioTotal:250.00,
      }
    ],
    generosMusica: [
      {
        idGeneroMusica:1,
        descripcionGener:"Rock",
      },
      {
        idGeneroMusica:2,
        descripcionGener:"Pop",
      },
      {
        idGeneroMusica:3,
        descripcionGener:"Jazz",
      },
      {
        idGeneroMusica:4,
        descripcionGener:"Cumbia",
      },
    ],
    horario: [
      {
        idHorario:1,
        fecha:"2023-04-05",
        hora:"17:00:00"
      },
      {
        idHorario:2,
        fecha:"2023-04-07",
        hora:"21:00:00"
      },
      {
        idHorario:3,
        fecha:"2023-08-11",
        hora:"14:00:00"
      },
      {
        idHorario:4,
        fecha:"2023-07-05",
        hora:"12:00:00"
      }
    ],
    tipoAsociado: [
      {
        idTipoAsociado: 1,
        descripcionTipoAsociado: "Banda"
      },
      {
        idTipoAsociado: 2,
        descripcionTipoAsociado: "Solista"
      },
      {
        idTipoAsociado: 3,
        descripcionTipoAsociado: "Dúo"
      },
      {
        idTipoAsociado: 4,
        descripcionTipoAsociado: "Orquesta"
      },
      {
        idTipoAsociado: 5,
        descripcionTipoAsociado: "DJ"
      },
    ]
  }
  return data
}

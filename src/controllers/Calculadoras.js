class Calculadoras {
  constructor () {
    // obtengo los datos
    this.renderInteresResultado = this.renderInteresResultado.bind(this)
  }
  // calcula resultados de interes con maximo 3 decimales
  calculateAverage (datos){
//json lectura 
//datos.cap datos.rate datos.years      
//x = c * (i/100) * n 

    let capital = datos[0]
    let tasa = datos[1]
    let years = datos[2]
    let calculofinal = (capital * (tasa / 100) * years).toFixed(3)

console.log(years, capital, tasa)

    return calculofinal
  }

//página de inicio
  renderInicio(req, res) {
    res.render('home')
  }

// muestro resultado renderizado.
  renderInteresResultado (req, res) 
  {
    console.log('req.body', req.body)
    const { capital, tasa, cant } = req.body

    const datos = [
      parseInt(capital), // capital
      parseFloat(tasa), // rate
      parseInt(cant) // years
    ]
    // Json envio
    // const datos = {
    //  cap:  parseInt(capital), // capital
    //  rate: parseFloat(tasa), // rate
    //  years:  parseInt(cant) // years
    //  }

    const calculotasa = this.calculateAverage(datos)

    res.render('home', {
      capital,
      tasa,
      cant,
      calculotasa
    })
  }
}
module.exports = Calculadoras

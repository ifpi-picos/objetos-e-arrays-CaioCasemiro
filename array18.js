const carros = [
    {nome: 'Celta', ano: 2016, marca: 'Chevrolet'},
    {nome: 'Etios', ano: 2008, marca: 'Toyota'},
    {nome: 'Siena', ano: 2014, marca: 'Fiat'},
    {nome: 'Golf', ano: 2007, marca: 'Volkswagen'}
]

const carrosacima2010 = carros.filter(function(anocarro){
    return anocarro.ano > 2010
})

console.log(carrosacima2010)
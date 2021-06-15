db = new Mongo().getDB("heroeverse");

db.Heroes.insert([
  { "name" : "Namor", "faction" : "Atlante", "description" : "Hijo de un mutante y una reina atlante, actual rey de Atlantis"},
  { "name" : "Iron Man", "faction" : "Vengador", "description" : "Propietario de industrias Stark y actual miembro de los Vengadores, usa una armadura con un reactor que a parte de darle energía para combatir, le ayuda a sobrevivir a las esquirlas metálicas que tiene acercandose a su corazón."},
  { "name" : "Capitana Marvel", "faction" : "Kree", "description" : "Ex piloto humana criada como kree con poderes concedidos por el cubo cósmico"},
  { "name" : "Magneto", "faction" : "Hermandad", "description" : "Líder mutante de la hermandad, opositores a la raza humana. Tiene el poder de controlar cualquier elemento metálico a su antojo"},
  { "name" : "Avispa", "faction" : "Tecnologias Pym", "description" : "Compañera de Hanq Pym, creadores de las partículas Pym capaces de hacerte cambiar de tamaño"},
  { "name" : "Capitán América", "faction" : "Vengador", "description" : "Super soldado creado con un suero biológico para ganar la segunda guerra mundial y líder de los vengadores"},
  { "name" : "Mister fantástico", "faction" : "Cuatro fantásticos", "description" : "Líder de los cuatro fantásticos con el poder de estirar su cuerpo sin límites"},
  { "name" : "Pyro", "faction" : "Hermandad", "description" : "Antiguo miembro de x-men, actual miembro de la Hermandad, muy fiel a Magneto"},
  { "name" : "Thanos", "faction" : "Eterno", "description" : "El líder de la orden negra y titán loco, capaz de sostener las gemas del infinito"},
  { "name" : "Dr Strange", "faction" : "Vengador", "description" : "Hechicero supremo y guardián de la gema del tiempo"}
]);
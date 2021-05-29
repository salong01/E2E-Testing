db = new Mongo().getDB("heroeverse");

db.Heroes.insert([
  { "_id" : ObjectId("603f9648c2e238a2b5cfbb19"), "name" : "Namor", "faction" : "Atlante", "description" : "Hijo de un mutante y una reina atlante, actual rey de Atlantis", "__v" : 0 },
  { "_id" : ObjectId("603f9677c2e238a2b5cfbb1a"), "name" : "Iron Man", "faction" : "Vengador", "description" : "Propietario de industrias Stark y actual miembro de los Vengadores, usa una armadura con un reactor que a parte de darle energía para combatir, le ayuda a sobrevivir a las esquirlas metálicas que tiene acercandose a su corazón.", "__v" : 0 },
  { "_id" : ObjectId("603f96b9c2e238a2b5cfbb1b"), "name" : "Capitana Marvel", "faction" : "Kree", "description" : "Ex piloto humana criada como kree con poderes concedidos por el cubo cósmico", "__v" : 0 },
  { "_id" : ObjectId("603f9707c2e238a2b5cfbb1c"), "name" : "Magneto", "faction" : "Hermandad", "description" : "Líder mutante de la hermandad, opositores a la raza humana. Tiene el poder de controlar cualquier elemento metálico a su antojo", "__v" : 0 },
  { "_id" : ObjectId("603fa296c2e238a2b5cfbb1d"), "name" : "Avispa", "faction" : "Tecnologias Pym", "description" : "Compañera de Hanq Pym, creadores de las partículas Pym capaces de hacerte cambiar de tamaño", "__v" : 0 },
  { "_id" : ObjectId("603fa31cc2e238a2b5cfbb1e"), "name" : "Capitán América", "faction" : "Vengador", "description" : "Super soldado creado con un suero biológico para ganar la segunda guerra mundial y líder de los vengadores", "__v" : 0 },
  { "_id" : ObjectId("603fa3a4c2e238a2b5cfbb1f"), "name" : "Mister fantástico", "faction" : "Cuatro fantásticos", "description" : "Líder de los cuatro fantásticos con el poder de estirar su cuerpo sin límites", "__v" : 0 },
  { "_id" : ObjectId("60409e4996ddada917ade895"), "name" : "Pyro", "faction" : "Hermandad", "description" : "Antiguo miembro de x-men, actual miembro de la Hermandad, muy fiel a Magneto", "__v" : 0 },
  { "_id" : ObjectId("60409e6596ddada917ade896"), "name" : "Thanos", "faction" : "Eterno", "description" : "El líder de la orden negra y titán loco, capaz de sostener las gemas del infinito", "__v" : 0 },
  { "_id" : ObjectId("605b769ace563f781f206603"), "name" : "Dr Strange", "faction" : "Vengador", "description" : "Hechicero supremo y guardián de la gema del tiempo", "__v" : 0 }
]);
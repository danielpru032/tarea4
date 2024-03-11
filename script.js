class Animal {
  constructor(nombre, color, raza) {
    this.nombre = nombre;
    this.color = color;
    this.raza = raza;
  }
  caminar() {
    return this.nombre + " esta caminando";
  }
  dormir() {
    return this.nombre + " esta durmiendo";
  }
}
const GATA = new Animal("Mimi", "negro", "siames");
const PERRO = new Animal("Cachuchin", "plomo", "chapi");

console.log(GATA);
console.log(PERRO);
console.log(GATA.caminar());
console.log(PERRO.dormir());

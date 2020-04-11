interface Xmen {
  nombre: string;
  poder?: string;
  regenerate: (name: string) => void;
}

function sendMission(heroe: Xmen) {
  console.log(heroe.nombre);
  heroe.regenerate(heroe.nombre);
}

let wolverine: Xmen = {
  nombre: "wolverine",
  poder: "garras",
  regenerate: (name: string) => console.log(name + " regenerated"),
};
sendMission(wolverine);

class Heroe_2 implements Xmen {
  nombre: string;
  otraPropiedad: string;
  poder?: string | undefined;
  regenerate = (name: string) => console.log("regenerate ", name);
  constructor(nombre: string, otraPropiedad: string) {
    this.nombre = nombre;
    this.otraPropiedad = otraPropiedad;
  }
}

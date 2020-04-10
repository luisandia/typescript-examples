let flash = {
  nombre: "barry hallen",
  edad: 24,
  poderes: ["puede correr rapido"],
};

let flash2: {
  nombre: string;
  edad: number;
  poderes: string[];
  getNombre: () => string;
} = {
  nombre: "barry hallen",
  edad: 24,
  poderes: ["puede correr rapido"],
  getNombre() {
    return this.nombre;
  },
};

// personalized type

type Heroe = {
  nombre: string;
  edad: number;
  poderes: string[];
  getNombre: () => string;
};

let superman2: Heroe = {
  nombre: "barry hallen",
  edad: 24,
  poderes: ["puede correr rapido"],
  getNombre() {
    return this.nombre;
  },
};

// UNION

let loquesea: string | number = 5;

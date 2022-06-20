import IngredienteCantidad from "./IngredienteCantidad";

 class Plato{

    id=0;
    imagenPath = "";
    nombre = "";
    precio=0;
    rubro = "";
    ingredientes:IngredienteCantidad[] = [];
    urlImagenPath = "";

   
}

export type PlatoT = {
    imagenPath: string;
    nombre: string;
    precio: number;
    rubro: string;
}
export default Plato
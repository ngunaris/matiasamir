export interface Product {

    _id: number,
    descripcion: string,
    imagen: File;
  
}

export interface ProductResponse extends Product {
    docs: Product[];
    imagen: File;
  }

  export interface Usuario {

    _id:number,
    docs: Usuario[],
    nombre: string
  }

export interface Photo {

  id: string;
  name: string;
  imagen: string;
}
import { EspecificacionDto } from "./EspecificacionDto";

export interface ProductoDto {
    id: number;
    nombre: string;
    precio: number;
    cantidad: number;
    estrellas: number;
    imagen?: string;
    especificaciones?: EspecificacionDto[];
    descripcion?: string;
    descuento?: number;
  }
  
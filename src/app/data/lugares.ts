export type IconoLugar = 'costa' | 'montana' | 'rio' | 'arqueologico' | 'isla';

export interface Lugar {
  id: number;
  nombre: string;
  descripcion: string;
  icono: IconoLugar;
}

// Datos estáticos: la app no se conecta a ningún servidor ni base de datos.
export const LUGARES: Lugar[] = [
  {
    id: 1,
    nombre: 'Cartagena de Indias',
    descripcion: 'Ciudad amurallada colonial junto al mar Caribe.',
    icono: 'costa',
  },
  {
    id: 2,
    nombre: 'Eje Cafetero (Salento)',
    descripcion: 'Valle del Cocora y las palmas de cera más altas del mundo.',
    icono: 'montana',
  },
  {
    id: 3,
    nombre: 'Caño Cristales',
    descripcion: 'El "río de los cinco colores" en La Macarena, Meta.',
    icono: 'rio',
  },
  {
    id: 4,
    nombre: 'Ciudad Perdida',
    descripcion: 'Sitio arqueológico Tayrona en la Sierra Nevada de Santa Marta.',
    icono: 'arqueologico',
  },
  {
    id: 5,
    nombre: 'San Andrés y Providencia',
    descripcion: 'Archipiélago de aguas de siete colores en el Caribe.',
    icono: 'isla',
  },
];

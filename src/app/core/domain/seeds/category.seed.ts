import { Category } from "../entities/category.entity";
import { Product } from "../entities/product.entity";

export const CATEGORY_SEED: Category[] = [
  new Category(
    1,
    'Teléfonos Celulares',
    'Smartphones de diferentes gamas y marcas',
    'assets/images/categoria-celulares.jpg',
    new Date(),
    new Date(),
    [
      new Product(
        1,
        'Samsung Galaxy S23 Ultra',
        3499,
        10,
        'Pantalla AMOLED de 6.8", cámara de 200MP, 12GB RAM, 512GB.',
        'assets/images/samsung-s23-ultra.jpg'
      ),
      new Product(
        2,
        'iPhone 15 Pro Max',
        3499,
        7,
        'Chip A17 Pro, pantalla Super Retina XDR de 6.7", 256GB.',
        'assets/images/iphone-15-pro-max.jpg'
      ),
      new Product(
        3,
        'Samsung Galaxy S23 Ultra',
        3499,
        10,
        'Pantalla AMOLED de 6.8", cámara de 200MP, 12GB RAM, 512GB.',
        'assets/images/samsung-s23-ultra.jpg'
      ),
      new Product(
        4,
        'iPhone 15 Pro Max',
        3499,
        7,
        'Chip A17 Pro, pantalla Super Retina XDR de 6.7", 256GB.',
        'assets/images/iphone-15-pro-max.jpg'
      ),
      new Product(
        5,
        'Samsung Galaxy S23 Ultra',
        5999000,
        10,
        'Pantalla AMOLED de 6.8", cámara de 200MP, 12GB RAM, 512GB.',
        'assets/images/samsung-s23-ultra.jpg'
      ),
      new Product(
        6 ,
        'iPhone 15 Pro Max',
        6999000,
        7,
        'Chip A17 Pro, pantalla Super Retina XDR de 6.7", 256GB.',
        'assets/images/iphone-15-pro-max.jpg'
      ),
    ]
  ),
  new Category(
    2,
    'Tablets',
    'Tablets para trabajo, estudio y entretenimiento',
    'assets/images/categoria-tablets.jpg',
    new Date(),
    new Date(),
    [
      new Product(
        3,
        'iPad Air 5ta Generación',
        3499000,
        5,
        'Pantalla Liquid Retina, chip M1, 64GB.',
        'assets/images/ipad-air.jpg'
      ),
      new Product(
        4,
        'Samsung Galaxy Tab S8',
        2899000,
        8,
        '11" TFT, Snapdragon 8 Gen 1, 128GB.',
        'assets/images/galaxy-tab-s8.jpg'
      )
    ]
  ),
  new Category(
    3,
    'Accesorios',
    'Fundas, cargadores, audífonos y más',
    'assets/images/categoria-accesorios.jpg',
    new Date(),
    new Date(),
    [
      new Product(
        5,
        'Cargador Rápido 25W Samsung',
        129000,
        20,
        'USB-C compatible con carga rápida.',
        'assets/images/cargador-samsung.jpg'
      ),
      new Product(
        6,
        'Audífonos Bluetooth Xiaomi Redmi Buds 4',
        159000,
        25,
        'Cancelación activa de ruido, batería 30h.',
        'assets/images/redmi-buds-4.jpg'
      )
    ]
  )
];

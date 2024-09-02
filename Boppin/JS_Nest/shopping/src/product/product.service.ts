import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';

@Injectable()
export class ProductService {
  private products: ProductDTO[] = [
    { name: 'Mango', id: 1, price: 250 },
    { name: 'Apple', id: 2, price: 300 },
    { name: 'PineApple', id: 3, price: 340 },
  ];

  findAll(): ProductDTO[] {
    return this.products;
  }

  findById(id: number) {
    return this.products.find((p) => p.id === id);
  }

  findByCondition(predicate: (product: ProductDTO) => boolean) {
    // Predicate mean "The function has return boolean"
    return this.products.filter((p) => predicate(p));
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Máy Tính Bảng Học Tập',
      price: 2500000,
      description: 'Máy tính bảng thông minh dành cho bé học tập và giải trí',
      image: 'assets/images/tablet.jpg',
      category: 'Tablet',
      inStock: true
    },
    {
      id: 2,
      name: 'Laptop Mini Cho Bé',
      price: 3500000,
      description: 'Laptop nhỏ gọn, dễ sử dụng cho trẻ em',
      image: 'assets/images/laptop.jpg',
      category: 'Laptop',
      inStock: true
    },
    {
      id: 3,
      name: 'Đồng Hồ Thông Minh Trẻ Em',
      price: 1200000,
      description: 'Đồng hồ thông minh có GPS và các trò chơi học tập',
      image: 'assets/images/smartwatch.jpg',
      category: 'Wearable',
      inStock: true
    },
    {
      id: 4,
      name: 'Tai Nghe Bluetooth Cho Bé',
      price: 800000,
      description: 'Tai nghe bluetooth an toàn với âm lượng giới hạn',
      image: 'assets/images/headphone.jpg',
      category: 'Audio',
      inStock: true
    },
    {
      id: 5,
      name: 'Camera Kỹ Thuật Số',
      price: 1500000,
      description: 'Camera chụp ảnh dành riêng cho trẻ em',
      image: 'assets/images/camera.jpg',
      category: 'Camera',
      inStock: true
    },
    {
      id: 6,
      name: 'Robot Lập Trình',
      price: 2800000,
      description: 'Robot giúp bé học lập trình cơ bản',
      image: 'assets/images/robot.jpg',
      category: 'Educational',
      inStock: true
    }
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);
  products$ = this.productsSubject.asObservable();

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(product => product.category === category);
  }

  searchProducts(query: string): Product[] {
    const lowerQuery = query.toLowerCase();
    return this.products.filter(product => 
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
    );
  }
}
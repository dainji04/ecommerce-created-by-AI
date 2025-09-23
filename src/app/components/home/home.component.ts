import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <!-- Hero Slider -->
      <section class="mb-12">
        <div class="relative bg-gradient-to-r from-kid-pink to-kid-blue rounded-3xl overflow-hidden shadow-2xl">
          <div class="relative h-96 flex items-center">
            <div *ngFor="let slide of slides; let i = index" 
                 [class.opacity-100]="currentSlide === i"
                 [class.opacity-0]="currentSlide !== i"
                 class="absolute inset-0 transition-opacity duration-500 flex items-center justify-between px-12">
              
              <div class="text-white max-w-lg">
                <h2 class="text-4xl font-bold mb-4 font-kid-friendly">{{slide.title}}</h2>
                <p class="text-xl mb-6 font-kid-friendly">{{slide.description}}</p>
                <button class="btn-kid btn-secondary">
                  🛍️ Khám Phá Ngay!
                </button>
              </div>
              
              <div class="hidden md:block">
                <div class="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center">
                  <span class="text-8xl">{{slide.emoji}}</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Slider controls -->
          <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <button *ngFor="let slide of slides; let i = index"
                    (click)="goToSlide(i)"
                    [ngClass]="{'bg-white': currentSlide === i, 'bg-white bg-opacity-50': currentSlide !== i}"
                    class="w-3 h-3 rounded-full transition-all"></button>
          </div>
        </div>
      </section>

      <!-- Featured Products -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-center mb-8 text-gradient font-kid-friendly">
          🌟 Sản Phẩm Nổi Bật
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let product of products" 
               class="card-kid group cursor-pointer">
            
            <div class="relative mb-4 overflow-hidden rounded-2xl">
              <img [src]="product.image" 
                   [alt]="product.name"
                   class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                   >
                   <!-- (error)="onImageError($any($event))" -->
              <div class="absolute top-2 right-2 bg-kid-yellow text-kid-purple px-2 py-1 rounded-full text-sm font-bold">
                {{product.category}}
              </div>
            </div>
            
            <h3 class="text-xl font-bold mb-2 text-kid-purple font-kid-friendly">
              {{product.name}}
            </h3>
            
            <p class="text-gray-600 mb-4 font-kid-friendly">
              {{product.description}}
            </p>
            
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-kid-green">
                {{formatPrice(product.price)}}
              </span>
              
              <button (click)="addToCart(product)"
                      class="btn-kid btn-primary text-sm">
                🛒 Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Categories -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-center mb-8 text-gradient font-kid-friendly">
          📱 Danh Mục Sản Phẩm
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div *ngFor="let category of categories" 
               class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-2 border-kid-blue">
            
            <div class="text-4xl mb-2">{{category.emoji}}</div>
            <h3 class="font-bold text-kid-purple font-kid-friendly">{{category.name}}</h3>
          </div>
        </div>
      </section>
    </div>
  `
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  currentSlide = 0;

  slides = [
    {
      title: 'Công Nghệ An Toàn Cho Bé!',
      description: 'Khám phá thế giới công nghệ với những sản phẩm được thiết kế đặc biệt cho trẻ em.',
      emoji: '🎮'
    },
    {
      title: 'Học Tập Thông Minh!',
      description: 'Tablet và laptop giúp bé học tập hiệu quả và vui vẻ.',
      emoji: '📚'
    },
    {
      title: 'Giải Trí Lành Mạnh!',
      description: 'Robot và đồ chơi công nghệ giúp phát triển tư duy logic.',
      emoji: '🤖'
    }
  ];

  categories = [
    { name: 'Tablet', emoji: '📱' },
    { name: 'Laptop', emoji: '💻' },
    { name: 'Đồng Hồ', emoji: '⌚' },
    { name: 'Tai Nghe', emoji: '🎧' },
    { name: 'Camera', emoji: '📷' },
    { name: 'Robot', emoji: '🤖' }
  ];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.startSlideShow();
  }

  startSlideShow(): void {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 4000);
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    // Có thể thêm thông báo thành công ở đây
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/images/placeholder.jpg';
  }
}
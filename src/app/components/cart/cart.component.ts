import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-center mb-8 text-gradient font-kid-friendly">
        🛒 Giỏ Hàng Của Bé
      </h1>

      <div *ngIf="cartItems.length === 0" class="text-center py-16">
        <div class="text-8xl mb-4">🛒</div>
        <h2 class="text-2xl font-bold text-kid-purple mb-4 font-kid-friendly">
          Giỏ hàng trống!
        </h2>
        <p class="text-gray-600 mb-8 font-kid-friendly">
          Hãy thêm những sản phẩm thú vị vào giỏ hàng nhé!
        </p>
        <a routerLink="/" class="btn-kid btn-primary">
          🏪 Tiếp Tục Mua Sắm
        </a>
      </div>

      <div *ngIf="cartItems.length > 0" class="grid lg:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-2">
          <div class="space-y-4">
            <div *ngFor="let item of cartItems" 
                 class="card-kid flex items-center space-x-4">
              
              <img [src]="item.product.image" 
                   [alt]="item.product.name"
                   class="w-20 h-20 object-cover rounded-2xl"
                   >
                   <!-- (error)="onImageError($event)" -->
              
              <div class="flex-grow">
                <h3 class="font-bold text-kid-purple font-kid-friendly">
                  {{item.product.name}}
                </h3>
                <p class="text-sm text-gray-600 font-kid-friendly">
                  {{item.product.description}}
                </p>
                <p class="font-bold text-kid-green">
                  {{formatPrice(item.product.price)}}
                </p>
              </div>
              
              <div class="flex items-center space-x-2">
                <button (click)="decreaseQuantity(item.product.id)"
                        class="w-8 h-8 bg-kid-pink text-white rounded-full font-bold hover:scale-110 transition-transform">
                  -
                </button>
                
                <span class="w-8 text-center font-bold text-kid-purple">
                  {{item.quantity}}
                </span>
                
                <button (click)="increaseQuantity(item.product.id)"
                        class="w-8 h-8 bg-kid-blue text-white rounded-full font-bold hover:scale-110 transition-transform">
                  +
                </button>
              </div>
              
              <button (click)="removeItem(item.product.id)"
                      class="text-red-500 hover:text-red-700 text-xl">
                🗑️
              </button>
            </div>
          </div>
        </div>

        <!-- Cart Summary -->
        <div class="lg:col-span-1">
          <div class="card-kid bg-gradient-to-b from-kid-yellow to-kid-orange text-white sticky top-4">
            <h2 class="text-2xl font-bold mb-6 font-kid-friendly">
              💰 Tổng Cộng
            </h2>
            
            <div class="space-y-4 mb-6">
              <div class="flex justify-between">
                <span class="font-kid-friendly">Số lượng sản phẩm:</span>
                <span class="font-bold">{{getTotalItems()}} món</span>
              </div>
              
              <div class="flex justify-between">
                <span class="font-kid-friendly">Tạm tính:</span>
                <span class="font-bold">{{formatPrice(getSubtotal())}}</span>
              </div>
              
              <div class="flex justify-between">
                <span class="font-kid-friendly">Phí vận chuyển:</span>
                <span class="font-bold">Miễn phí 🎉</span>
              </div>
              
              <hr class="border-white/30">
              
              <div class="flex justify-between text-xl">
                <span class="font-bold font-kid-friendly">Tổng cộng:</span>
                <span class="font-bold">{{formatPrice(getTotal())}}</span>
              </div>
            </div>
            
            <div class="space-y-3">
              <button class="w-full btn-kid bg-white text-kid-purple hover:bg-kid-purple hover:text-white">
                💳 Thanh Toán
              </button>
              
              <button (click)="clearCart()"
                      class="w-full btn-kid bg-red-500 hover:bg-red-600">
                🗑️ Xóa Tất Cả
              </button>
              
              <a routerLink="/" 
                 class="block w-full btn-kid bg-kid-green hover:bg-kid-blue text-center">
                🏪 Tiếp Tục Mua Sắm
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  increaseQuantity(productId: number): void {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item) {
      this.cartService.updateQuantity(productId, item.quantity + 1);
    }
  }

  decreaseQuantity(productId: number): void {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item && item.quantity > 1) {
      this.cartService.updateQuantity(productId, item.quantity - 1);
    }
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    if (confirm('Bạn có chắc muốn xóa tất cả sản phẩm trong giỏ hàng?')) {
      this.cartService.clearCart();
    }
  }

  getTotalItems(): number {
    return this.cartService.getCartItemCount();
  }

  getSubtotal(): number {
    return this.cartService.getCartTotal();
  }

  getTotal(): number {
    return this.getSubtotal(); // Free shipping
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  }

  onImageError(event: any): void {
    event.target.src = 'assets/images/placeholder.jpg';
  }
}
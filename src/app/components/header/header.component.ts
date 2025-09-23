import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="bg-gradient-to-r from-kid-blue to-kid-purple shadow-xl sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center space-x-2">
            <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span class="text-2xl">🏪</span>
            </div>
            <h1 class="text-white text-2xl font-bold font-kid-friendly">
              Cửa Hàng Công Nghệ Cho Bé
            </h1>
          </div>

          <!-- Navigation -->
          <nav class="hidden md:flex space-x-6">
            <a routerLink="/" 
               routerLinkActive="text-kid-yellow" 
               [routerLinkActiveOptions]="{exact: true}"
               class="text-white hover:text-kid-yellow font-bold text-lg transition-colors">
              🏠 Trang Chủ
            </a>
            <a routerLink="/about" 
               routerLinkActive="text-kid-yellow"
               class="text-white hover:text-kid-yellow font-bold text-lg transition-colors">
              📖 Giới Thiệu
            </a>
            <a routerLink="/contact" 
               routerLinkActive="text-kid-yellow"
               class="text-white hover:text-kid-yellow font-bold text-lg transition-colors">
              📞 Liên Hệ
            </a>
          </nav>

          <!-- Cart -->
          <div class="flex items-center space-x-4">
            <a routerLink="/cart" 
               class="relative bg-white text-kid-purple px-4 py-2 rounded-full font-bold hover:bg-kid-yellow transition-all transform hover:scale-105">
              🛒 Giỏ Hàng
              <span *ngIf="cartItemCount > 0" 
                    class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                {{cartItemCount}}
              </span>
            </a>

            <!-- Mobile menu button -->
            <button (click)="toggleMobileMenu()" 
                    class="md:hidden text-white">
              <span class="text-2xl">☰</span>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <nav *ngIf="showMobileMenu" 
             class="md:hidden mt-4 pb-4 border-t border-white/20">
          <div class="flex flex-col space-y-2 pt-4">
            <a routerLink="/" 
               (click)="closeMobileMenu()"
               routerLinkActive="text-kid-yellow" 
               [routerLinkActiveOptions]="{exact: true}"
               class="text-white hover:text-kid-yellow font-bold text-lg py-2">
              🏠 Trang Chủ
            </a>
            <a routerLink="/about" 
               (click)="closeMobileMenu()"
               routerLinkActive="text-kid-yellow"
               class="text-white hover:text-kid-yellow font-bold text-lg py-2">
              📖 Giới Thiệu
            </a>
            <a routerLink="/contact" 
               (click)="closeMobileMenu()"
               routerLinkActive="text-kid-yellow"
               class="text-white hover:text-kid-yellow font-bold text-lg py-2">
              📞 Liên Hệ
            </a>
          </div>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent implements OnInit {
  cartItemCount = 0;
  showMobileMenu = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItemCount = this.cartService.getCartItemCount();
    });
  }

  toggleMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }

  closeMobileMenu(): void {
    this.showMobileMenu = false;
  }
}
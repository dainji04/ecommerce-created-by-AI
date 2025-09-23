import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-gradient-to-r from-kid-green to-kid-orange text-white py-8 mt-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <!-- About Section -->
          <div>
            <h3 class="text-xl font-bold mb-4 font-kid-friendly">
              🌟 Về Cửa Hàng Chúng Tôi
            </h3>
            <p class="text-white/90 font-kid-friendly">
              Cửa hàng công nghệ dành riêng cho các bé, 
              với những sản phẩm an toàn và thú vị!
            </p>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-xl font-bold mb-4 font-kid-friendly">
              📞 Liên Hệ
            </h3>
            <div class="space-y-2 text-white/90 font-kid-friendly">
              <p>📍 123 Đường ABC, Quận XYZ, TP.HCM</p>
              <p>☎️ 0123-456-789</p>
              <p>✉️ info&#64;cuahangcongnghe.com</p>
            </div>
          </div>

          <!-- Social Links -->
          <div>
            <h3 class="text-xl font-bold mb-4 font-kid-friendly">
              🎉 Kết Nối Với Chúng Tôi
            </h3>
            <div class="flex justify-center md:justify-start space-x-4">
              <button class="w-10 h-10 bg-white text-kid-blue rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                📘
              </button>
              <button class="w-10 h-10 bg-white text-kid-pink rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                📷
              </button>
              <button class="w-10 h-10 bg-white text-kid-purple rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                🐦
              </button>
            </div>
          </div>
        </div>

        <div class="border-t border-white/20 mt-8 pt-6 text-center">
          <p class="text-white/80 font-kid-friendly">
            © 2024 Cửa Hàng Công Nghệ Cho Bé. Tất cả quyền được bảo lưu. 
            <span class="text-kid-yellow">❤️</span> 
            Được thiết kế với tình yêu dành cho các bé!
          </p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
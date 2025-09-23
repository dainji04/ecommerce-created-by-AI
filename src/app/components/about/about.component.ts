import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-center mb-8 text-gradient font-kid-friendly">
        📖 Giới Thiệu Về Chúng Tôi
      </h1>

      <!-- Hero Section -->
      <div class="card-kid text-center mb-12 bg-gradient-to-r from-kid-blue to-kid-purple text-white">
        <div class="text-6xl mb-4">🌟</div>
        <h2 class="text-3xl font-bold mb-4 font-kid-friendly">
          Cửa Hàng Công Nghệ Dành Riêng Cho Bé
        </h2>
        <p class="text-xl font-kid-friendly">
          Nơi mang đến những sản phẩm công nghệ an toàn, thú vị và giáo dục cho trẻ em
        </p>
      </div>

      <!-- Mission Section -->
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div class="card-kid">
          <div class="text-4xl mb-4">🎯</div>
          <h3 class="text-2xl font-bold mb-4 text-kid-purple font-kid-friendly">
            Sứ Mệnh Của Chúng Tôi
          </h3>
          <p class="text-gray-700 font-kid-friendly leading-relaxed">
            Chúng tôi tin rằng công nghệ có thể giúp trẻ em học tập và phát triển một cách vui vẻ, 
            an toàn. Mỗi sản phẩm được chọn lọc kỹ càng để đảm bảo phù hợp với độ tuổi và 
            nhu cầu phát triển của các bé.
          </p>
        </div>

        <div class="card-kid">
          <div class="text-4xl mb-4">👥</div>
          <h3 class="text-2xl font-bold mb-4 text-kid-purple font-kid-friendly">
            Đội Ngũ Của Chúng Tôi
          </h3>
          <p class="text-gray-700 font-kid-friendly leading-relaxed">
            Đội ngũ chuyên gia giáo dục và công nghệ với nhiều năm kinh nghiệm trong lĩnh vực 
            phát triển trẻ em. Chúng tôi hiểu rõ nhu cầu và sở thích của các bé để đưa ra 
            những lựa chọn tốt nhất.
          </p>
        </div>
      </div>

      <!-- Values Section -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-center mb-8 text-gradient font-kid-friendly">
          💎 Giá Trị Cốt Lõi
        </h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="w-20 h-20 bg-kid-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">🛡️</span>
            </div>
            <h3 class="text-xl font-bold text-kid-purple mb-2 font-kid-friendly">An Toàn</h3>
            <p class="text-gray-600 font-kid-friendly">
              Tất cả sản phẩm đều được kiểm định an toàn cho trẻ em
            </p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-kid-green rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">📚</span>
            </div>
            <h3 class="text-xl font-bold text-kid-purple mb-2 font-kid-friendly">Giáo Dục</h3>
            <p class="text-gray-600 font-kid-friendly">
              Sản phẩm không chỉ giải trí mà còn có giá trị giáo dục cao
            </p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-kid-pink rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">🎉</span>
            </div>
            <h3 class="text-xl font-bold text-kid-purple mb-2 font-kid-friendly">Vui Vẻ</h3>
            <p class="text-gray-600 font-kid-friendly">
              Mang lại niềm vui và hứng thú học tập cho trẻ em
            </p>
          </div>
        </div>
      </div>

      <!-- Why Choose Us -->
      <div class="card-kid bg-gradient-to-r from-kid-yellow to-kid-orange text-white mb-12">
        <h2 class="text-3xl font-bold text-center mb-8 font-kid-friendly">
          🤔 Tại Sao Chọn Chúng Tôi?
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <span class="text-2xl">✅</span>
              <span class="font-kid-friendly">Sản phẩm chính hãng, bảo hành đầy đủ</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="text-2xl">✅</span>
              <span class="font-kid-friendly">Tư vấn miễn phí từ chuyên gia</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="text-2xl">✅</span>
              <span class="font-kid-friendly">Giao hàng nhanh chóng, an toàn</span>
            </div>
          </div>
          
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <span class="text-2xl">✅</span>
              <span class="font-kid-friendly">Hỗ trợ kỹ thuật 24/7</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="text-2xl">✅</span>
              <span class="font-kid-friendly">Đổi trả dễ dàng trong 30 ngày</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="text-2xl">✅</span>
              <span class="font-kid-friendly">Giá cả cạnh tranh nhất thị trường</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Statistics -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div class="card-kid bg-kid-blue text-white">
          <div class="text-3xl font-bold mb-2">1000+</div>
          <div class="font-kid-friendly">Khách Hàng Hài Lòng</div>
        </div>
        
        <div class="card-kid bg-kid-green text-white">
          <div class="text-3xl font-bold mb-2">50+</div>
          <div class="font-kid-friendly">Sản Phẩm Chất Lượng</div>
        </div>
        
        <div class="card-kid bg-kid-purple text-white">
          <div class="text-3xl font-bold mb-2">5+</div>
          <div class="font-kid-friendly">Năm Kinh Nghiệm</div>
        </div>
        
        <div class="card-kid bg-kid-orange text-white">
          <div class="text-3xl font-bold mb-2">99%</div>
          <div class="font-kid-friendly">Đánh Giá Tích Cực</div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}
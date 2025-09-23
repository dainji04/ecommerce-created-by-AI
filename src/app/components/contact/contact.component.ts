import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-center mb-8 text-gradient font-kid-friendly">
        📞 Liên Hệ Với Chúng Tôi
      </h1>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="card-kid">
          <h2 class="text-2xl font-bold mb-6 text-kid-purple font-kid-friendly">
            💌 Gửi Tin Nhắn Cho Chúng Tôi
          </h2>
          
          <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="space-y-6">
            <div>
              <label class="block text-kid-purple font-bold mb-2 font-kid-friendly">
                👤 Tên của bé/phụ huynh:
              </label>
              <input type="text" 
                     [(ngModel)]="formData.name"
                     name="name"
                     required
                     class="w-full px-4 py-3 border-2 border-kid-blue rounded-2xl focus:border-kid-purple focus:outline-none font-kid-friendly"
                     placeholder="Nhập tên của bạn...">
            </div>

            <div>
              <label class="block text-kid-purple font-bold mb-2 font-kid-friendly">
                📧 Email:
              </label>
              <input type="email" 
                     [(ngModel)]="formData.email"
                     name="email"
                     required
                     class="w-full px-4 py-3 border-2 border-kid-blue rounded-2xl focus:border-kid-purple focus:outline-none font-kid-friendly"
                     placeholder="email@example.com">
            </div>

            <div>
              <label class="block text-kid-purple font-bold mb-2 font-kid-friendly">
                📱 Số điện thoại:
              </label>
              <input type="tel" 
                     [(ngModel)]="formData.phone"
                     name="phone"
                     class="w-full px-4 py-3 border-2 border-kid-blue rounded-2xl focus:border-kid-purple focus:outline-none font-kid-friendly"
                     placeholder="0123-456-789">
            </div>

            <div>
              <label class="block text-kid-purple font-bold mb-2 font-kid-friendly">
                📝 Tin nhắn:
              </label>
              <textarea [(ngModel)]="formData.message"
                        name="message"
                        required
                        rows="5"
                        class="w-full px-4 py-3 border-2 border-kid-blue rounded-2xl focus:border-kid-purple focus:outline-none font-kid-friendly resize-none"
                        placeholder="Hãy cho chúng tôi biết bạn cần hỗ trợ gì..."></textarea>
            </div>

            <button type="submit" 
                    [disabled]="!contactForm.form.valid"
                    class="w-full btn-kid btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
              🚀 Gửi Tin Nhắn
            </button>
          </form>

          <div *ngIf="isSubmitted" 
               class="mt-6 p-4 bg-kid-green text-white rounded-2xl text-center font-kid-friendly">
            ✅ Cảm ơn bạn! Chúng tôi sẽ phản hồi trong vòng 24 giờ.
          </div>
        </div>

        <!-- Contact Information -->
        <div class="space-y-6">
          <!-- Store Info -->
          <div class="card-kid bg-gradient-to-r from-kid-blue to-kid-purple text-white">
            <h2 class="text-2xl font-bold mb-6 font-kid-friendly">
              🏪 Thông Tin Cửa Hàng
            </h2>
            
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <span class="text-2xl">📍</span>
                <div>
                  <div class="font-bold font-kid-friendly">Địa chỉ:</div>
                  <div class="font-kid-friendly">123 Đường ABC, Quận XYZ<br>Thành phố Hồ Chí Minh</div>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <span class="text-2xl">📞</span>
                <div>
                  <div class="font-bold font-kid-friendly">Điện thoại:</div>
                  <div class="font-kid-friendly">0123-456-789</div>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <span class="text-2xl">✉️</span>
                <div>
                  <div class="font-bold font-kid-friendly">Email:</div>
                  <div class="font-kid-friendly">info&#64;cuahangcongnghe.com</div>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <span class="text-2xl">🕒</span>
                <div>
                  <div class="font-bold font-kid-friendly">Giờ làm việc:</div>
                  <div class="font-kid-friendly">
                    Thứ 2 - Thứ 6: 8:00 - 18:00<br>
                    Thứ 7 - Chủ nhật: 9:00 - 17:00
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Support -->
          <div class="card-kid">
            <h3 class="text-xl font-bold mb-4 text-kid-purple font-kid-friendly">
              🚀 Hỗ Trợ Nhanh
            </h3>
            
            <div class="space-y-3">
              <button class="w-full btn-kid bg-kid-green hover:bg-green-600 text-left">
                💬 Chat trực tiếp
              </button>
              
              <button class="w-full btn-kid bg-kid-orange hover:bg-orange-600 text-left">
                📞 Gọi hotline
              </button>
              
              <button class="w-full btn-kid bg-kid-pink hover:bg-pink-600 text-left">
                📧 Gửi email
              </button>
            </div>
          </div>

          <!-- FAQ -->
          <div class="card-kid">
            <h3 class="text-xl font-bold mb-4 text-kid-purple font-kid-friendly">
              ❓ Câu Hỏi Thường Gặp
            </h3>
            
            <div class="space-y-3 text-sm">
              <div class="font-kid-friendly">
                <strong>Q: Sản phẩm có bảo hành không?</strong><br>
                A: Tất cả sản phẩm đều có bảo hành chính hãng từ 6-24 tháng.
              </div>
              
              <div class="font-kid-friendly">
                <strong>Q: Có giao hàng tận nhà không?</strong><br>
                A: Có, chúng tôi giao hàng miễn phí trong bán kính 10km.
              </div>
              
              <div class="font-kid-friendly">
                <strong>Q: Có thể đổi trả sản phẩm không?</strong><br>
                A: Có thể đổi trả trong vòng 30 ngày với điều kiện nguyên seal.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  isSubmitted = false;

  onSubmit(): void {
    // Simulate form submission
    console.log('Form submitted:', this.formData);
    this.isSubmitted = true;
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.isSubmitted = false;
      this.formData = {
        name: '',
        email: '',
        phone: '',
        message: ''
      };
    }, 3000);
  }
}
import { GraduationCap, Facebook, Youtube, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl tracking-tighter">HUST <span className="text-primary">IT1</span></span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Đại học Bách khoa Hà Nội - Ngôi trường kỹ thuật hàng đầu Việt Nam. Khoa học Máy tính (IT1) là nơi ươm mầm những tài năng công nghệ xuất sắc nhất.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all"><Youtube className="h-5 w-5" /></a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Liên kết</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#program" className="hover:text-primary transition-colors">Chương trình đào tạo</a></li>
              <li><a href="#opportunities" className="hover:text-primary transition-colors">Cơ hội nghề nghiệp</a></li>
              <li><a href="#challenges" className="hover:text-primary transition-colors">Thách thức IT1</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog sinh viên</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Liên hệ</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> ts@hust.edu.vn</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (+84) 24 3869 4242</li>
              <li className="text-xs">Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 Đại học Bách khoa Hà Nội. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Chính sách bảo mật</a>
            <a href="#" className="hover:text-primary">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Download, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-white/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-widest mb-6">
                <FileText className="h-3 w-3" />
                Tài liệu độc quyền
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Tải ngay Ebook: "Lộ trình 5 bước chinh phục IT1 HUST"
              </h2>
              <p className="text-lg opacity-80 mb-8">
                Bộ tài liệu tổng hợp từ các thủ khoa và giảng viên, giúp bạn có cái nhìn toàn diện và chiến lược ôn thi hiệu quả nhất.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  <span>Phân tích điểm chuẩn 5 năm gần nhất</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  <span>Bộ đề thi thử chuyên ngành có lời giải</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  <span>Review chi tiết các Lab nghiên cứu</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 text-foreground shadow-2xl">
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight">Nhận tài liệu miễn phí</h3>
                  <p className="text-muted-foreground text-sm">Chúng tôi sẽ gửi tài liệu qua email của bạn trong vòng 30 giây.</p>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email của bạn</label>
                    <Input 
                      type="email" 
                      placeholder="name@example.com" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 border-border"
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 text-base font-bold group">
                    Tải Ebook Ngay
                    <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  </Button>
                  <p className="text-[10px] text-center text-muted-foreground">
                    Bằng cách đăng ký, bạn đồng ý với các điều khoản bảo mật của chúng tôi.
                  </p>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thành công!</h3>
                  <p className="text-muted-foreground mb-6">Tài liệu đã được gửi đến <strong>{email}</strong>. Chúc bạn ôn thi tốt!</p>
                  <Button variant="outline" onClick={() => setIsSubscribed(false)}>Gửi lại</Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

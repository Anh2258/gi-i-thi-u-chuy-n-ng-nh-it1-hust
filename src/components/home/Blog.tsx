import { motion } from "motion/react";
import { SITE_CONTENT } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Trải nghiệm & Chia sẻ</h2>
          <p className="text-muted-foreground">Lắng nghe câu chuyện từ những người trong cuộc.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {SITE_CONTENT.socialProof.map((item, index) => (
            <Card key={index} className="bg-card border-border relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-12 w-12" />
              </div>
              <CardContent className="p-8">
                <p className="text-lg italic mb-6 relative z-10">"{item.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                    {item.name[0]}
                  </div>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-sm text-muted-foreground">{item.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div key={i} whileHover={{ scale: 1.02 }} className="group cursor-pointer">
              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                <img 
                  src={`https://picsum.photos/seed/blog-${i}/600/400`} 
                  alt="Blog post" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {i === 1 ? "Một ngày của sinh viên IT1 tại Lab AI" : 
                 i === 2 ? "Bí kíp vượt qua kỳ thi Giải tích 1" : 
                 "Hành trình từ Bách khoa đến Silicon Valley"}
              </h4>
              <p className="text-sm text-muted-foreground line-clamp-2">
                Chia sẻ những kinh nghiệm thực tế, những khó khăn và niềm vui khi theo đuổi ngành Khoa học Máy tính tại HUST.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

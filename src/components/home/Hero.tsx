import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/constants";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="h-3 w-3" />
              Chuyên ngành hàng đầu Việt Nam
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              {SITE_CONTENT.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              {SITE_CONTENT.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-14 px-8 text-base font-bold group">
                {SITE_CONTENT.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base font-bold">
                Tìm hiểu thêm
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-border/50 py-10"
          >
            <div>
              <div className="text-3xl font-bold text-primary">#1</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Xếp hạng VN</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">29+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Điểm chuẩn</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Có việc làm</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">$1.2k</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Lương khởi điểm</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

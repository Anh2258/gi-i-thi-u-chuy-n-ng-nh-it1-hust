import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl tracking-tighter">HUST <span className="text-primary">IT1</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#program" className="text-sm font-medium hover:text-primary transition-colors">Chương trình</a>
            <a href="#opportunities" className="text-sm font-medium hover:text-primary transition-colors">Cơ hội</a>
            <a href="#challenges" className="text-sm font-medium hover:text-primary transition-colors">Thách thức</a>
            <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">Trải nghiệm</a>
            <Button size="sm">Đăng ký Tư vấn</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border p-4 flex flex-col gap-4"
        >
          <a href="#program" className="text-sm font-medium" onClick={() => setIsOpen(false)}>Chương trình</a>
          <a href="#opportunities" className="text-sm font-medium" onClick={() => setIsOpen(false)}>Cơ hội</a>
          <a href="#challenges" className="text-sm font-medium" onClick={() => setIsOpen(false)}>Thách thức</a>
          <a href="#blog" className="text-sm font-medium" onClick={() => setIsOpen(false)}>Trải nghiệm</a>
          <Button className="w-full">Đăng ký Tư vấn</Button>
        </motion.div>
      )}
    </nav>
  );
}

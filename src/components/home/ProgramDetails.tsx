import { motion } from "motion/react";
import { SITE_CONTENT } from "@/constants";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function ProgramDetails() {
  return (
    <section id="program" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              {SITE_CONTENT.program.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {SITE_CONTENT.program.description}
            </p>
            
            <Accordion className="w-full">
              {SITE_CONTENT.program.phases.map((phase, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-bold">
                    <span className="flex items-center gap-4">
                      <span className="text-primary text-sm font-mono">{phase.year}</span>
                      {phase.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {phase.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50" />
            <Card className="relative border-border bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="https://picsum.photos/seed/hust-it/800/600" 
                  alt="HUST IT1 Lab" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-widest text-primary">Live from Lab 402</span>
                  </div>
                  <p className="text-sm font-medium">Sinh viên đang thực hiện dự án AI nhận diện khuôn mặt.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

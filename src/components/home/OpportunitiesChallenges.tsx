import { motion } from "motion/react";
import { SITE_CONTENT } from "@/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, DollarSign, FlaskConical, ShieldAlert, Zap, Users } from "lucide-react";

const icons: Record<string, any> = {
  Building2,
  DollarSign,
  FlaskConical,
};

export default function OpportunitiesChallenges() {
  return (
    <section id="opportunities" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Opportunities */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">{SITE_CONTENT.opportunities.title}</h2>
            <p className="text-muted-foreground">Tương lai rạng rỡ đang chờ đón bạn.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {SITE_CONTENT.opportunities.items.map((item, index) => {
              const Icon = icons[item.icon];
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full border-border bg-card/50 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Challenges */}
        <div id="challenges" className="bg-primary/5 rounded-3xl p-8 md:p-16 border border-primary/10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                {SITE_CONTENT.challenges.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Chúng tôi không tìm kiếm những người giỏi nhất, chúng tôi tìm kiếm những người kiên trì nhất.
              </p>
              
              <div className="space-y-6">
                {SITE_CONTENT.challenges.items.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      {index === 0 ? <ShieldAlert className="h-5 w-5 text-primary" /> : 
                       index === 1 ? <Zap className="h-5 w-5 text-primary" /> : 
                       <Users className="h-5 w-5 text-primary" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-muted rounded-2xl overflow-hidden">
                  <img src="https://picsum.photos/seed/study1/400/400" alt="Study" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                </div>
                <div className="h-64 bg-primary/20 rounded-2xl flex items-center justify-center p-6 text-center">
                  <p className="font-bold italic">"Áp lực tạo nên kim cương. IT1 là lò luyện kim cương."</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 bg-muted rounded-2xl overflow-hidden">
                  <img src="https://picsum.photos/seed/study2/400/400" alt="Study" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                </div>
                <div className="h-48 bg-muted rounded-2xl overflow-hidden">
                  <img src="https://picsum.photos/seed/study3/400/400" alt="Study" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

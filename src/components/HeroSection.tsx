import { ArrowRight, Sparkles, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-subtle" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }} />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Medical Imaging</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Automated Report Generation for{" "}
            <span className="text-gradient">Chest X-Rays</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Leverage advanced AI to generate comprehensive radiological reports from 
            chest X-ray images, saving time and enhancing diagnostic accuracy for 
            healthcare professionals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="xl">
              Try Demo
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Documentation
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card shadow-soft border border-border/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Save Time</p>
                <p className="text-xs text-muted-foreground">Rapid report generation</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card shadow-soft border border-border/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">AI Accuracy</p>
                <p className="text-xs text-muted-foreground">BLEU & ROUGE validated</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card shadow-soft border border-border/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                <Shield className="h-5 w-5 text-success" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">HIPAA Ready</p>
                <p className="text-xs text-muted-foreground">De-identified data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

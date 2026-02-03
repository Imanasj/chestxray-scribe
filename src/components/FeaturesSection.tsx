import { Brain, FileText, Zap, Target, Database, Lock } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Deep Learning Model",
    description: "State-of-the-art neural network trained on 370,000+ chest X-ray images from the MIMIC-CXR database.",
    color: "primary",
  },
  {
    icon: FileText,
    title: "Structured Reports",
    description: "Generates findings and impressions sections following standard radiological report format.",
    color: "accent",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Rapid inference pipeline delivers comprehensive reports in seconds, not minutes.",
    color: "warning",
  },
  {
    icon: Target,
    title: "High Accuracy",
    description: "Validated using BLEU and ROUGE metrics with clinical accuracy reviewed by healthcare professionals.",
    color: "success",
  },
  {
    icon: Database,
    title: "MIMIC-CXR Trained",
    description: "Built on Beth Israel Deaconess Medical Center data with comprehensive chest X-ray coverage.",
    color: "primary",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "All patient data is de-identified and processed securely following HIPAA guidelines.",
    color: "accent",
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Built for Healthcare Professionals
          </h2>
          <p className="text-lg text-muted-foreground">
            X-RAI combines cutting-edge AI with clinical expertise to deliver 
            accurate, consistent radiological reports.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-xl ${colorClasses[feature.color as keyof typeof colorClasses]} mb-4`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

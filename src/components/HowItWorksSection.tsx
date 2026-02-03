import { Upload, Cpu, FileCheck, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload X-Ray Image",
    description: "Upload a chest X-ray image in JPEG, PNG, or DICOM format. The system accepts standard PA and lateral views.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Analysis",
    description: "Our deep learning model processes the image, identifying key anatomical structures and potential abnormalities.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Report Generation",
    description: "A comprehensive radiological report is generated with findings and clinical impressions, ready for review.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple three-step process to generate comprehensive radiological reports
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="flex items-start gap-6 mb-8">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl gradient-medical shadow-medium">
                        <step.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-card text-xs font-bold text-primary border-2 border-primary shadow-soft">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-start ml-7 mb-8">
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-8 bg-border" />
                      <ArrowDown className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

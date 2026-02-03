import { Database, FileImage, FileText, AlertTriangle } from "lucide-react";

const stats = [
  { label: "X-Ray Images", value: "370,000+", icon: FileImage },
  { label: "Radiology Reports", value: "227,943", icon: FileText },
  { label: "Training Split", value: "70%", sublabel: "159,560 records" },
  { label: "Validation/Test", value: "15%/15%", sublabel: "34,191 each" },
];

const DatasetSection = () => {
  return (
    <section id="dataset" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Database className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">MIMIC-CXR Database</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Trained on Real Clinical Data
            </h2>
            <p className="text-lg text-muted-foreground">
              Our model is trained on the MIMIC-CXR dataset from Beth Israel Deaconess 
              Medical Center, one of the largest publicly available chest X-ray datasets.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft text-center"
              >
                {stat.icon && (
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                )}
                <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                {stat.sublabel && (
                  <p className="text-xs text-muted-foreground/70 mt-1">{stat.sublabel}</p>
                )}
              </div>
            ))}
          </div>

          {/* Dataset Details */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Source Info */}
            <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                Data Source
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">Database:</span> MIMIC-CXR-JPG v2.1.0
                </p>
                <p>
                  <span className="font-medium text-foreground">Provider:</span> PhysioNet
                </p>
                <p>
                  <span className="font-medium text-foreground">Source:</span> Beth Israel Deaconess Medical Center
                </p>
                <p className="text-xs pt-2 border-t border-border">
                  Johnson, A., et al. (2024). MIMIC-CXR-JPG - chest radiographs with 
                  structured labels (version 2.1.0). PhysioNet. 
                  <a href="https://doi.org/10.13026/jsn5-t979" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                    DOI: 10.13026/jsn5-t979
                  </a>
                </p>
              </div>
            </div>

            {/* Professional Use Notice */}
            <div className="p-6 rounded-2xl bg-warning/5 border border-warning/20 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Professional Use Only
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  This tool is designed exclusively for use by{" "}
                  <span className="font-semibold text-foreground">qualified healthcare professionals</span>.
                </p>
                <p>
                  AI-generated reports should always be reviewed and verified by a 
                  licensed radiologist before any clinical decisions are made.
                </p>
                <p className="font-medium text-warning">
                  Not a substitute for professional medical judgment.
                </p>
              </div>
            </div>
          </div>

          {/* Report Structure Info */}
          <div className="mt-6 p-6 rounded-2xl bg-secondary/50 border border-border/50">
            <h3 className="text-lg font-semibold text-foreground mb-4">Report Structure</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-primary mb-2">Findings Section (82.4%)</h4>
                <p className="text-sm text-muted-foreground">
                  Narrative description of key observations in the X-ray image including 
                  lung fields, cardiac silhouette, and bony structures.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-accent mb-2">Impression Section</h4>
                <p className="text-sm text-muted-foreground">
                  Concise summary of the most clinically relevant findings and 
                  recommendations for follow-up if applicable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatasetSection;

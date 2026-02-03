import { useState, useRef } from "react";
import { Upload, FileImage, Loader2, FileText, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const DemoSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedReport, setGeneratedReport] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setGeneratedReport(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setGeneratedReport(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const generateReport = async () => {
    if (!selectedImage) return;
    
    setIsGenerating(true);
    setGeneratedReport(null);

    try {
      const { data, error } = await supabase.functions.invoke("analyze-xray", {
        body: { imageBase64: selectedImage },
      });

      if (error) {
        console.error("Error calling analyze-xray:", error);
        toast({
          title: "Error",
          description: error.message || "Failed to analyze image. Please try again.",
          variant: "destructive",
        });
        return;
      }

      if (data?.error) {
        toast({
          title: "Analysis Error",
          description: data.error,
          variant: "destructive",
        });
        return;
      }

      if (data?.report) {
        setGeneratedReport(data.report);
      } else {
        toast({
          title: "Error",
          description: "No report was generated. Please try again.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error("Error generating report:", err);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const resetDemo = () => {
    setSelectedImage(null);
    setGeneratedReport(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section id="demo" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Try the Demo
            </h2>
            <p className="text-lg text-muted-foreground">
              Upload a chest X-ray image to see how X-RAI generates radiological reports 
              using advanced AI analysis.
            </p>
          </div>

          {/* Demo Interface */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Upload Area */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-foreground flex items-center gap-2">
                <FileImage className="h-4 w-4 text-primary" />
                Input Image
              </h3>
              
              <div
                className={`relative rounded-2xl border-2 border-dashed transition-all duration-200 overflow-hidden ${
                  selectedImage 
                    ? "border-primary/50 bg-card" 
                    : "border-border hover:border-primary/50 bg-card/50"
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                {selectedImage ? (
                  <div className="relative aspect-square">
                    <img
                      src={selectedImage}
                      alt="Uploaded X-ray"
                      className="w-full h-full object-contain bg-foreground/5"
                    />
                    <button
                      onClick={resetDemo}
                      className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-card/90 text-sm font-medium text-foreground hover:bg-card transition-colors border border-border"
                    >
                      Clear
                    </button>
                  </div>
                ) : (
                  <div
                    className="aspect-square flex flex-col items-center justify-center cursor-pointer p-8"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-4">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Drop your X-ray image here
                    </p>
                    <p className="text-xs text-muted-foreground mb-4">
                      or click to browse
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Supports JPEG, PNG formats
                    </p>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>

              {selectedImage && !generatedReport && (
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={generateReport}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Analyzing Image...
                    </>
                  ) : (
                    <>
                      Generate Report
                    </>
                  )}
                </Button>
              )}
            </div>

            {/* Report Output */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-foreground flex items-center gap-2">
                <FileText className="h-4 w-4 text-accent" />
                Generated Report
              </h3>
              
              <div className="rounded-2xl border border-border bg-card p-6 min-h-[400px] max-h-[600px] overflow-y-auto">
                {generatedReport ? (
                  <div className="animate-fade-in">
                    <div className="prose prose-sm max-w-none">
                      <div className="whitespace-pre-wrap text-sm text-foreground leading-relaxed">
                        {generatedReport}
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border flex gap-3">
                      <Button variant="outline" size="sm" onClick={resetDemo}>
                        Try Another Image
                      </Button>
                      <Button variant="default" size="sm" onClick={() => {
                        navigator.clipboard.writeText(generatedReport);
                        toast({
                          title: "Copied",
                          description: "Report copied to clipboard",
                        });
                      }}>
                        Copy Report
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="h-full min-h-[350px] flex flex-col items-center justify-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted mb-4">
                      <FileText className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {isGenerating 
                        ? "AI is analyzing the image..."
                        : selectedImage 
                          ? "Click 'Generate Report' to analyze the image"
                          : "Upload an X-ray image to generate a report"
                      }
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 rounded-xl bg-warning/5 border border-warning/20 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">For Healthcare Professionals Only</p>
              <p>
                AI-generated reports should always be reviewed and verified by a qualified 
                radiologist before any clinical decisions are made. This tool is designed 
                to assist, not replace, professional medical judgment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;

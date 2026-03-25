import React from "react";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <SectionHeader id="about" title="About Me" desc="Get to know me." className="mb-12 md:mb-16" />
        
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-12">
          {/* Text Content */}
          <Card className={cn(
              "flex-1 border-border/50",
              "bg-white/80 dark:bg-card/50 backdrop-blur-md",
              "shadow-xl hover:shadow-2xl transition-all duration-300",
              "relative z-10"
            )}>
            <CardContent className="p-6 md:p-8 space-y-6 text-muted-foreground text-lg leading-relaxed h-full flex flex-col justify-center">
            
            <h3 className="text-foreground text-2xl font-bold">Background</h3>
            
            <p className="text-xl font-medium text-primary">
              Engineering scalable digital solutions.
            </p>

            <p>
              I am currently pursuing a B.Tech in Computer Science and Engineering at <span className="text-foreground font-semibold">Lovely Professional University</span>. My journey in tech is driven by a deep fascination with solving complex problems through elegant code.
            </p>
            
            <p>
              With a strong foundation in Data Structures and Algorithms, I specialize in Full-Stack Development—building production-ready applications with React, TypeScript, Firebase, and Node.js.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild>
                  <Link href="#contact" className="flex items-center gap-2">
                    Let's Connect <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link 
                    href="https://drive.google.com/file/d/1MTSsUA8V7Po2AsNXT8kZ5sLOpzC8l7qm/view?usp=sharing" 
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    View Resume <Download size={16} />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Visual Content */}
          <div className="flex-1 flex justify-center items-center w-full">
            <Card className={cn(
              "w-full h-full max-w-sm border-border/50",
              "bg-white/80 dark:bg-card/50 backdrop-blur-md",
              "shadow-xl hover:shadow-2xl transition-all duration-300",
              "overflow-hidden flex flex-col"
            )}>
                <CardContent className="p-0 flex-1 relative min-h-[400px]">
                    <Image 
                      src="/pic.jpeg" 
                      alt={config.author}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      priority
                    />
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

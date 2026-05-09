import React from 'react';
import { 
  FileText, 
  Clock, 
  Star, 
  ArrowRight, 
  Layout, 
  Plus,
  Zap,
  Share2,
  FolderOpen
} from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { FileItem } from '@/src/types';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';

interface DashboardProps {
  recentFiles: FileItem[];
  onOpenFile: (id: string) => void;
  onNewFile: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ recentFiles, onOpenFile, onNewFile }) => {
  return (
    <div className="space-y-12">
      <header className="flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 text-primary"
        >
          <div className="p-2 rounded-xl bg-primary/10">
            <Zap className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-black tracking-tighter">Welcome back</h1>
        </motion.div>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Create, edit, and visualize complex diagrams with speed and elegance. 
          Use Mermaid Studio Pro to transform your ideas into professional representations.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Button 
          className="h-32 flex flex-col items-start p-6 premium-gradient text-white border-0 hover:scale-[1.02] transition-transform shadow-xl"
          onClick={() => {
            onNewFile();
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.8 }
            });
          }}
        >
          <Plus className="w-8 h-8 mb-4" />
          <div className="flex flex-col items-start leading-tight">
            <span className="text-xl font-bold">New Project</span>
            <span className="text-sm opacity-80 font-normal">Start from a blank canvas</span>
          </div>
        </Button>

        <Button 
          variant="outline"
          className="h-32 flex flex-col items-start p-6 glass hover:bg-muted/50 border-muted/50 hover:scale-[1.02] transition-transform"
        >
          <FolderOpen className="w-8 h-8 mb-4 text-primary" />
          <div className="flex flex-col items-start leading-tight">
            <span className="text-xl font-bold">Import File</span>
            <span className="text-sm text-muted-foreground font-normal">Upload .md or .txt files</span>
          </div>
        </Button>

        <Button 
          variant="outline"
          className="h-32 flex flex-col items-start p-6 glass hover:bg-muted/50 border-muted/50 hover:scale-[1.02] transition-transform"
        >
          <Layout className="w-8 h-8 mb-4 text-primary" />
          <div className="flex flex-col items-start leading-tight">
            <span className="text-xl font-bold">Templates</span>
            <span className="text-sm text-muted-foreground font-normal">Browse diagram gallery</span>
          </div>
        </Button>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Clock className="w-5 h-5 text-muted-foreground" />
              Recent Projects
            </h2>
            <Button variant="ghost" size="sm" className="text-xs">View all</Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recentFiles.map((file, i) => (
              <motion.div
                key={file.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card 
                  className="p-5 glass hover:bg-muted/30 cursor-pointer transition-all border-muted group"
                  onClick={() => onOpenFile(file.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/5 text-primary">
                      <FileText className="w-5 h-5" />
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100">
                      <Star className="w-4 h-4" />
                    </Button>
                  </div>
                  <h3 className="font-bold text-lg leading-tight mb-1">{file.name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-4">
                    {file.content.substring(0, 100)}...
                  </p>
                  <div className="flex items-center justify-between text-[10px] font-bold text-muted-foreground uppercase py-2 border-t border-muted/30">
                    <span>Last edited: Just now</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Share2 className="w-5 h-5 text-muted-foreground" />
            Quick Tips
          </h2>
          <Card className="p-6 glass border-primary/10 border-l-4 border-l-primary">
            <h3 className="font-bold mb-2">Did you know?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              You can use "⌘ + K" to quickly search through your files and commands from anywhere in the app.
            </p>
            <Button variant="link" className="p-0 h-auto text-xs text-primary font-bold">LEARN KEYBOARD SHORTCUTS</Button>
          </Card>
          
          <Card className="p-6 glass border-muted">
            <h3 className="font-bold mb-2">New: AI Assistant</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Try our new AI generator! Just describe your diagram and let Gemini do the heavy lifting.
            </p>
            <div className="flex items-center gap-1 text-[10px] font-bold text-primary uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available Now
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import { 
  ResizableHandle, 
  ResizablePanel, 
  ResizablePanelGroup 
} from "@/src/components/ui/resizable";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import { Separator } from "@/src/components/ui/separator";
import Navbar from './Navbar';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/src/components/ui/button';
import { Download } from 'lucide-react';

interface MainLayoutProps {
  navbar: React.ReactNode;
  sidebar: React.ReactNode;
  editor: React.ReactNode;
  preview: React.ReactNode;
  actions?: React.ReactNode;
  onDownloadAll?: () => void;
  showDashboard?: boolean;
  dashboard?: React.ReactNode;
}

export default function MainLayout({ 
  navbar, 
  sidebar, 
  editor, 
  preview, 
  actions,
  onDownloadAll,
  showDashboard,
  dashboard
}: MainLayoutProps) {
  return (
    <div className="flex flex-col h-screen w-full bg-background text-foreground overflow-hidden font-sans">
      {navbar}
      
      <div className="flex-1 flex overflow-hidden relative">
        <AnimatePresence mode="wait">
          {showDashboard ? (
            <motion.div 
              key="dashboard"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute inset-0 z-40 bg-background/80 backdrop-blur-sm p-8 overflow-y-auto"
            >
              <div className="max-w-7xl mx-auto">
                {dashboard}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <ResizablePanelGroup orientation="horizontal">
          {/* Sidebar Panel */}
          <ResizablePanel defaultSize={18} minSize={12} maxSize={25} className="glass border-r">
            <div className="flex flex-col h-full">
              <ScrollArea className="flex-1 px-1 py-4">
                {sidebar}
              </ScrollArea>
              
              <div className="p-4 bg-muted/30 border-t flex flex-col gap-2">
                <div className="flex items-center justify-between text-[10px] font-bold text-muted-foreground uppercase opacity-60">
                  <span>Usage</span>
                  <span>45%</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[45%] premium-gradient" />
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-2 text-[10px] h-7 gap-2 bg-background/50"
                  onClick={onDownloadAll}
                >
                  <Download className="w-3 h-3" />
                  Export Workspace
                </Button>
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle className="w-1 bg-border/40 hover:bg-primary/20 transition-colors" />

          {/* Main Content Panel */}
          <ResizablePanel defaultSize={82}>
            <ResizablePanelGroup orientation="horizontal">
              {/* Editor Panel */}
              <ResizablePanel defaultSize={50} minSize={30}>
                <div className="flex flex-col h-full bg-card/10">
                  <div className="h-10 flex items-center justify-between px-4 bg-muted/10 border-b glass">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">EDITOR</span>
                    <div className="flex items-center gap-2">
                      {actions}
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    {editor}
                  </div>
                </div>
              </ResizablePanel>

              <ResizableHandle className="w-1 bg-border/40 hover:bg-primary/20 transition-colors" />

              {/* Preview Panel */}
              <ResizablePanel defaultSize={50} minSize={30}>
                <div className="flex flex-col h-full bg-secondary/5">
                  <div className="h-10 flex items-center px-4 bg-muted/10 border-b glass text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    PREVIEW
                  </div>
                  <ScrollArea className="flex-1 p-6">
                    <div className="max-w-4xl mx-auto">
                      {preview}
                    </div>
                  </ScrollArea>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

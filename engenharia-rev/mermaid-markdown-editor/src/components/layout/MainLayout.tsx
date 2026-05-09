import React from 'react';
import { 
  ResizableHandle, 
  ResizablePanel, 
  ResizablePanelGroup 
} from "@/src/components/ui/resizable";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import { Separator } from "@/src/components/ui/separator";

interface MainLayoutProps {
  toolbar: React.ReactNode;
  sidebar: React.ReactNode;
  editor: React.ReactNode;
  preview: React.ReactNode;
  actions?: React.ReactNode;
}

export default function MainLayout({ toolbar, sidebar, editor, preview, actions }: MainLayoutProps) {
  return (
    <div className="flex flex-col h-screen w-full bg-background text-foreground overflow-hidden">
      {toolbar}
      <div className="flex-1 flex overflow-hidden">
        <ResizablePanelGroup orientation="horizontal">
          {/* Sidebar Panel */}
        <ResizablePanel defaultSize={20} minSize={15} maxSize={30} className="bg-muted/30">
          <div className="flex flex-col h-full">
            <div className="p-4 font-bold tracking-tight flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              Mermaid Editor
            </div>
            <Separator />
            <ScrollArea className="flex-1">
              {sidebar}
            </ScrollArea>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Main Content Panel */}
        <ResizablePanel defaultSize={80}>
          <ResizablePanelGroup orientation="horizontal">
            {/* Editor Panel */}
            <ResizablePanel defaultSize={50} minSize={30}>
              <div className="flex flex-col h-full border-r">
                <div className="h-10 flex items-center justify-between px-4 bg-muted/20 border-bottom">
                  <span className="text-xs font-medium text-muted-foreground uppercase">EDITOR</span>
                  <div className="flex items-center gap-2">
                    {actions}
                  </div>
                </div>
                <div className="flex-1 overflow-hidden">
                  {editor}
                </div>
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            {/* Preview Panel */}
            <ResizablePanel defaultSize={50} minSize={30}>
              <div className="flex flex-col h-full bg-zinc-300">
                <div className="h-10 flex items-center px-4 bg-muted/20 border-bottom text-xs font-medium text-muted-foreground">
                  PREVIEW
                </div>
                <ScrollArea className="flex-1">
                  {preview}
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

import React from 'react';
import { FileItem } from '@/src/types';
import { Download, Plus, Trash2, FileText, Clock, Star } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

interface FileExplorerProps {
  files: FileItem[];
  activeFileId: string | null;
  onSelectFile: (id: string) => void;
  onAddFile: () => void;
  onDeleteFile: (id: string) => void;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ 
  files, 
  activeFileId, 
  onSelectFile, 
  onAddFile,
  onDeleteFile 
}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between px-3 py-2 mb-2">
        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest opacity-60">Projects</span>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-7 w-7 hover:bg-primary/10 hover:text-primary" 
          onClick={onAddFile}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-0.5 px-2">
        {files.map((file, i) => (
          <motion.div
            key={file.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className={cn(
              "group flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all relative overflow-hidden",
              activeFileId === file.id 
                ? "bg-primary/10 text-primary shadow-sm" 
                : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
            )}
            onClick={() => onSelectFile(file.id)}
          >
            {activeFileId === file.id && (
              <motion.div 
                layoutId="active-indicator"
                className="absolute left-0 top-2 bottom-2 w-1 bg-primary rounded-r-full"
              />
            )}
            
            <div className="flex items-center gap-3 overflow-hidden">
              <div className={cn(
                "w-8 h-8 rounded-md flex items-center justify-center shrink-0 transition-colors",
                activeFileId === file.id ? "bg-primary/20" : "bg-muted"
              )}>
                <FileText className="h-4 w-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold truncate leading-tight">{file.name}</span>
                <span className="text-[10px] opacity-60 flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5" />
                  Edited 2m ago
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7 hover:text-destructive"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteFile(file.id);
                }}
              >
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {files.length === 0 && (
        <div className="px-6 py-12 flex flex-col items-center gap-2 text-center">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-2">
            <FileText className="w-6 h-6 text-muted-foreground opacity-20" />
          </div>
          <p className="text-xs text-muted-foreground font-medium">No projects found</p>
          <Button variant="link" size="sm" className="text-xs h-auto p-0" onClick={onAddFile}>Create new</Button>
        </div>
      )}
    </div>
  );
};

export default FileExplorer;

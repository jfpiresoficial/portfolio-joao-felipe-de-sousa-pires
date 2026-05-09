import React from 'react';
import { FileItem } from '@/src/types';
import { Download, Plus, Trash2, FileText } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { cn } from '@/src/lib/utils';

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
    <div className="p-2 space-y-1">
      <div className="flex items-center justify-between px-2 py-2 mb-2">
        <span className="text-xs font-semibold text-muted-foreground uppercase">Files</span>
        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={onAddFile}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
      {files.map((file) => (
        <div
          key={file.id}
          className={cn(
            "group flex items-center justify-between px-3 py-1.5 rounded-md cursor-pointer transition-colors",
            activeFileId === file.id 
              ? "bg-primary/10 text-primary" 
              : "hover:bg-muted text-muted-foreground hover:text-foreground"
          )}
          onClick={() => onSelectFile(file.id)}
        >
          <div className="flex items-center gap-2 overflow-hidden">
            <FileText className="h-4 w-4 shrink-0" />
            <span className="text-sm truncate">{file.name}</span>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-6 w-6 opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteFile(file.id);
            }}
          >
            <Trash2 className="h-3 w-3" />
          </Button>
        </div>
      ))}

      {files.length === 0 && (
        <div className="px-3 py-4 text-xs text-center text-muted-foreground italic">
          No files yet. Create one!
        </div>
      )}
    </div>
  );
};

export default FileExplorer;

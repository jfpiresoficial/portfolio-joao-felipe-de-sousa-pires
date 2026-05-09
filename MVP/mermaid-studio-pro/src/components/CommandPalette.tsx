import React, { useEffect, useState } from 'react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/src/components/ui/command";
import { 
  FileText, 
  Plus, 
  Trash, 
  Download, 
  Zap, 
  Moon, 
  Sun,
  Layout
} from 'lucide-react';
import { FileItem } from '@/src/types';
import { useTheme } from '@/src/components/ThemeProvider';

interface CommandPaletteProps {
  files: FileItem[];
  onSelectFile: (id: string) => void;
  onAddFile: () => void;
  onDownload: () => void;
  onDownloadAll: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function CommandPalette({
  files,
  onSelectFile,
  onAddFile,
  onDownload,
  onDownloadAll,
  open,
  setOpen
}: CommandPaletteProps) {
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search files..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Files">
          {files.map((file) => (
            <CommandItem
              key={file.id}
              onSelect={() => {
                onSelectFile(file.id);
                setOpen(false);
              }}
            >
              <FileText className="mr-2 h-4 w-4" />
              <span>{file.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => { onAddFile(); setOpen(false); }}>
            <Plus className="mr-2 h-4 w-4" />
            <span>New File</span>
          </CommandItem>
          <CommandItem onSelect={() => { onDownload(); setOpen(false); }}>
            <Download className="mr-2 h-4 w-4" />
            <span>Download Active File</span>
          </CommandItem>
          <CommandItem onSelect={() => { onDownloadAll(); setOpen(false); }}>
            <Download className="mr-2 h-4 w-4" />
            <span>Export All (ZIP)</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Theme">
          <CommandItem onSelect={() => setTheme("light")}>
            <Sun className="mr-2 h-4 w-4" />
            <span>Light Mode</span>
          </CommandItem>
          <CommandItem onSelect={() => setTheme("dark")}>
            <Moon className="mr-2 h-4 w-4" />
            <span>Dark Mode</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

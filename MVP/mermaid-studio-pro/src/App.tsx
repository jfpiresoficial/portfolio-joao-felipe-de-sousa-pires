import { useState, useEffect, useRef } from 'react';
import MainLayout from '@/src/components/layout/MainLayout';
import Navbar from '@/src/components/layout/Navbar';
import FileExplorer from '@/src/components/sidebar/FileExplorer';
import MarkdownEditor from '@/src/components/editor/MarkdownEditor';
import MarkdownPreview from '@/src/components/preview/MarkdownPreview';
import Dashboard from '@/src/components/dashboard/Dashboard';
import { AIAssistant } from '@/src/components/editor/AIAssistant';
import { CommandPalette } from '@/src/components/CommandPalette';
import { ThemeProvider } from '@/src/components/ThemeProvider';
import { FileItem } from '@/src/types';
import { Button } from '@/src/components/ui/button';
import { 
  Download, 
  Share2, 
  Plus, 
  Search,
  LayoutDashboard,
  Save,
  Wand2
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/src/components/ui/tooltip';
import { improveMarkdown } from '@/src/services/ai';
import confetti from 'canvas-confetti';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const INITIAL_CONTENT = `# Welcome to Mermaid Studio Pro

This is a premium Markdown editor with live Mermaid diagram rendering.

## Flowchart Example
\`\`\`mermaid
graph TD
    A[Start] --> B{Is it working?}
    B -- Yes --> C[Great!]
    B -- No --> D[Check code]
    D --> B
\`\`\`

## Sequence Diagram Example
\`\`\`mermaid
sequenceDiagram
    participant User
    participant AI as Mermaid AI
    User->>AI: "Create a login loop"
    AI-->>User: [Generates Diagram]
    User->>User: Edits Markdown
\`\`\`
`;

function AppContent() {
  const [files, setFiles] = useState<FileItem[]>(() => {
    const saved = localStorage.getItem('mermaid-editor-files');
    if (saved) return JSON.parse(saved);
    return [
      {
        id: '1',
        name: 'Welcome.md',
        content: INITIAL_CONTENT,
        parentId: null,
        type: 'file'
      }
    ];
  });

  const [activeFileId, setActiveFileId] = useState<string | null>(null);
  const [showDashboard, setShowDashboard] = useState(true);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isImproving, setIsImproving] = useState(false);
  
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    localStorage.setItem('mermaid-editor-files', JSON.stringify(files));
  }, [files]);

  const activeFile = files.find(f => f.id === activeFileId);

  const handleUpdateContent = (content: string) => {
    if (!activeFileId) return;
    setFiles(prev => prev.map(f => f.id === activeFileId ? { ...f, content } : f));
  };

  const insertText = (text: string) => {
    if (!editorRef.current || !activeFileId) return;
    
    const textarea = editorRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    
    const newText = value.substring(0, start) + text + value.substring(end);
    handleUpdateContent(newText);
  };

  const handleAddFile = (name?: string) => {
    const newFile: FileItem = {
      id: Math.random().toString(36).substr(2, 9),
      name: name || `Untitled-${files.length + 1}.md`,
      content: '# New File\n\nStart writing...',
      parentId: null,
      type: 'file'
    };
    setFiles(prev => [...prev, newFile]);
    setActiveFileId(newFile.id);
    setShowDashboard(false);
  };

  const handleDeleteFile = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
    if (activeFileId === id) {
      setActiveFileId(null);
      setShowDashboard(true);
    }
  };

  const handleDownload = () => {
    if (!activeFile) return;
    const blob = new Blob([activeFile.content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = activeFile.name;
    a.click();
    URL.revokeObjectURL(url);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleDownloadAll = async () => {
    if (files.length === 0) return;
    
    const zip = new JSZip();
    files.forEach(file => {
      zip.file(file.name, file.content);
    });
    
    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, 'mermaid-studio-workspace.zip');
    
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.3 },
      colors: ['#000', '#ffd700', '#ffffff']
    });
  };

  const handleImproveMarkdown = async () => {
    if (!activeFile) return;
    setIsImproving(true);
    try {
      const improved = await improveMarkdown(activeFile.content);
      handleUpdateContent(improved);
      confetti({
        particleCount: 50,
        spread: 40,
        colors: ['#000', '#fff', '#333']
      });
    } finally {
      setIsImproving(false);
    }
  };

  return (
    <TooltipProvider>
      <MainLayout
        showDashboard={showDashboard}
        onDownloadAll={handleDownloadAll}
        navbar={
          <Navbar 
            onSearchClick={() => setIsCommandPaletteOpen(true)} 
          />
        }
        sidebar={
          <div className="space-y-4">
            <Button 
              variant={showDashboard ? "secondary" : "ghost"} 
              className="w-full justify-start gap-2 h-9 text-xs"
              onClick={() => {
                setShowDashboard(true);
                setActiveFileId(null);
              }}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Button>
            
            <FileExplorer
              files={files}
              activeFileId={activeFileId}
              onSelectFile={(id) => {
                setActiveFileId(id);
                setShowDashboard(false);
              }}
              onAddFile={() => handleAddFile()}
              onDeleteFile={handleDeleteFile}
            />
          </div>
        }
        actions={
          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 text-primary" 
                  onClick={handleImproveMarkdown}
                  disabled={!activeFile || isImproving}
                >
                  <Wand2 className={`h-4 w-4 ${isImproving ? 'animate-pulse' : ''}`} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>AI Improve (Gemini)</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleDownload} disabled={!activeFile}>
                  <Download className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Download .md</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Share2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Share Access</TooltipContent>
            </Tooltip>

            <Button variant="default" size="sm" className="h-8 ml-2 gap-2 premium-gradient border-0">
              <Save className="h-3.5 w-3.5" />
              Save
            </Button>
          </div>
        }
        dashboard={
          <Dashboard 
            recentFiles={files.slice(0, 4)} 
            onOpenFile={(id) => {
              setActiveFileId(id);
              setShowDashboard(false);
            }} 
            onNewFile={() => handleAddFile()}
          />
        }
        editor={
          <MarkdownEditor
            ref={editorRef}
            value={activeFile?.content || ''}
            onChange={handleUpdateContent}
          />
        }
        preview={
          <MarkdownPreview
            content={activeFile?.content || ''}
          />
        }
      />

      <AIAssistant onInsertDiagram={insertText} />
      
      <CommandPalette 
        files={files}
        open={isCommandPaletteOpen}
        setOpen={setIsCommandPaletteOpen}
        onSelectFile={(id) => {
          setActiveFileId(id);
          setShowDashboard(false);
        }}
        onAddFile={() => handleAddFile()}
        onDownload={handleDownload}
        onDownloadAll={handleDownloadAll}
      />
    </TooltipProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

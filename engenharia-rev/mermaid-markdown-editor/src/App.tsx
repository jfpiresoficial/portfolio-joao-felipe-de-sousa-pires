import { useState, useEffect, useRef } from 'react';
import MainLayout from '@/src/components/layout/MainLayout';
import Toolbar from '@/src/components/layout/Toolbar';
import FileExplorer from '@/src/components/sidebar/FileExplorer';
import MarkdownEditor from '@/src/components/editor/MarkdownEditor';
import MarkdownPreview from '@/src/components/preview/MarkdownPreview';
import { FileItem } from '@/src/types';
import { Button } from '@/src/components/ui/button';
import { Download } from 'lucide-react';

const INITIAL_CONTENT = `# Welcome to Mermaid Editor

This is a Markdown editor with live Mermaid diagram rendering.

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
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
\`\`\`
`;

export default function App() {
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

  const [activeFileId, setActiveFileId] = useState<string | null>(files[0]?.id || null);
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

  const insertText = (before: string, after: string = '') => {
    if (!editorRef.current || !activeFileId) return;
    
    const textarea = editorRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end);
    
    const newText = text.substring(0, start) + before + selectedText + after + text.substring(end);
    handleUpdateContent(newText);
    
    // Restore focus and selection
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, end + before.length);
    }, 0);
  };

  const handleBold = () => insertText('**', '**');
  const handleUnderline = () => insertText('<u>', '</u>');
  const handleLink = () => insertText('[', '](https://)');
  const handleImage = () => insertText('![alt text](', ')');
  
  const handleOpenFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const newFile: FileItem = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        content: content,
        parentId: null,
        type: 'file'
      };
      setFiles(prev => [...prev, newFile]);
      setActiveFileId(newFile.id);
    };
    reader.readAsText(file);
    // Reset input
    e.target.value = '';
  };

  const handleAddFile = () => {
    const newFile: FileItem = {
      id: Math.random().toString(36).substr(2, 9),
      name: `Untitled-${files.length + 1}.md`,
      content: '# New File\n\nStart writing...',
      parentId: null,
      type: 'file'
    };
    setFiles(prev => [...prev, newFile]);
    setActiveFileId(newFile.id);
  };

  const handleDeleteFile = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
    if (activeFileId === id) {
      setActiveFileId(files.find(f => f.id !== id)?.id || null);
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
  };

  return (
    <MainLayout
      toolbar={
        <Toolbar
          onBold={handleBold}
          onUnderline={handleUnderline}
          onLink={handleLink}
          onImage={handleImage}
          onOpen={handleOpenFile}
          onDownload={handleDownload}
        />
      }
      sidebar={
        <>
          <FileExplorer
            files={files}
            activeFileId={activeFileId}
            onSelectFile={setActiveFileId}
            onAddFile={handleAddFile}
            onDeleteFile={handleDeleteFile}
          />
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept=".md,.txt" 
            onChange={handleFileChange} 
          />
        </>
      }
      actions={
        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={handleDownload} disabled={!activeFile}>
          <Download className="h-4 w-4" />
        </Button>
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
  );
}

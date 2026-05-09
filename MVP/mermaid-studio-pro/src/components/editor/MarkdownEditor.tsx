import React, { forwardRef } from 'react';
import { cn } from '@/src/lib/utils';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const MarkdownEditor = forwardRef<HTMLTextAreaElement, MarkdownEditorProps>(({ value, onChange }, ref) => {
  return (
    <div className="relative w-full h-full group">
      <textarea
        ref={ref}
        className={cn(
          "w-full h-full p-8 bg-transparent outline-none resize-none font-mono text-base leading-relaxed tracking-tight transition-all",
          "text-foreground/80 focus:text-foreground",
          "selection:bg-primary/20 selection:text-primary"
        )}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Start crafting your markdown..."
        spellCheck={false}
      />
      <div className="absolute top-0 left-0 w-1 h-full bg-primary/0 group-focus-within:bg-primary/20 transition-all pointer-events-none" />
    </div>
  );
});

MarkdownEditor.displayName = 'MarkdownEditor';

export default MarkdownEditor;

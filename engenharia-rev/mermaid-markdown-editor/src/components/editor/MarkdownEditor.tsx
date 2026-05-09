import React, { forwardRef } from 'react';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const MarkdownEditor = forwardRef<HTMLTextAreaElement, MarkdownEditorProps>(({ value, onChange }, ref) => {
  return (
    <textarea
      ref={ref}
      className="w-full h-full p-4 bg-transparent outline-none resize-none font-mono text-sm leading-relaxed text-foreground/90 selection:bg-primary/30"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Start typing your markdown here..."
      spellCheck={false}
    />
  );
});

MarkdownEditor.displayName = 'MarkdownEditor';

export default MarkdownEditor;

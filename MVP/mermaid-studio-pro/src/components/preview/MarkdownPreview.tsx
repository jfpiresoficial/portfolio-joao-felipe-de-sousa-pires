import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MermaidRenderer from './MermaidRenderer';

interface MarkdownPreviewProps {
  content: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ content }) => {
  return (
    <div className="markdown-body prose prose-zinc dark:prose-invert max-w-none 
      prose-headings:font-black prose-headings:tracking-tighter 
      prose-h1:text-5xl prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
      prose-p:text-lg prose-p:leading-relaxed prose-p:text-foreground/70
      prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border/50
      prose-code:text-primary prose-code:bg-primary/5 prose-code:px-1 prose-code:rounded
      transition-colors duration-300"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : '';
            
            if (!inline && language === 'mermaid') {
              return <MermaidRenderer chart={String(children).replace(/\n$/, '')} />;
            }
            
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownPreview;

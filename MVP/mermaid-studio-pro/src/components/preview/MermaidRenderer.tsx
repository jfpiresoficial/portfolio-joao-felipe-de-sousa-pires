import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { useTheme } from '@/src/components/ThemeProvider';

interface MermaidRendererProps {
  chart: string;
}

const MermaidRenderer: React.FC<MermaidRendererProps> = ({ chart }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    mermaid.initialize({
      startOnLoad: false,
      theme: isDark ? 'dark' : 'neutral',
      securityLevel: 'loose',
      fontFamily: 'Inter, sans-serif',
      fontSize: 14,
    });

    if (ref.current && chart) {
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      
      try {
        mermaid.render(id, chart).then(({ svg }) => {
          if (ref.current) {
            ref.current.innerHTML = svg;
          }
        });
      } catch (error) {
        console.error('Mermaid rendering error:', error);
      }
    }
  }, [chart, theme]);

  return (
    <div className="flex justify-center my-8 p-6 glass rounded-xl border-muted/20 overflow-x-auto transition-all hover:shadow-lg">
      <div ref={ref} />
    </div>
  );
};

export default MermaidRenderer;

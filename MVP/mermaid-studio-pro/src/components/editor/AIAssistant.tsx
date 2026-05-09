import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Loader2, 
  X,
  Plus,
  Wand2
} from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { Textarea } from '@/src/components/ui/textarea';
import { generateDiagram } from '@/src/services/ai';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface AIAssistantProps {
  onInsertDiagram: (code: string) => void;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ onInsertDiagram }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    try {
      const code = await generateDiagram(prompt);
      setResult(code);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInsert = () => {
    if (result) {
      onInsertDiagram(`\n\`\`\`mermaid\n${result}\n\`\`\`\n`);
      setResult(null);
      setPrompt('');
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4"
          >
            <Card className="w-[350px] overflow-hidden glass-card">
              <div className="p-4 premium-gradient text-white flex items-center justify-between">
                <div className="flex items-center gap-2 font-semibold">
                  <Sparkles className="w-4 h-4" />
                  AI Diagram Assistant
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-7 w-7 text-white hover:bg-white/20" 
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="p-4 space-y-4">
                {!result ? (
                  <>
                    <Textarea 
                      placeholder="Describe the diagram you want to create... (e.g., 'A login flowchart with error states')"
                      className="resize-none h-24 text-sm"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                    />
                    <Button 
                      className="w-full h-10 premium-gradient text-white" 
                      onClick={handleGenerate}
                      disabled={isLoading || !prompt.trim()}
                    >
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      ) : (
                        <Wand2 className="w-4 h-4 mr-2" />
                      )}
                      Generate Diagram
                    </Button>
                  </>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-muted p-2 rounded-md font-mono text-[10px] max-h-40 overflow-y-auto">
                      <pre>{result}</pre>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1" onClick={() => setResult(null)}>
                        Retry
                      </Button>
                      <Button className="flex-1 premium-gradient text-white" onClick={handleInsert}>
                        Insert Block
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="lg"
        className={cn(
          "rounded-full h-14 w-14 shadow-2xl premium-gradient text-white",
          isOpen && "rotate-45"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Sparkles className="w-6 h-6" />
      </Button>
    </div>
  );
};

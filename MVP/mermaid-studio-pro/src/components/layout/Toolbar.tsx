import React from 'react';
import { 
  Bold, 
  Link as LinkIcon, 
  Image as ImageIcon, 
  FolderOpen, 
  Download, 
  Underline 
} from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Separator } from '@/src/components/ui/separator';

interface ToolbarProps {
  onBold: () => void;
  onUnderline: () => void;
  onLink: () => void;
  onImage: () => void;
  onOpen: () => void;
  onDownload: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  onBold,
  onUnderline,
  onLink,
  onImage,
  onOpen,
  onDownload
}) => {
  return (
    <div className="h-12 w-full bg-zinc-950 flex items-center px-4 gap-1 text-white shadow-md z-10">
      <div className="flex items-center gap-1">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 text-white hover:bg-white/20" 
          onClick={onBold}
          title="Negrito"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 text-white hover:bg-white/20" 
          onClick={onUnderline}
          title="Sublinhado"
        >
          <Underline className="h-4 w-4" />
        </Button>
      </div>
      
      <Separator orientation="vertical" className="h-6 bg-white/20 mx-1" />
      
      <div className="flex items-center gap-1">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 text-white hover:bg-white/20" 
          onClick={onLink}
          title="Inserir Link"
        >
          <LinkIcon className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 text-white hover:bg-white/20" 
          onClick={onImage}
          title="Adicionar Imagem"
        >
          <ImageIcon className="h-4 w-4" />
        </Button>
      </div>
      
      <Separator orientation="vertical" className="h-6 bg-white/20 mx-1" />
      
      <div className="flex items-center gap-1">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 text-white hover:bg-white/20" 
          onClick={onOpen}
          title="Abrir Arquivos"
        >
          <FolderOpen className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 text-white hover:bg-white/20" 
          onClick={onDownload}
          title="Download"
        >
          <Download className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="ml-auto flex items-center gap-2">
        <span className="text-xs font-medium opacity-80">Mermaid Markdown Editor</span>
      </div>
    </div>
  );
};

export default Toolbar;

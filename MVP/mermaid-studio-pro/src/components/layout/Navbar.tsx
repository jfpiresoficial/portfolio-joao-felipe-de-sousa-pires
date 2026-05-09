import React from 'react';
import { 
  Zap, 
  Search, 
  Settings, 
  Menu, 
  Moon, 
  Sun, 
  Monitor,
  Github,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { useTheme } from '@/src/components/ThemeProvider';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from '@/src/components/ui/dropdown-menu';

interface NavbarProps {
  onSearchClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchClick }) => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="h-14 border-b glass flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <div className="w-8 h-8 rounded-lg premium-gradient flex items-center justify-center text-white">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <span className="hidden sm:inline-block">Mermaid Studio <span className="text-primary font-black uppercase text-[10px] bg-primary/10 px-1 rounded ml-1">Pro</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-1">
          <Button variant="ghost" size="sm" className="text-xs font-medium h-8">Explorer</Button>
          <Button variant="ghost" size="sm" className="text-xs font-medium h-8">Board</Button>
          <Button variant="ghost" size="sm" className="text-xs font-medium h-8 text-muted-foreground">Community</Button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="h-9 w-40 justify-between text-muted-foreground font-normal border-muted/50 hidden sm:flex"
          onClick={onSearchClick}
        >
          <span className="flex items-center gap-2">
            <Search className="w-4 h-4" />
            Search...
          </span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>

        <div className="h-6 w-px bg-border mx-2" />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              {theme === 'light' ? <Sun className="w-4 h-4" /> : theme === 'dark' ? <Moon className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}>
              <Sun className="mr-2 h-4 w-4" /> Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              <Moon className="mr-2 h-4 w-4" /> Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              <Monitor className="mr-2 h-4 w-4" /> System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Github className="w-4 h-4" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" className="h-9 gap-2 pl-2">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                JD
              </div>
              <ChevronDown className="w-3 h-3 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Cloud Sync</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;

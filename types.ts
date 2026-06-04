
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface TerminalEntry {
  command?: string;
  output: React.ReactNode;
  type: 'input' | 'output';
}

export type SectionId = 'hero' | 'about' | 'projects' | 'contact';

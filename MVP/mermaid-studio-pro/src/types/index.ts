export interface FileItem {
  id: string;
  name: string;
  content: string;
  parentId: string | null;
  type: 'file' | 'folder';
}

export interface EditorState {
  activeFileId: string | null;
  files: FileItem[];
}

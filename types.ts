export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  text: string;
  timestamp: Date;
}

export interface GameMode {
  id: string;
  title: string;
  description: string;
  image: string;
  playerCount: number;
}

export interface ServerStatus {
  online: boolean;
  players: number;
  maxPlayers: number;
  motd: string;
}
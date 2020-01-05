export interface ShootRequest {
  gameId?: number;
  playerId?: number;
  boardPosition: {
    col: string;
    row: number;
  };
}

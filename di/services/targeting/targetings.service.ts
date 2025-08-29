export interface Targeting {
  type: string;
  data: object;
}

export interface TargetingsService {
  getTargetings(id: string): Promise<ReadonlyArray<Targeting>>;
}

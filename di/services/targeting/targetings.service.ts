export interface Targeting {
  type: string;
  data: object;
}

export const TARGETING_SERVICE = 'TargetingServiceInjectionToken';

export interface TargetingsService {
  getTargetings(id: string): Promise<ReadonlyArray<Targeting>>;
}

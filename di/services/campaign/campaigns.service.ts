import type {Targeting} from '../targeting/targetings.service.ts';

export interface Campaign {
  id: string;
  name: string;
  targetings: ReadonlyArray<Targeting>;
}

export interface CampaignsService {
  getById(id: string): Promise<Campaign>;
}

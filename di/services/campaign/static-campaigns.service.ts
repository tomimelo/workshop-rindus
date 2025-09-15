import type {TargetingsService} from '../targeting/targetings.service.ts';
import type {Campaign, CampaignsService} from './campaigns.service.ts';

export class StaticCampaignsService implements CampaignsService {
  public constructor(private readonly targetingsService: TargetingsService) {}

  public async getById(id: string): Promise<Campaign> {
    return {
      id,
      name: 'Campaign name',
      targetings: await this.targetingsService.getTargetings(id),
    };
  }
}

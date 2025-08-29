import {Container} from './injector/container.ts';
import {StaticCampaignsService} from './services/campaign/static-campaigns.service.ts';

async function main(): Promise<void> {
  const container = Container.configure([]);
  const campaignsService = container.get(StaticCampaignsService);
  const campaign = await campaignsService.getById('campaign-id');
  console.dir(campaign, {depth: null});
}

main();

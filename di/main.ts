import {StaticCampaignsService} from './services/campaign/static-campaigns.service.ts';

async function main(): Promise<void> {
  const campaignsService = new StaticCampaignsService();
  const campaign = await campaignsService.getById('campaign-id');
  console.dir(campaign, {depth: null});
}

main();

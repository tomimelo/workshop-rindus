import {Container} from './injector/container.ts';
import {CAMPAIGNS_SERVICE, type CampaignsService} from './services/campaign/campaigns.service.ts';
import {StaticCampaignsService} from './services/campaign/static-campaigns.service.ts';
import {INVENTORY_SERVICE} from './services/inventory/inventory.service.ts';
import {StaticInventoryService} from './services/inventory/static-inventory.service.ts';
import {StaticTargetingsService} from './services/targeting/static-targetings.service.ts';
import {TARGETING_SERVICE} from './services/targeting/targetings.service.ts';

async function main(): Promise<void> {
  const diContainer = new Container();

  diContainer.register({
    token: INVENTORY_SERVICE,
    useClass: StaticInventoryService,
  });

  diContainer.register({
    token: TARGETING_SERVICE,
    useClass: StaticTargetingsService,
    dependencies: [INVENTORY_SERVICE],
  });

  diContainer.register({
    token: CAMPAIGNS_SERVICE,
    useClass: StaticCampaignsService,
    dependencies: [TARGETING_SERVICE],
  });

  const campaignsService = diContainer.get(CAMPAIGNS_SERVICE) as CampaignsService;
  const campaign = await campaignsService.getById('campaign-id');
  console.dir(campaign, {depth: null});
}

main();

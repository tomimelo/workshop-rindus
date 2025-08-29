import {StaticCampaignsService} from './services/campaign/static-campaigns.service.ts';

export interface Class<T> {
  new (...args: unknown[]): T;
}

export type ProviderToken<T> = Class<T>;

export interface Provider<T = unknown> {
  provide: ProviderToken<T>;
  useClass: Class<T>;
}

export interface Container {
  configure(providers: ReadonlyArray<Provider>): void;
  get<T>(token: ProviderToken<T>): T;
}

async function main(): Promise<void> {
  // const container: Container = {} as Container;
  // container.configure([]);
  const campaignsService = new StaticCampaignsService();
  const campaign = await campaignsService.getById('campaign-id');
  console.dir(campaign, {depth: null});
}

main();

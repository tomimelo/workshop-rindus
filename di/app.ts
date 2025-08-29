import {CampaignsService} from './services/campaigns.service';

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

export function inject<T>(token: ProviderToken<T>): T {
  throw new Error('Not implemented');
}

async function main(): Promise<void> {
  const container: Container = {} as Container;
  container.configure([]);
  const campaignsService = container.get(CampaignsService);
  const campaign = await campaignsService.getById('campaign-id');
  console.log({campaign});
}

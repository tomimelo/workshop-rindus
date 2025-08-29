import type {Site, InventoryService} from './inventory.service.ts';

const sites: ReadonlyArray<Site> = [
  {
    id: 'site-1',
    name: 'Site 1',
    screens: ['screen-1-1'],
  },
  {
    id: 'site-2',
    name: 'Site 2',
    screens: ['screen-2-1', 'screen-2-2'],
  },
  {
    id: 'site-3',
    name: 'Site 3',
    screens: ['screen-3-1', 'screen-3-2'],
  },
];

export class StaticInventoryService implements InventoryService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async getSites(ids: ReadonlyArray<string>): Promise<ReadonlyArray<Site>> {
    return sites;
  }
}

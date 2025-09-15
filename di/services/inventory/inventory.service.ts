export interface Site {
  id: string;
  name: string;
  screens: ReadonlyArray<string>;
}

export const INVENTORY_SERVICE = 'InventoryServiceInjectionToken';

export interface InventoryService {
  getSites(ids: ReadonlyArray<string>): Promise<ReadonlyArray<Site>>;
}

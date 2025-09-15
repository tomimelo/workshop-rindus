import type {InventoryService} from '../inventory/inventory.service.ts';
import type {Targeting, TargetingsService} from './targetings.service.ts';

export class StaticTargetingsService implements TargetingsService {
  public constructor(private readonly inventoryService: InventoryService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async getTargetings(id: string): Promise<ReadonlyArray<Targeting>> {
    return [
      {
        type: 'inventory',
        data: {
          sites: await this.inventoryService.getSites(['site-1', 'site-2', 'site-3']),
        },
      },
    ];
  }
}

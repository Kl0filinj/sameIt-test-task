export interface ITrackPackageInfo {
  FactualWeight: string;
  DocumentCost: string;
  WarehouseRecipient: string;
  WarehouseSender: string;
  Number: string;
  CitySender: string;
  CityRecipient: string;
  ActualDeliveryDate: string;
  Status: string;
}
export interface IOfficesDataInfo {
  Description: string;
  ShortAddress: string;
  Phone: string;
  Number: string;
  SettlementAreaDescription: string;
  TotalMaxWeightAllowed: string;
}
export interface IOfficesInfo {
  data: IOfficesDataInfo[];
  totalCount: number;
}

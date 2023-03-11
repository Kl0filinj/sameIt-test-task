import axios from 'axios';

const BASE_URL = 'https://api.novaposhta.ua/v2.0/json/';
const API_KEY = '633a289e89aa24489caf8479765d2b32';
export const LIMIT_PER_PAGE = 5;

const instance = axios.create({
  baseURL: BASE_URL,
});

interface IReqStructure {
  modelName: string;
  calledMethod: string;
  methodProperties: object;
}

const reqStructure = ({
  modelName,
  calledMethod,
  methodProperties,
}: IReqStructure) => {
  return {
    apiKey: API_KEY,
    modelName,
    calledMethod,
    methodProperties,
  };
};

export const getTrackPackageInfo = async (credentials: string) => {
  const reqCredentials = reqStructure({
    modelName: 'TrackingDocument',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: [
        {
          DocumentNumber: credentials,
          Phone: '',
        },
      ],
    },
  });
  const { data } = await instance.post('', reqCredentials);
  const {
    FactualWeight,
    DocumentCost,
    WarehouseRecipient,
    WarehouseSender,
    Number,
    CitySender,
    CityRecipient,
    ActualDeliveryDate,
    Status,
  } = data.data[0];
  return {
    FactualWeight,
    DocumentCost,
    WarehouseRecipient,
    WarehouseSender,
    Number,
    CitySender,
    CityRecipient,
    ActualDeliveryDate,
    Status,
  };
};

export const getOfficesInfoList = async (page: number) => {
  const reqCredentials = reqStructure({
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      Page: page,
      Limit: LIMIT_PER_PAGE,
    },
  });
  const { data } = await instance.post('', reqCredentials);
  return { data: data.data, totalCount: data.info.totalCount };
};

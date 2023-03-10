import axios from 'axios';

const BASE_URL = 'https://api.novaposhta.ua/v2.0/json/';
const API_KEY = '633a289e89aa24489caf8479765d2b32';

const reqStructure = (packageCode: string) => {
  return {
    apiKey: API_KEY,
    modelName: 'TrackingDocument',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: [
        {
          DocumentNumber: packageCode,
          Phone: '',
        },
      ],
    },
  };
};

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getTrackPackageInfo = async (credentials: string) => {
  const { data } = await instance.post('', reqStructure(credentials));
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

// export const getOfficesInfoList = async () => {
//   const { data } = await instance.get("");
//   return data;
// };

import axios from 'axios';

const BASE_URL = 'https://api.novaposhta.ua/v2.0/json/';
// const API_KEY = '633a289e89aa24489caf8479765d2b32'

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getTrackPackageInfo = async (credentials: string) => {
  const { data } = await instance.post('', credentials);
  return data[0];
};

// export const getOfficesInfoList = async () => {
//   const { data } = await instance.get("");
//   return data;
// };
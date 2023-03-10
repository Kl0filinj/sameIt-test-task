import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';
import { ITrackInfoResponse } from 'redux/helpers/dataTypes';
interface PackageDataProps {
  packageData: Partial<ITrackInfoResponse>;
  isLoading: boolean;
}

const PackageData: React.FC<PackageDataProps> = ({
  packageData,
  isLoading,
}) => {
  const {
    WarehouseSender = 'Відправника не знайдено',
    WarehouseRecipient = 'Отримувача не знайдено',
    FactualWeight = '0',
    ActualDeliveryDate = '-',
    DocumentCost = '0',
    Number,
    Status = 'Помилка',
  } = packageData;

  return (
    <Box flexBasis={'70%'}>
      {Object.keys(packageData).length > 0 && !isLoading && (
        <>
          <Typography
            variant="h2"
            fontWeight={'700'}
            fontSize={36}
            textAlign="center"
            gutterBottom
          >
            Інформація за посилкою
          </Typography>
          <Box>
            <Card>
              <CardContent>
                <Box mb={3}>
                  <Typography variant="h5" color={red[500]} gutterBottom>
                    Відправник
                  </Typography>
                  <Typography variant="h5" component="p">
                    {WarehouseSender}
                  </Typography>
                  <Divider />
                </Box>
                <Box mb={3}>
                  <Typography variant="h5" color={red[500]} gutterBottom>
                    Отримувач
                  </Typography>
                  <Typography variant="h5" component="p">
                    {WarehouseRecipient}
                  </Typography>
                  <Divider />
                </Box>
                <Typography variant="h5" color={red[500]} gutterBottom>
                  Опис
                </Typography>

                <Typography variant="h5" component="p">
                  Номер: {Number}
                </Typography>

                <Typography variant="h5" component="p">
                  Статус: {Status}
                </Typography>

                <Typography variant="h5" component="p">
                  Дата доставки: {ActualDeliveryDate}
                </Typography>

                <Typography variant="h5" component="p">
                  Вартість: {DocumentCost} ₴
                </Typography>

                <Typography variant="h5" component="p">
                  Вага: {FactualWeight} кг
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </>
      )}
    </Box>
  );
};

export default PackageData;

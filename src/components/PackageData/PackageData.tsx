import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';
import { ITrackInfoResponse } from 'redux/helpers/dataTypes';
interface PackageDataProps {
  packageData: Partial<ITrackInfoResponse>;
}

const PackageData: React.FC<PackageDataProps> = ({ packageData }) => {
  const {
    WarehouseSender,
    WarehouseRecipient,
    FactualWeight,
    ActualDeliveryDate,
    DocumentCost,
    Number,
  } = packageData;

  return (
    <Box border={3} borderColor="blue" flexBasis={'60%'}>
      {Object.keys(packageData).length > 0 && (
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
                  Дата доставки: {ActualDeliveryDate}
                </Typography>

                <Typography variant="h5" component="p">
                  Вартість: {DocumentCost} ₴
                </Typography>

                <Typography variant="h5" component="p">
                  Вага: {FactualWeight}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </>
      )}
    </Box>
  );
};

// FactualWeight: string,
// DocumentCost: string,
// WarehouseRecipient: string,
// WarehouseSender: string,
// Number: string,

// CitySender: string,
// CityRecipient: string,

// ActualDeliveryDate: string,

export default PackageData;

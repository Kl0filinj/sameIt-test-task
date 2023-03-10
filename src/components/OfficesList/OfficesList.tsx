import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { useEffect } from 'react';
import { getOfficesList } from 'redux/data/data-operations';
import { selectOfficesList } from 'redux/data/data-selectors';
import { cleanOfficesList } from 'redux/data/data-slice';
import { useAppDispatch, useAppSelector } from 'redux/helpers/hook';

const OfficesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const officesList = useAppSelector(selectOfficesList);

  useEffect(() => {
    dispatch(getOfficesList());
    return () => {
      dispatch(cleanOfficesList());
    };
  }, [dispatch]);

  return (
    <>
      <Typography
        variant="h2"
        fontWeight={'700'}
        fontSize={36}
        textAlign="center"
        gutterBottom
      >
        Список відділень
      </Typography>
      {officesList.map(
        ({
          Number,
          Description,
          ShortAddress,
          SettlementAreaDescription,
          TotalMaxWeightAllowed,
          Phone,
        }) => (
          <Card sx={{ mb: 3 }} key={ShortAddress}>
            <CardContent>
              <Box mb={3}>
                <Typography
                  variant="h3"
                  color={red[500]}
                  fontWeight="700"
                  gutterBottom
                >
                  № {Number}
                </Typography>
                <Typography variant="h5" color={red[500]} component="p">
                  {Description}
                </Typography>
                <Divider />
              </Box>

              <Typography variant="h5" component="p">
                Адреса: {ShortAddress}, {SettlementAreaDescription}
              </Typography>

              <Typography variant="h5" component="p">
                Максимальна вага: {TotalMaxWeightAllowed} кг
              </Typography>

              <Typography variant="h5" component="p">
                Контактний номер:{' '}
                <Typography
                  variant="h5"
                  component="a"
                  href={`tel:${Phone}`}
                  color={'white'}
                >
                  + {Phone}
                </Typography>
              </Typography>
            </CardContent>
          </Card>
        )
      )}
    </>
  );
};

export default OfficesList;

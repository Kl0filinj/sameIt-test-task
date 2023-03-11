import {
  Box,
  Card,
  CardContent,
  Divider,
  Pagination,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { Loader } from 'components/sheared';
import React, { useEffect, useState } from 'react';
import { getOfficesList } from 'redux/data/data-operations';
import { selectOfficesInfo } from 'redux/data/data-selectors';
import { cleanOfficesList } from 'redux/data/data-slice';
import { useAppDispatch, useAppSelector } from 'redux/helpers/hook';
interface OfficesListProps {
  isLoading: boolean;
}

const OfficesList: React.FC<OfficesListProps> = ({ isLoading }) => {
  const [page, setPage] = useState(1);
  const { data: officesList, totalCount } = useAppSelector(selectOfficesInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOfficesList(page));
    return () => {
      dispatch(cleanOfficesList());
    };
  }, [dispatch, page]);

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
      {!isLoading ? (
        <>
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
          {!!totalCount && (
            <Pagination
              count={totalCount}
              page={page}
              onChange={(_, num) => setPage(num)}
              color={'standard'}
              disabled={isLoading}
              sx={{ display: 'flex', justifyContent: 'center' }}
            />
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default OfficesList;

import React from 'react';
import { Box } from '@mui/system';

interface ComponentContainerProps {
  children: React.ReactNode;
}

const ComponentContainer: React.FC<ComponentContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <Box p={3} {...props}>
      {children}
    </Box>
  );
};

export default ComponentContainer;

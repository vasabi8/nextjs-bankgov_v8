import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { Box } from '@material-ui/core';
import Link from 'next/link';
import CmtImage from '../../../../@coremat/CmtImage';

const Logo = ({ color, ...props }) => {
  const logoUrl = color === 'white' ? '/images/logo-white.png' : '/images/logo.png';
  const logoSymbolUrl = color === 'white' ? '/images/logo-white-symbol.png' : '/images/logo-symbol.png';

  return (
    <Box className="pointer" {...props}>
      <Hidden xsDown>
        <Link href="/">
          <a></a>
        </Link>
      </Hidden>
      <Hidden smUp>
        <Link href="/">
          <a></a>
        </Link>
      </Hidden>
    </Box>
  );
};

export default Logo;

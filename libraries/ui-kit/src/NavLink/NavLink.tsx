import React from 'react';
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

declare function singleSpaNavigate(e: React.MouseEvent);

type Props = {
  path:string;
};

const ClearLink = styled('a')({
  textDecoration: 'none',
  color: 'inherit',
});


const NavLink: React.FC<Props> = ({children, path}) => {
  return (
    <ClearLink href={path} onClick={e=>singleSpaNavigate(e)}>
      <Typography color="primary">{children}</Typography>
    </ClearLink>
  );
};

NavLink.displayName = 'NavLink';

export default NavLink;

import React from 'react';
import MessageIcon from '@material-ui/icons/Message';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  navLink: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 8,
    color: theme.palette.text.secondary,
  },
  iconRoot: {
    fontSize: 18,
    marginRight: 10,
  },
  titleSpace: {
    marginBottom: 20,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.up('sm')]: {
      marginTop: 15,
    },
  },
}));

const GeneralInfo = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography component="div" variant="h5" className={classes.titleSpace}>
        You Have
          <br/>
Unread messages
          <br/>
      3 Other notifications
      </Typography>

    </div>
  );
};

export default GeneralInfo;

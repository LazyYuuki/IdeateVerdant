import { useState } from 'react';
import { IconButton, Drawer, Box, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom'

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';

const styles = {
  header: {
    display: 'flex',
    backgroundColor: '#80fff7',
    flexDirection: 'row'
  },
  icon: {
    display: 'inline-block',
  },
  drawerContainer: {
    backgroundColor: '#80fff7',
  },
  drawerText: {
    color: '#98623C',
    textAlign: 'center',
    fontWeight: 'bold'
  }
}

const settings = [
  { text: 'Token', href: '/token' },
]

const accounts = [
  { text: 'Home', href: '/' },
  { text: 'Account', href: '/info' },
  { text: 'Statistic', href: '/statistic' },
]

export default function Header() {
  const [isDrawer, setDrawer] = useState(false)
  const [isDrawer2, setDrawer2] = useState(false)

  const toggleDrawer = () => {
    setDrawer(!isDrawer)
  }

  const toggleDrawer2 = () => {
    setDrawer2(!isDrawer2)
  }

  return (
    <div style={styles.header}>
      <IconButton aria-label='account' size='large' style={styles.icon}
        onClick={toggleDrawer2}
      >
        <AccountCircleOutlinedIcon />
      </IconButton>
      <div style={{ flex: 1 }} />
      <IconButton aria-label='account' size='large' style={styles.icon}
        onClick={toggleDrawer}
      >
        <MoreHorizRoundedIcon />
      </IconButton>
      <Drawer
        anchor='top'
        open={isDrawer}
        onClose={toggleDrawer}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
          style={styles.drawerContainer}
        >
          <List>
            {settings.map((setting, index) => (
              <ListItem
                button
                component={Link}
                key={index}
                to={setting.href}
              >
                <ListItemText primary={setting.text} primaryTypographyProps={styles.drawerText} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Drawer
        anchor='top'
        open={isDrawer2}
        onClose={toggleDrawer2}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer2}
          onKeyDown={toggleDrawer2}
          style={styles.drawerContainer}
        >
          <List>
            {accounts.map((account, index) => (
              <ListItem
                button
                component={Link}
                key={index}
                to={account.href}
              >
                <ListItemText primary={account.text} primaryTypographyProps={styles.drawerText} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  )
}
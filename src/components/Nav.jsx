import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../components/main.css'
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <div className="logo_head" >
        <img
          src="logo_bgremove.png"
          alt="Not Found"
          className="logo-bgremove"
          style={{marginLeft:'10px'}}

        />
        <div className="" style={{marginRight:'10px'}} >
          <p className="sidenav-1 flex-hcenter" style={{fontSize:'25px'}}>DRESTEIN</p>
          <p className="sidenav-2 flex-hcenter">2 0 2 2</p>

      </div>

      </div>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex',justifyContent:'space-evenly'}}>
      <AppBar component="nav" sx={{background:'white',boxShadow:'none',padding:'0px 40px',paddingTop:'10px'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' },color:'black' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: {sm: 'block' } }}
          >
          <div className="logo_head">
        <img
          src="logo_bgremove.png"
          alt="Not Found"
          className="logo-bgremove"
        />
        <div className="event-logo">
          <p className="txt-297 flex-hcenter">DRESTEIN</p>
          <p className="txt-384 flex-hcenter">2 0 2 2</p>

      </div>

      </div>
      </Typography>
       
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <div className="nav_links">

<div className="nav-item flex-row-vstart-hstart">
  <p className="txt-453 flex-hcenter">HOME</p>
</div>
<div className="nav-item-1 flex-row-vstart-hstart">
  <p className="txt-453 flex-hcenter">EVENTS</p>
</div>

<div className="nav-item-2 flex-row-vstart-hstart">
<p className="txt-453 flex-hcenter">ABOUT</p>
</div>
</div>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
    
      </Box> */}
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;

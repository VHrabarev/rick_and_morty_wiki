import { AppBar, Toolbar, IconButton, Typography, ButtonGroup, Button, Box, Tooltip, Avatar, Menu, MenuItem, Divider, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = function(props) {
    const {auth, pages = [], settings = [], logout} = props;
    const [drawerNavMenu, setDrawerNavMenu] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleLogout = () => {
        setAnchorElUser(null);
        logout();
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setDrawerNavMenu(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <SwipeableDrawer
                        anchor="left"
                        open={drawerNavMenu}
                        onClose={() => setDrawerNavMenu(false)}
                        onOpen={() => setDrawerNavMenu(true)}
                    >
                        <List sx={{ width: 200 }} role="presentation">
                            {pages.map(page => (
                                <ListItem key={page.name} disablePadding>
                                    <Link to={page.link} className="link" style={{ width: "100%" }}>
                                        <ListItemButton onClick={() => setDrawerNavMenu(false)}>
                                            <ListItemText primary={page.name} />
                                        </ListItemButton>
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </SwipeableDrawer>
                </Box>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/" className="link">Rick and Morty wiki</Link>
                </Typography>
                <ButtonGroup 
                    size="large"
                    variant="text"
                    sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                    aria-label="Navigation manu"
                    component="nav"
                >
                    {pages.map(page => (
                        <Link to={page.link} key={page.name} className="link">
                            <Button sx={{ color: "#fff" }}>{page.name}</Button>
                        </Link>
                    ))}
                </ButtonGroup>
                <Box sx={{ flexGrow: 0 }}>
                    {auth === "anon" ? 
                        <Link to="/login" className="link">Login</Link> :
                        <Tooltip title="Open settings">
                            <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
                                <Avatar alt="User avatar" src="" />
                            </IconButton>
                        </Tooltip>
                    }
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map(setting => (
                            <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting.name}</Typography>
                            </MenuItem>
                        ))}
                        <Divider />
                        <MenuItem onClick={handleLogout}>
                            <Typography textAlign="center">Logout</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
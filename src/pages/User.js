import * as React from 'react';
import { useEffect, useState } from 'react';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from '../component/TopBar';
import SideBar from '../component/Sidebar';
import { getDesignTokens } from '../Theme';
import { useNavigate, Outlet } from 'react-router-dom';
import httpclient from '../httpclient';

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function User() {
  const navigate = useNavigate();
 
  const [loading, setLoading] = useState(true); // Add loading state
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(
    Boolean(localStorage.getItem("currentMode"))
      ? localStorage.getItem("currentMode")
      : "light"
  );


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await httpclient.get('//localhost:5000/user');
        
     
        // Assuming response contains user data
        if (!response.data) {

          navigate("/");

        }
        
      } catch (error) {
        console.log(error);
        navigate("/login");
      } finally {
        
        setLoading(false); // Set loading to false after fetching data
      }
    };
    fetchData();
    
  }, [navigate]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching data
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          setMode={setMode}
        />
        <SideBar open={open} handleDrawerClose={handleDrawerClose} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet  />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

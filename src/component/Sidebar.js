import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { Avatar, styled ,Typography,useTheme} from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import { HomeOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import th from './img/th.jpg'
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const array1=[
  {text:"Dashboard",icon:<HomeOutlined/>,path:"/user"},
  {text:"Profile",icon:<PersonOutlineOutlined/>,path:"/user/profile"},
  {text:"Data",icon:<SourceOutlinedIcon/>,path:"/user/data"},
  
]
const Array2 = [
 
  { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/user/calendar" },
  {
    text: "FAQ Page",
    icon: <HelpOutlineOutlinedIcon />,
    path: "/user/faq",
  },
  
];
const Array3=[
  { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/user/Barchart" },
  { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/user/piechart" },
  { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/user/linechart" },
]



const SideBar = ({ open, handleDrawerClose }) => {
  
  const theme = useTheme();
  const navigate=useNavigate()
  const location=useLocation()

  return (
    <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider/>
        <Avatar sx={{mx:"auto",height:open?88:55,width:open?88:55 ,my:2, border:"2px solid gray",transition:"0.25s"}} alt='profile_img' src={th} align='center'/>
        <Typography sx={{fontSize:open ?17:0, transition:'0.25s'}} align='center'>user</Typography>
        <Typography sx={{fontSize:open?15:0,transition:'0.25s'}} align='center'>oxx</Typography>
        <List>
          {array1.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => { 
                  navigate(item.path)
                 }

                }
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:location.pathname===item.path ? theme.palette.mode==="light"?grey[300]:grey[800] :null
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Array2.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => { 
                  navigate(item.path)
                 }

                }
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:location.pathname===item.path ? theme.palette.mode==="light"?grey[300]:grey[800] :null
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List>
        {Array3.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => { 
                  navigate(item.path)
                 }

                }
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:location.pathname===item.path ? theme.palette.mode==="light"?grey[300]:grey[800] :null
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    
  );
};

export default SideBar;





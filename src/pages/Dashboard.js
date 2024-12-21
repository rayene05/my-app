import { DownloadOutlined } from "@mui/icons-material";
import { Button,Box } from "@mui/material";
import Row1 from "../component/Row1";
import Row2 from "../component/Row2";

function Dashboard() {
    return (
        <div>
        <Box sx={{textAlign:"right"}}>
       <Button sx={{padding:"6px 8px"}} variant="contained" color="primary">
        <DownloadOutlined/>
            Download reports
       </Button>
       </Box>
       <Row1/>
       <Row2/>
       </div>
        );
}

export default Dashboard;
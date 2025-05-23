import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const SidebarData = [
        {
        title: "HOME",
        icon: <HomeOutlinedIcon fontSize='large'/>,
        link: "/"
    },
    
    {
        title: "PROFILE",
        icon: <PersonOutlinedIcon fontSize='large' />,
        link: "/profile"
    },

    {
        title: "SETTINGS",
        icon: <SettingsOutlinedIcon fontSize='large'/>,
        link: "/settings"
    },
    {
        title: "ABOUT",
        icon: <InfoOutlinedIcon fontSize='large'/>,
        link: "/about"
    },
    

]
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { IMobileNavLinks, ISidebarLinks } from '../types/ISidebarLinks';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';

export const sidebar_links: ISidebarLinks[] = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    icon: <HomeOutlinedIcon />,
    activeIcon: <HomeIcon />,
    borderBottom: false,
    badge: false,
  },
  {
    id: 2,
    title: 'Friends',
    path: '/friends',
    icon: <PeopleOutlineIcon />,
    activeIcon: <PeopleIcon />,
    borderBottom: true,
    badge: false,
  },
  {
    id: 3,
    title: 'Notifications',
    path: '/notifications',
    icon: <NotificationsNoneIcon />,
    activeIcon: <NotificationsIcon />,
    borderBottom: false,
    badge: true,
  },
  {
    id: 4,
    title: 'Messages',
    path: '/messages',
    icon: <MailOutlineIcon />,
    activeIcon: <MailIcon />,
    borderBottom: true,
    badge: true,
  },
  {
    id: 5,
    title: 'Bookmarks',
    path: '/bookmarks',
    icon: <BookmarkBorderIcon />,
    activeIcon: <BookmarkIcon />,
    borderBottom: false,
    badge: false,
  },
  {
    id: 6,
    title: 'Settings',
    path: '/settings',
    icon: <SettingsOutlinedIcon />,
    activeIcon: <SettingsIcon />,
    borderBottom: false,
    badge: false,
  },
];

export const mobile_navbar_links: IMobileNavLinks[] = [
  {
    title: 'Home',
    id: 1,
    path: '/',
    icon: <HomeOutlinedIcon />,
    activeIcon: <HomeIcon />,
    badge: false,
  },
  {
    title: 'Friends',
    id: 3,
    path: '/friends',
    icon: <PeopleOutlineIcon />,
    activeIcon: <PeopleIcon />,
    badge: false,
  },
  {
    title: 'Notifications',
    id: 4,
    path: '/notifications',
    icon: <NotificationsNoneIcon />,
    activeIcon: <NotificationsIcon />,
    badge: true,
  },
  {
    title: 'Post',
    id: 2,
    path: '#',
    icon: <AddCommentOutlinedIcon />,
    activeIcon: <HomeIcon />,
    badge: false,
  },
];

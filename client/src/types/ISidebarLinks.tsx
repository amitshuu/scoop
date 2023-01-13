import { SvgIconComponent } from '@mui/icons-material';

export type ISidebarLinks = {
  id: number;
  title: string;
  path: string;
  icon: any;
  activeIcon: any;
  borderBottom: boolean;
  badge: boolean;
};

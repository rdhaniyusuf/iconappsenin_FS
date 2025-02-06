import { Home, Activity, BarChart, Calendar, Settings, HelpCircle, Users, MonitorCog } from 'lucide-react';

const menuItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Activity", icon: Activity, href: "/activity" },
  { name: "Analytics", icon: BarChart, href: "/analytic" },
  { name: "Absense", icon: Calendar, href: "/absense" },
  { name: "Leaves", icon: Calendar, href: "/leave" },
  { name: "Schedules", icon: Calendar, href: "/schedule" },
  { name: "System", icon: MonitorCog, href: "/system" },
  { name: "Team Settings", icon: Users, href: "/team-setting" },
  { name: "Settings", icon: Settings, href: "/settings" },
  { name: "Help & Feedback", icon: HelpCircle, href: "/help" },
];

export { menuItems };

type Role = "admin" | "user" | "manager";

export const rolesConfig = {
    admin: {
      dashboardComponent: "AdminDashboard",
      permissions: ["view_system_metrics", "manage_users"],
    },
    user: {
      dashboardComponent: "UserDashboard",
      permissions: ["view_personal_metrics", "manage_tasks"],
    },
    manager: {
      dashboardComponent: "ManagerDashboard",
      permissions: ["view_team_metrics", "assign_tasks"],
    },
  };
  
  // Utility to get dashboard component for a role

export const getDashboardComponent = (role: string): string => {
  return rolesConfig[role as Role]?.dashboardComponent || "NotFound";
};

// Utility to check if a role has a specific permission
export const hasPermission = (role: string, permission: string): boolean => {
  return rolesConfig[role as Role]?.permissions.includes(permission) || false;
};
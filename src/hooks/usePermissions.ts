import { useAppSelector } from "./useRedux";
import { hasPermission } from "../config/roles";

export const usePermissions = (permission: string): boolean => {
  const userRole = useAppSelector((state) => state.auth.user?.role);
  return hasPermission(userRole || "", permission);
};

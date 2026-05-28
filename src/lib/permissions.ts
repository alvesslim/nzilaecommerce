import { ROLE_PERMISSIONS } from '@/constants/roles';
import { UserRole } from '@/types/user';

export function hasPermission(role: UserRole, permission: string): boolean {
  const perms = ROLE_PERMISSIONS[role] as readonly string[];
  return perms?.includes(permission) ?? false;
}

export function isAdmin(role: UserRole): boolean {
  return role === 'admin';
}

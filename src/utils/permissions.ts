import { EnumPermission } from "../types/index";

const permissionHierarchy = [
  EnumPermission.GUEST,
  EnumPermission.USER,
  EnumPermission.ADMIN,
];

/**
 * Verifica se a permissão do usuário é suficiente para acessar o recurso.
 * @param userPermission A permissão atual do usuário (ou null se não logado)
 * @param requiredPermission A permissão exigida para acessar o recurso
 * @returns true se o usuário pode acessar, false se não
 */
export default function hasPermission(
  userPermission: EnumPermission | null,
  requiredPermission: EnumPermission
): boolean {
  // Se o usuário não estiver logado, tratamos como GUEST (Pode repensar no futuro)
  const effectivePermission = userPermission ?? EnumPermission.GUEST;

  const userLevel = permissionHierarchy.indexOf(effectivePermission);
  const requiredLevel = permissionHierarchy.indexOf(requiredPermission);

  return userLevel >= requiredLevel;
}

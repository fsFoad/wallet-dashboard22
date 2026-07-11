export type MenuItemType = 'group' | 'collapsable' | 'item';

export interface MenuItem {
  id: string;
  menuId: number;
  title: string;
  translateKey: string;
  icon: string | null;
  url: string | null;
  type: MenuItemType;
  parentId: number;
  children: MenuItem[];
}

export interface MenuApiResult {
  reason: string;
  fullErrorDesc: string;
  errorDesc: string;
  errorCode: number;
  type: number;
  layer: number;
  errorParams: unknown;
}

export interface MenuItemDto {
  children: MenuItemDto[];
  icon: string | null;
  menuId: number;
  id: string;
  title: string;
  type: 'group' | 'collapsable' | 'item';
  parentId: number;
  translate: string;
  url: string | null;
}

export interface MenuApiResponse {
  message: {
    result: MenuApiResult;
    data: {
      outParam: unknown;
      resultSet: {
        output: MenuItemDto[];
      };
    };
  };
}

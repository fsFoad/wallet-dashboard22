import { Injectable } from '@angular/core';

import { MenuItem } from '../../domain/models/menu-item.model';
import { MenuApiResponse, MenuItemDto } from '../dto/menu.dto';

@Injectable({ providedIn: 'root' })
export class MenuMapper {
  extractMenuItems(response: MenuApiResponse): MenuItem[] {
    const output = response?.message?.data?.resultSet?.output ?? [];
    return output.map((item) => this.toMenuItem(item));
  }

  private toMenuItem(dto: MenuItemDto): MenuItem {
    return {
      id: dto.id,
      menuId: dto.menuId,
      title: dto.title,
      translateKey: dto.translate,
      icon: dto.icon,
      url: dto.url,
      type: dto.type,
      parentId: dto.parentId,
      children: (dto.children ?? []).map((child) => this.toMenuItem(child)),
    };
  }
}

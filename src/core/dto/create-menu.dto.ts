import { IsString, IsInt, IsJSON } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateMenuDto {
  readonly name: string;								// 菜单名称
  readonly slug: string;								// 标识串
  readonly group: boolean;              // 是否是分组
  readonly link: string;								// 菜单链接
  readonly order: number;								// 顺序
  readonly externalLink: string;        // 扩展链接
  readonly blank: boolean;              // 窗口打开方式
  readonly icon: string;								// 图标
  readonly badge: string;								//
  readonly badgeDot: string;            //
  readonly badgeStatus: string;         //
  readonly enable: boolean;							// 隐藏
  readonly expanded: boolean;
  readonly acl: string;                 // 访问控制
  readonly paths: any[];								// 菜单路径
  readonly parent: string;						  // 父级菜单
  readonly permissions?: any[];
  readonly isMenu: boolean;							// 是否是菜单
}

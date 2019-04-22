import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { MongooseService, ResultList, TreeNode } from "nestx-common";
import { MenuModel, User, GroupModel } from "./../interfaces";
import { MenuRes } from "./../dto";
import { ObjectID } from "typeorm";

@Injectable()
export class MenusService extends MongooseService<MenuModel> {
  defaultQueryFields = [
    "name",
    "slug",
    "group",
    "link",
    "externalLink",
    "icon",
    "badge",
    "enable",
    "parent",
    "isMenu"
  ];

  constructor(
    @InjectModel("Menu") protected readonly model: Model<MenuModel>,
    @InjectModel("Group") protected readonly groupModel: Model<GroupModel>
  ) {
    super(model);
  }

  async searchMenuTree(
    keyword?: string,
    value?: string,
    limit: number = 10
  ): Promise<TreeNode[]> {
    return super.searchTree(this.model, keyword, value, "", limit);
  }

  async getAllPermissionTags() {
    const result =
      (await this.model
        .find({ isMenu: false })
        .select({
          name: 1,
          slug: 1,
          link: 1
        })
        .exec()) || [];
    return result.map(r => {
      return { id: r._id, name: r.name, desc: r.link };
    });
  }

  async querySearch(
    isMenu: boolean,
    keyword?: string,
    page: number = 1,
    size: number = 10,
    sort?: string
  ): Promise<ResultList<MenuModel>> {
    const populate = [
      {
        path: "permissions",
        select: "name"
      }
    ];

    return super.query(
      page,
      size,
      { isMenu },
      {
        keyword,
        field: "name"
      },
      this.defaultQueryFields,
      sort,
      populate
    );
  }

  async getAuthenticatedMenus(currentUser: User): Promise<MenuRes[]> {
    if (!currentUser) {
      Promise.reject("user is not authenticated");
    }

    const fields = this.getFields(this.defaultQueryFields);

    if (!currentUser.isAdmin) {
      const user = await this.model.findById(currentUser.id, "groups").exec(); // TODO
      const roles = (user.toObject() as User).roles || [];
      const roleDocs =
        (await this.groupModel
          .find(
            {
              _id: { $in: roles }
            },
            "permissions"
          )
          .exec()) || [];
      const permissions: string[] = [];
      roleDocs.forEach((g: any) => {
        permissions.push(...g.permissions);
      });
      const menus = await this.model
        .find({
          _id: {
            $in: permissions
          },
          isMenu: true
        })
        .select(fields);
      return menus as any;
    } else {
      const menus = (await this.model
        .find({
          isMenu: true
        })
        .select(fields)).map(item => {
        return item as MenuRes; // TODO;
      });
      return menus;
    }
  }

  async getMenuById(id: string | number | ObjectID): Promise<MenuRes> {
    const res = await this.model
      .findById(id)
      .populate({
        path: "permissions",
        select: "name"
      })
      .exec();
    return res as MenuRes; // TODO;
  }
}

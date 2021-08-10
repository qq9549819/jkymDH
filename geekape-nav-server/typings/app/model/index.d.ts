// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCategory from '../../../app/model/category';
import ExportNav from '../../../app/model/nav';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Category: ReturnType<typeof ExportCategory>;
    Nav: ReturnType<typeof ExportNav>;
    User: ReturnType<typeof ExportUser>;
  }
}

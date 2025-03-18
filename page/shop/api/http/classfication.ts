import { ReqAPI } from '../questAxios';
import { HomeProps, navTitleProps } from './type';

const c = new ReqAPI('');

export class api_classfication {
  // 获取分类导航
  static getClassMenu(params: any) {
    return c.get<HomeProps>('PRODUCTTK/category/v1/findAllShows?type=class', params);
  }
}

import { AndeMenuItemType } from "#/system";
import { isUrl } from "@/utils/is";

// 生成首页路由
export function generateIndexRouter(a_AndeMenuItemList: AndeMenuItemType[]) {
  let indexRouter: AndeMenuItemType[] = [
    {
      path: "/dashboard",
      name: "dashboard",

      //component: () => import('@/components/layouts/BasicLayout'),
      meta: {
        title: "首页",
      },
      redirect: "/dashboard/analysis",
      children: [...generateChildRouters(a_AndeMenuItemList)],
    },

    // {
    //   path: '*',
    //   redirect: '/404',
    //   hidden: true,
    //   meta:{}
    // },
    {
      path: '/:pathMatch(.*)*',
      redirect: "/404",
      meta: {
        title: "404",
      },
      hidden: true,
    },
  ];
  return indexRouter;
}

// 生成嵌套路由（子路由）

function generateChildRouters(a_AndeMenuItemList: AndeMenuItemType[]) {
  const routers = [];
  const dynamicViewsModules = import.meta.glob("/src/**/*.{vue,tsx}");
  for (let item of a_AndeMenuItemList) {
    let component = "";
    if (item.component.indexOf("layout") >= 0) {
      component = "" + item.component;
    } else {
      component = "views/" + item.component;
    }

    // eslint-disable-next-line
    let URL = (item.meta.url || "").replace(/{{([^}}]+)?}}/g, (s1, s2) =>
      eval(s2)
    ); // URL支持{{ window.xxx }}占位符变量
    if (isUrl(URL)) {
      item.meta.url = URL;
    }

    let componentPath;
    componentPath = dynamicViewsModules["/src/" + component + ".vue"];

    let compStr = ["../../views/" + component + ".vue"];

    let menu: AndeMenuItemType = {
      path: item.path,
      name: item.name,
      redirect: item.redirect,
      component: componentPath,
      //component: resolve => require(['@/' + component+'.vue'], resolve),
      hidden: item.hidden,
      //component:()=> import(`@/views/${item.component}.vue`),
      meta: {
        title: item.meta?.title,
        icon: item.meta?.icon,
        url: item.meta?.url,
        permissionList: item.meta?.permissionList,
        keepAlive: item.meta?.keepAlive,
        internalOrExternal: item.meta?.internalOrExternal,
        componentName: item.meta?.componentName,
      },
    };
    if (item.alwaysShow) {
      menu.alwaysShow = true;
      menu.redirect = menu.path;
    }
    if (item.children && item.children.length > 0) {
      menu.children = [...generateChildRouters(item.children)];
    }
    //--update-begin----author:zw---date:20190320------for:根据后台菜单配置，判断是否路由菜单字段，动态选择是否生成路由（为了支持参数URL菜单）------
    //判断是否生成路由
    if (item.route && item.route === "0") {
    } else {
      routers.push(menu);
    }
    //--update-end----author:zw---date:20190320------for:根据后台菜单配置，判断是否路由菜单字段，动态选择是否生成路由（为了支持参数URL菜单）------
  }
  return routers;
}

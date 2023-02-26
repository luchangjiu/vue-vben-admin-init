import { LAYOUT } from '../../constant'
import { AppRouteModule } from '../../types'

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/index',
  meta: {
    title: '系统管理',
    icon: 'ion:options',
  },
  children: [
    {
      path: 'dept',
      name: 'Dept',
      component: () => import('/@/views/sys/dept/index.vue'),
      meta: {
        title: '部门管理',
      },
    },
    {
      path: 'menu',
      name: 'Menu',
      component: () => import('/@/views/sys/menu/index.vue'),
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'role',
      name: 'Role',
      component: () => import('/@/views/sys/role/index.vue'),
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'user',
      name: 'User',
      component: () => import('/@/views/sys/user/index.vue'),
      meta: {
        title: '用户管理',
        icon: 'ion:person',
      },
    },
  ],
}

export default system

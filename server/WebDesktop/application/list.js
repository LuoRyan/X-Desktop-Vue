/**
 * Created by OXOYO on 2017/10/1.
 */

export default {
  data: {
    status: 200,
    msg: '获取应用列表成功！',
    data: {
      count: 1,
      list: [
        {
          id: 1,
          user_id: 1,
          app_id: 1,
          app_name: 'AccountManagement',
          status: 1,
          create_time: '1506861124558',
          update_time: '1506861124558',
          appDetail: {
            id: 1,
            name: 'AccountManagement',
            title: '账号管理',
            description: '账号管理应用描述信息',
            type: 0,
            user_type: 0,
            status: 1,
            create_time: '1506861124558',
            update_time: '1506861124558',
            config: '{"app":{"icon":"./static/desktopIcon/AccountManagement.png","x":0,"y":0,"index":""},"modal":{"size":"middle","isShow":false,"zIndex":600,"enableResize":["min","max","reset","close"]},"taskBar":{"isPinned":false}}'
          },
          config: '{"app":{"id":"","name":"AccountManagement","icon":"./static/desktopIcon/AccountManagement.png","title":"账号管理","x":0,"y":0,"index":""},"modal":{"size":"middle","isShow":false,"zIndex":600,"enableResize":["min","max","reset","close"],"style":{"width":"1000px"}},"taskBar":{"isPinned":false}}'
          /*
          config: {
            app: {
              id: '',
              name: 'AccountManagement',
              icon: './static/desktopIcon/AccountManagement.png',
              title: '账号管理',
              x: 0,
              y: 0,
              index: ''
            },
            modal: {
              size: 'middle',
              isShow: false,
              zIndex: 600,
              enableResize: [
                'min',
                'max',
                'reset',
                'close'
              ],
              style: {
                'width': '1000px'
              }
            },
            taskBar: {
              isPinned: false
            }
          }
          */
        }
      ]
    }
  }
}

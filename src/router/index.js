import Vue from 'vue'
import Router from 'vue-router';
import image_detail from "../pages/image_detail";
import container_detail from "../pages/container_detail";

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const router =  new Router({
	mode: 'history',//改成history模式
	routes: [
		{
			path: '/',
			redirect:'/image',
		},
    {
      path: '/index',
      redirect:'/image',
    },
    {
      path:'/image',
      name:'镜像管理',
      component: image => require(['@/pages/image.vue'], image),
      meta:{
        title: '镜像管理',
      }
    },
    {
      path:'/image_detail',
      name:'镜像详情',
      component: image_detail => require(['@/pages/image_detail.vue'], image_detail),
      meta:{
        title: '镜像详情',
      }
    },
    {
      path:'/container',
      name:'容器管理',
      component: container => require(['@/pages/container.vue'], container),
      meta:{
        title: '容器管理',
      }
    },
    {
      path:'/container_detail',
      name:'容器详情',
      component: container_detail => require(['@/pages/container_detail.vue'], container_detail),
      meta:{
        title: '容器详情',
      }
    },
    {
      path:'/service',
      name:'应用部署',
      component: service => require(['@/pages/service.vue'], service),
      meta:{
        title: '应用部署',
      }
    },
    {
      path:'/service_detail',
      name:'应用详情',
      component: service_detail => require(['@/pages/service_detail.vue'], service_detail),
      meta:{
        title: '应用详情',
      }
    },
    {
      path:'/s_homepage',
      name:'student_homepage',
      component: s_homepage => require(['@/pages/s_homepage.vue'], s_homepage),
      meta:{
        title: 'student_homepage',
      }
    },
    {
      path:'/single_game_view',
      name:'game_detail',
      component: single_game_view => require(['@/pages/single_game_view.vue'], single_game_view),
      meta:{
        title: 'game_detail',
      }
    },
    {
      path:'/t_homepage',
      name:'teacher_homepage',
      component: t_homepage => require(['@/pages/t_homepage.vue'], t_homepage),
      meta:{
        title: 'teacher_homepage',
      }
    },
    {
      path:'/try',
      name:'try',
      component: t_homepage => require(['@/pages/try.vue'], t_homepage),
      meta:{
        title: 'try',
      }
    },
		{
			path: '*',
			redirect:'/index',
		},{
      path:'/t_create_game',
      name:'create_game',
      component: t_create_game => require(['@/pages/t_create_game.vue'], t_create_game),
      meta:{
        title: 'create_game',
      }
    },{
      path:'/t_manage_game',
      name:'manage_game',
      component: t_manage_game => require(['@/pages/t_manage_game.vue'], t_manage_game),
      meta:{
        title: 'manage_game',
      }
    },
  ],
});

export default router;

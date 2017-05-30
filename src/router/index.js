import Vue from 'vue';
import Router from 'vue-router';
import article from '../components/article/article';
import other from '../components/other/other';
import contact from '../components/contact/contact';
import login from '../components/login/login';
import details from '../components/details/details';
import edit from '../components/edit/edit';
Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/article',
      component: article
    },
    {
      path: '/article/:id',
      component: details
    },
    {
      path: '/other',
      component: other
    },
    {
      path: '/contact',
      component: contact
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/mySuperEdition',
      component: edit
    }
  ]
});

router.push('/article');
export default router;

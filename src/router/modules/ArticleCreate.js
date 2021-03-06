import Layout from '../../layout'
export default {
  path: '/article',
  component: Layout,
  name: 'articleCreate',
  meta: {
    title: '文章',
    icon: 'personnel'
  },
  children: [
    {
      path: '/article/create',
      component: () => import('../../views/article-create'),
      meta: {
        title: '文章创建',
        icon: 'article-create'
      }
    }
  ]
}

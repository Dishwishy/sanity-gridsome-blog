export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61e70e79f947c7094ccadba9',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-9hb5kfoj',
                  apiId: '82d00d59-90b2-4d4e-93d3-84695df17349'
                },
                {
                  buildHookId: '61e70e795445e40b5c9b5672',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-9ifgmpp4',
                  apiId: '4b5d22f5-1d11-40ec-b9f4-1f742a5943e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Dishwishy/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-9ifgmpp4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

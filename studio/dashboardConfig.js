export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '617958e69349f41e494dff27',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-nb585xq7',
                  apiId: '44fc180e-c2f1-4192-bc5d-6318a702bca9'
                },
                {
                  buildHookId: '617958e6dd9fb01a85c8391b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1yeaez7h',
                  apiId: 'c422b0a5-464f-49f3-9323-33b6dbaa840b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marvinrosa/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1yeaez7h.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

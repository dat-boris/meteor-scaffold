Package.describe({
  name: 'sketchytechky:app',
  version: '0.0.1',
  summary: 'A simple way to create your own push notification',
  git: 'https://github.com/sketchytechky/app',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'react',
    'kadira:flow-router-ssr',
    'kadira:react-layout',
    'ecmascript',
    ]);
  api.addFiles([
    'app.js',
    'router.js',
    'layouts/home.jsx',
    //'app.html'
    ], ['client','server']
    );

  // XXX: This is only exported for the sake of testing :-(
  api.export("HomeLayout", "client");
});

Package.onTest(function(api) {
  api.use(['react', 
    'sanjo:jasmine@0.20.2',
    'meteorhacks:fast-render@2.10.0',  // workaround bug in https://github.com/kadirahq/fast-render/issues/132
    'sketchytechky:app'
    ]);
  
  api.addFiles('tests/client/component-spec.js', ['client']);
});

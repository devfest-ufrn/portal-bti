// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  localhost: 'https://portal-bti-giordanorn.c9users.io:8080',
  api_sinfo_credencials: {
  	client_id: 'portal-bti-id',
  	client_secret: 'segredo',
  	key: '9fyaWctSN3aCVDZBjccpxIz79OXvjNJLgsbJVcib',
  	url: 'https://apitestes.info.ufrn.br',
  	version: 'v0.1'
  }
};

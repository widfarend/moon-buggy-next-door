// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  VEHICLE_API_BASE_URL: 'http://cndlunarlocator.herokuapp.com/vehicles/',
  COMMAND_CENTRE_LAT: 0.681400,
  COMMAND_CENTRE_LONG: 23.460550,
  MOON_RADIUS: 1737
};

/** When true, the public site shows a maintenance screen on the home page. */
export function isMaintenanceMode() {
  return process.env.MAINTENANCE_MODE === 'true';
}

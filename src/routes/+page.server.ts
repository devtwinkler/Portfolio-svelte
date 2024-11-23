/**
 * Set to default URL to /home
 */

import { redirect } from "@sveltejs/kit";

export const load = () => {
  throw redirect(307, "/home");
};

//imports
import Admin from "./Admin";
import Application from "./Applications";
import Catalogues from "./Catalogues";
import Institutions from "./Institutions";
import Pages from "./Pages";
import Posts from "./Posts";

// exports
export const adminService = new Admin();
export const applicationService = new Application();
export const cataloguesService = new Catalogues();
export const institutionsService = new Institutions();
export const pagesService = new Pages();
export const postsService = new Posts();

/**
 *
 * Asynchronously loads the component for Projects
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

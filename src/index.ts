// https://github.com/TobyG74/tiktok-api-dl/tree/master/src

import coraline from 'coraline';
import { testTiktok } from './test/test-tiktok.js';

export { default as insta } from './insta.js';
export { default as tiktok } from './tiktok/tiktok.js';

coraline.createScriptExec(testTiktok);

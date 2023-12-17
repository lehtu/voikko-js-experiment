// I needed to rename the file from .js to .cjs to make it work with latest node
import Libvoikko from './js-libvoikko.cjs';

const voikko = await new Libvoikko();
const v = await voikko.init('fi');
const f = await v.analyze('koira');

console.log(f);
import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';

// const numberCollection = new NumberCollection([90000, 3, -5, 0]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data);

const characterCollection = new CharacterCollection('Xaayb');
const sorter = new Sorter(characterCollection);
sorter.sort();
console.log(characterCollection.data);

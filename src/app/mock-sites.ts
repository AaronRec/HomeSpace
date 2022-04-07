import { Site } from './site';
import Config  from '../assets/config.json';

var array = JSON.parse(JSON.stringify(Config.Sites));
var sites = [];
for (var n in array){
  sites.push(array[n])
}

export var SITES: Site[] = sites;

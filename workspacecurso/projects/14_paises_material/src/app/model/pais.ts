import { Flag } from "./flag";

export class Pais{
  name:string
  region:string
  population:number
  flags:Flag
  constructor(name:string,region:string,population:number,flags:Flag){
    this.name=name;
    this.region=region;
    this.population=population;
    this.flags=flags;
  }
}

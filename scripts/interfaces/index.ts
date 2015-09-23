
 
 module PT {
  export interface ApftEvents {
    run ?: number;
    pushups ?: number;
    situps ?: number;
    pullups ?: number;
    age: number;
    gender: number;
    branch: string;
    pushupsCsv?: any;
    situpsCsv?: any;
    twomilerunCsv?: any;
    scoreTotal?: number
  }
}
export default PT
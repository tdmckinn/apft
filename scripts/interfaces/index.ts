
 
 module PT {
  export interface ApftEvents {
    run ?: number;
    pushups ?: number;
    situps ?: number;
    pullups ?: number;
    age: number;
    gender: number;
    branch: string;
    pushupsCsv?: string;
    situpsCsv?: string;
    twomilerunCsv?: string;
    scoreTotal?: number
  }
}
export default PT
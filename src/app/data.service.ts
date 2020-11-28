import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
  word: string = "kishore";
  onPrint() {
    return "word";
  }
}

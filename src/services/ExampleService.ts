import { Service } from "typedi";
import { ExampleInjectedService } from "./ExampleInjectedService";

@Service()
export class ExampleService {
    constructor(public injectedService: ExampleInjectedService) { }


}
import { Service } from "typedi";

@Service()
export class ExampleInjectedService {
    printMessage() {
        console.log(`I am alive`);
    }
}

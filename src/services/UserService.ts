import { Service } from "typedi";
import { LoggerService } from "./LoggerService";

@Service()
export class UserService {
    constructor(private loggerService: LoggerService) { }

    getUser(id: number) {
        this.loggerService.log(`getting user with id ${id}`)
    }
}
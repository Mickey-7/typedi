import { Service } from "typedi";

@Service()
export class Config {
    readonly API_BASE_URL: string = `https://api.example.com`;
    readonly MAX_LOGIN_ATTEMPTS: number = 5
}
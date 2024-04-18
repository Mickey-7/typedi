import 'reflect-metadata'
import Container, { Token } from "typedi";
import { LoggerService } from "./services/LoggerService";
import { UserService } from "./services/UserService";
import { Config } from './constants/Config';
import { ExampleService } from './services/ExampleService';
import { ExampleInjectedService } from './services/ExampleInjectedService';
import { myToken } from "./constants/Token";
import { ExampleClass } from './services/ExampleClass';
import { InjectedClass } from './services/InjectedClass';

Container.set(LoggerService, new LoggerService())
Container.set(UserService, new UserService(new LoggerService))
const userService = Container.get(UserService);
userService.getUser(123)//getting user with id 123


Container.set(Config, new Config())
const config = Container.get(Config);
console.log(config.API_BASE_URL);//https://api.example.com
console.log(config.MAX_LOGIN_ATTEMPTS);//5

// Register services with TypeDI container
Container.set(ExampleInjectedService, new ExampleInjectedService());
Container.set(ExampleService, new ExampleService(Container.get(ExampleInjectedService)));
const serviceInstance = Container.get(ExampleService)
serviceInstance.injectedService.printMessage()//I am alive


const tokenValue = Container.get(myToken)
const configVal = Container.get('my-config-key')
const defaultPagination = Container.get('default-pagination')
console.log(tokenValue);//my-secret-value
console.log(configVal);//value-for-config-key
console.log(defaultPagination);//30

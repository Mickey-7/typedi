"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typedi_1 = __importDefault(require("typedi"));
const LoggerService_1 = require("./services/LoggerService");
const UserService_1 = require("./services/UserService");
const Config_1 = require("./constants/Config");
const ExampleService_1 = require("./services/ExampleService");
const ExampleInjectedService_1 = require("./services/ExampleInjectedService");
const Token_1 = require("./constants/Token");
const ExampleClass_1 = require("./services/ExampleClass");
const InjectedClass_1 = require("./services/InjectedClass");
typedi_1.default.set(LoggerService_1.LoggerService, new LoggerService_1.LoggerService());
typedi_1.default.set(UserService_1.UserService, new UserService_1.UserService(new LoggerService_1.LoggerService));
const userService = typedi_1.default.get(UserService_1.UserService);
userService.getUser(123); //getting user with id 123
typedi_1.default.set(Config_1.Config, new Config_1.Config());
const config = typedi_1.default.get(Config_1.Config);
console.log(config.API_BASE_URL); //https://api.example.com
console.log(config.MAX_LOGIN_ATTEMPTS); //5
// Register services with TypeDI container
typedi_1.default.set(ExampleInjectedService_1.ExampleInjectedService, new ExampleInjectedService_1.ExampleInjectedService());
typedi_1.default.set(ExampleService_1.ExampleService, new ExampleService_1.ExampleService(typedi_1.default.get(ExampleInjectedService_1.ExampleInjectedService)));
const serviceInstance = typedi_1.default.get(ExampleService_1.ExampleService);
serviceInstance.injectedService.printMessage(); //I am alive
const tokenValue = typedi_1.default.get(Token_1.myToken);
const configVal = typedi_1.default.get('my-config-key');
const defaultPagination = typedi_1.default.get('default-pagination');
console.log(tokenValue); //my-secret-value
console.log(configVal); //value-for-config-key
console.log(defaultPagination); //30
const instance = typedi_1.default.get(ExampleClass_1.ExampleClass);
console.log(instance.injectedClass instanceof InjectedClass_1.InjectedClass);

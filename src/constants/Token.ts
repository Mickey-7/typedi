import Container, { Token } from "typedi";

export const myToken = new Token('SECRET_VALUE_KEY');
Container.set(myToken, 'my-secret-value')
Container.set('my-config-key', 'value-for-config-key')
Container.set('default-pagination', 30)
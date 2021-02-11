import "reflect-metadata";
import { ReflectiveInjector, Injectable, Injector } from "injection-js";
import { providers } from "./providers";

export class Http {}

@Injectable()
export class Service {
  constructor(private http: Http) {}
}

@Injectable()
export class Service2 {
  constructor(private injector: Injector) {}

  getService(): void {
    console.log(this.injector.get(Service) instanceof Service);
  }

  createChildInjector(): void {
    const childInjector = ReflectiveInjector.resolveAndCreate(
      [Service],
      this.injector
    );
  }
}

const injector = ReflectiveInjector.resolveAndCreate(providers);

console.log(injector.get(Service) instanceof Service);

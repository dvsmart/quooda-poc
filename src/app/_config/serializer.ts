export interface ISerializer {
  fromJson(json: any): any;
  toJson(resource: any): any;
}

export class SerializeHelper<T extends any> implements ISerializer {
  fromJson(json: any): T {
    throw new Error("Method not implemented.");
  }
  toJson(resource: any): T {
    throw new Error("Method not implemented.");
  }
}

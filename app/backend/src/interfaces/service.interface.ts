interface IService<T> {
  findAll(): Promise<T[]>;
  findByID(id: string): Promise<T | null>;
  create(): Promise<T | null>;
  update(): Promise<T | null>;
  delete(): Promise<T | null>; 
}

export default IService;

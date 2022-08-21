// написать декоратор, который замеряет время выполнения метода

export function Perfomance(): MethodDecorator {
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {

  };
}
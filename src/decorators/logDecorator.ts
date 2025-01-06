export function LogAdd(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      console.log(`[${new Date().toLocaleString()}] A(z) ${propertyKey} metódus meghívódott.`);
      return originalMethod.apply(this, args);
    };
  
    return descriptor;
  }
   
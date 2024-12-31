/**
 * @interface MapperType
 * @template S
 * @template T
 * @description interface that defines the methods that a mapper service must implement
 */

export default interface MapperType<S, T> {
  transform(entity: S): T;
  transform(array: S[]): T[];
  transform(entityOrArray: S | S[]): T | T[];
}

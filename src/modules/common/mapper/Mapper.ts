import { injectable } from 'inversify';
import type MapperType from './type/MapperType';

/**
 * @abstract @class Mapper
 * @classdesc Abstract class that defines the methods that a mapper service must implement
 * @implements {MapperType}
 * @template S
 * @template T
 * @description Abstract class that defines the methods that a mapper service must implement
 */

@injectable()
export default abstract class Mapper<S, T> implements MapperType<S, T> {
  protected abstract map(entity: S): T;

  transform(entity: S): T;
  transform(array: S[]): T[];
  transform(entityOrArray: S | S[]): T | T[] {
    return Array.isArray(entityOrArray) ? entityOrArray.map((item: S) => this.map(item)) : this.map(entityOrArray);
  }
}

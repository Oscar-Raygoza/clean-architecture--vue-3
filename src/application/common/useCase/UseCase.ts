/**
 * @interface UseCase
 * @template P, T
 * @description Contract to define application use cases
 */
export default interface UseCase<P, T> {
  /**
   * @function execute
   * @param {P} port
   * @return {Promise<T>}
   * @description executes Class responsibility
   */
  run(port?: P): Promise<T> | T
}

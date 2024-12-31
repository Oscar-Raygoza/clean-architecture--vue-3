/**
 * @interface Adapter
 * @template P, T
 * @description Contract to define interaction between ui and use cases or domain layers
 */
export default interface Adapter<P, T> {
  /**
   * @function execute
   * @param {P} port
   * @return {Promise<T>}
   * @description executes Class responsibility
   */
  run(port: P): Promise<T>
}

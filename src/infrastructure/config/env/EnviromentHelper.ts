/**
 * @author Oscar Eduardo Raygoza <oscar.eduardo.raygoza@gmail.com>
 * @version v0.1.0
 * @description Environment helper to get environment variables
 * @filename ENVIROMENTHELPER.TS
 */

export default class EnvironmentHelper {
  public static readonly BASE_TCG_API_URL: string = import.meta.env.VITE_BASE_TCG_API_URL

  public static readonly TGC_PUBLIC_API_KEY: string = import.meta.env.VITE_POKEMONTCG_API_KEY
}

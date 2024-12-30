export default class EnvironmentHelper {
  public static readonly BASE_API: string = import.meta.env.VITE_BASE_API

  public static readonly BASE_URL_POKEAPI: string = import.meta.env.VITE_POKEAPI_BASE_URL

  public static readonly TGC_PUBLIC_API_KEY: string = import.meta.env.VITE_POKEMONTCG_API_KEY
}

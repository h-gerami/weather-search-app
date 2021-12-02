export interface WeatherType {
  location: LocationType;
  current: CurrentType;
  forecast: ForecastType;
}
export interface LocationType {
  name: string;
  region: string;
  lat: number;
  lon: number;
  localtime_epoch: number;
  country: string;
}
export interface CurrentType {
  temp_c: number;
  condition: ConditionType;
  last_updated_epoch: number;
  wind_kph: number;
}
export interface ConditionType {
  text: string;
  icon: string;
}
export interface ForecastType {
  forecastday: ForecastdayType[];
}
export interface ForecastdayType {
  date_epoch: number;
  day: DayType;
  astro: AstroType;
}
export interface DayType {
  maxtemp_c: number;
  mintemp_c: number;
  avgtemp_c: number;
  condition: ConditionType;
}
export interface AstroType {
  sunrise: string;
  sunset: string;
  moonset: string;
}

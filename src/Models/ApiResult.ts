export interface ApiResult<T> {
  result?: T;
  isSuccess: boolean;
  ErrorMessage?: string;
  LimitationsReach?: boolean;
  TimeGenerated?: Date;
  Count: number;
}

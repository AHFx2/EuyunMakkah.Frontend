export class ClsResponse<T> {
  isSuccess!: boolean;
  message!: string;
  data!: T;
  errors!: any;
}

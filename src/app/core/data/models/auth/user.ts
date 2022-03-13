export class User {
  constructor(
    public _firstName: string,
    public _lastName: string,
    private _token: string
  ) {}

  get token() {
    return this._token;
  }

  get name() {
    return this._firstName + " " + this._lastName;
  }
}
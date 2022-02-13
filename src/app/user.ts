export class User {
  constructor(
    public name: string,
    public avatar: any,
    public bio: any,
    public location: string,
    public email: string,
    public followers: number,
    public following: number,
    public repos: any
  ) {}
}

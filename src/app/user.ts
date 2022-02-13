export class User {
  constructor(
    // public profile: UserProfile,
    public name: string,
    public location: string,
    public email: string,
    public followers: number,
    public following: number
  ) {}
}

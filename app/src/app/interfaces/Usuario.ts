export interface Usuario{
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string
    }
}
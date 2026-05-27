export type Coordinates = {
    lat: string;
    lng: string;
};

export type UserAddress = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Coordinates;
};

export type UserCompany = {
    name: string;
    catchPhrase: string;
    bs: string;
};

export type User = {
    id: string;
    name: string;
    username: string;
    email: `${string}@${string}.${string}`;
    address: UserAddress;
    phone: string;
    website: string;
    company: UserCompany;
};

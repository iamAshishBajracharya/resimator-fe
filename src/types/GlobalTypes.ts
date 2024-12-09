export interface SignupPayload {
    fullName: string;
    username: string;
    email: string;
    phoneNumber: string;
    gender: string;
    status: string;
    dob: string;
    role: string;
    country: string;
    state: string;
    city: string;
    postalCode: string;
    streetAddress: string;
    residentialArea: string;
    profileImage: any; // You can define a more specific type for the image file
    password: string;
  }
  
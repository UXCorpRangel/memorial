export interface User {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: AppMetadata;
  user_metadata: UserMetadata;
  identities: Identity[];
  created_at: string;
  updated_at: string;
  is_anonymous: boolean;
}

export interface AppMetadata {
  provider: string;
  providers: string[];
}

export interface UserMetadata {
  avatar_url: string;
  custom_claims: CustomClaims;
  email: string;
  email_verified: boolean;
  full_name: string;
  iss: string;
  name: string;
  nickname: string;
  phone_verified: boolean;
  picture: string;
  provider_id: string;
  slug: string;
  sub: string;
}

export interface CustomClaims {
  broadcaster_type: string;
  description: string;
  offline_image_url: string;
  type: string;
  view_count: number;
}

export interface Identity {
  identity_id: string;
  id: string;
  user_id: string;
  identity_data: IdentityData;
  provider: string;
  last_sign_in_at: string;
  created_at: string;
  updated_at: string;
  email: string;
}

export interface IdentityData {
  avatar_url: string;
  custom_claims: CustomClaims2;
  email: string;
  email_verified: boolean;
  full_name: string;
  iss: string;
  name: string;
  nickname: string;
  phone_verified: boolean;
  picture: string;
  provider_id: string;
  slug: string;
  sub: string;
}

export interface CustomClaims2 {
  broadcaster_type: string;
  description: string;
  offline_image_url: string;
  type: string;
  view_count: number;
}

async function getUser() {
  try {
    const response = await fetch("http://localhost:4321/api/user");
    const user = (await response.json()) as User;
    if (user) {
      return user;
    }
    return null;
  } catch (error) {
    return console.error("error: ", error);
  }
}

export { getUser };


export interface Speaker {
  name: string,
  socialMedia: SocialMediaIcon[],
  time?: string | number
}

export interface SocialMedia {
  label: string,
  link: string,
}


type SocialMediaIcon = SocialMedia & {
  icon: string;
}
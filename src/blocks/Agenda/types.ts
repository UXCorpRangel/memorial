export interface Speaker {
  name: string;
  session: string;
  socialMedia: SocialMediaIcon[];
  extraSocialMedia?: SocialMediaIcon[];
  time: string;
}

export interface SocialMedia {
  label: string;
  link: string;
}

type SocialMediaIcon = SocialMedia & {
  icon: string;
};

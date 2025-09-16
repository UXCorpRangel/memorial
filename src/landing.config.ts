export interface LandingConfig {
  autoDiscover: boolean;
  order: string[];
  overrides: Record<string, {
    enabled?: boolean;
    props?: Record<string, unknown>;
  }>;
}

const config: LandingConfig = {
  autoDiscover: true,
  order: [
    "Header",
    "Hero",
    "Countdown",
    "Banner",
    "Works",
    "Donations",
    "CardsGrid",
    "MessagesMarquee",
    "Footer"
  ],
  overrides: {
    Hero: {
      enabled: true,
      props: {
        title: "Memorial Landing Page"
      }
    }
  }
};

export default config;

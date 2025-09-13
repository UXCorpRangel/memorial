import landingConfig from '../landing.config.js';
import type { LandingConfig } from '../landing.config.js';

interface BlockMeta {
  slug: string;
  order?: number;
  enabled?: boolean;
  props?: Record<string, unknown>;
}

interface BlockModule {
  default: any; // Astro component
  meta: BlockMeta;
}

interface ResolvedSection {
  slug: string;
  Component: any;
  props?: Record<string, unknown>;
}

function getBlockModules(): Record<string, BlockModule> {
  return import.meta.glob('../blocks/**/index.ts', { eager: true });
}

export function getResolvedSections(): ResolvedSection[] {
  if (!landingConfig.autoDiscover) {
    return [];
  }

  const modules = getBlockModules();
  const sections: ResolvedSection[] = [];

  // Convert modules to sections
  for (const [path, module] of Object.entries(modules)) {
    const blockModule = module as BlockModule;
    if (!blockModule.default || !blockModule.meta) continue;

    const { slug } = blockModule.meta;
    const override = landingConfig.overrides[slug] || {};
    
    // Skip if disabled
    if (override.enabled === false || blockModule.meta.enabled === false) {
      continue;
    }

    sections.push({
      slug,
      Component: blockModule.default,
      props: { ...blockModule.meta.props, ...override.props }
    });
  }

  // Sort sections
  sections.sort((a, b) => {
    const orderA = landingConfig.order.indexOf(a.slug);
    const orderB = landingConfig.order.indexOf(b.slug);

    // If both are in config order, use that order
    if (orderA !== -1 && orderB !== -1) {
      return orderA - orderB;
    }

    // If only one is in config order, prioritize it
    if (orderA !== -1) return -1;
    if (orderB !== -1) return 1;

    // Fall back to alphabetical by slug
    return a.slug.localeCompare(b.slug);
  });

  return sections;
}

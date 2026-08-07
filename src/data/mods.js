import critfallIcon from '../assets/critfall-icon.png';

// A mod also needs an icon in src/assets and a URL entry in public/sitemap.xml;
// description[0] doubles as the home card summary.
const mods = [
  {
    slug: 'critfall',
    name: 'Critfall',
    icon: critfallIcon,
    tagline: 'Tabletop-style d20 combat for Minecraft.',
    status: 'Released',
    version: '0.2.0',
    mcVersion: '1.21.1',
    loaders: ['NeoForge', 'Fabric'],
    description: [
      "Critfall replaces Minecraft's combat math with the tabletop rules you already know from ttrpgs: attacks roll d20 + bonus against the target's Armor Class, a miss deals no damage, and damage itself is rolled from dice expressions like 2d6+3. Natural 20s crit; natural 1s fumble, with configurable consequences.",
      "It works out of the box in most modpacks, mechanic heavy bosses are not tested — mobs and weapons Critfall doesn't recognize get derived stats from their attributes — and every mechanic can be toggled off individually by the server or pack.",
    ],
    features: [
      {
        title: 'd20 attack rolls',
        text: "Every hit rolls d20 + bonus against the target's Armor Class. Miss = no damage.",
      },
      {
        title: 'Dice driven damage',
        text: 'Damage comes from dice expressions (2d6+3) instead of flat values. Nat 20 crits, nat 1 fumbles — consequences configurable.',
      },
      {
        title: 'Works in most packs',
        text: 'Unknown mobs and weapons get derived stats from their attributes — no per-mod setup needed to start playing.',
      },
      {
        title: 'Pack development tooling',
        text: '/critfall generate dumps a complete, editable datapack for every mob and weapon in your pack; report, inspect, and check show exactly which profile won.',
      },
      {
        title: 'Dry-run calibration',
        text: 'Calibrate rolls while vanilla damage still applies, then switch over. Three presets: Tempered, Classic, Lite.',
      },
      {
        title: 'Developer API',
        text: 'Java API with pre/post roll events, RollService, and a dice expression parser — plus optional KubeJS bindings.',
      },
    ],
    links: [
  { label: 'GitHub', href: 'https://github.com/modrollstudio/Critfall' },
  { label: 'Modrinth', href: 'https://modrinth.com/mod/critfall' },
  { label: 'CurseForge', href: 'https://www.curseforge.com/minecraft/mc-mods/critfall' },
],
  
];

export function getMod(slug) {
  return mods.find((mod) => mod.slug === slug);
}

export default mods;

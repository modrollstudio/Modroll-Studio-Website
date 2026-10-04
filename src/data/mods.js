import critfallIcon from '../assets/critfall-icon.png';
import initiativeIcon from '../assets/initiative-icon.png';
import checksIcon from '../assets/checks-icon.png';

// A mod also needs an icon in src/assets and a URL entry in public/sitemap.xml;
// description[0] doubles as the home card summary.
// Only status 'Released' shows the install links; any other status (e.g. 'In development')
// hides them. version, mcVersion, loaders, features, links, repo and requires are all optional.
// requires names another mod's slug plus the minimum version, shown on the mod page and home card.
const mods = [
  {
    slug: 'critfall',
    name: 'Critfall',
    icon: critfallIcon,
    tagline: 'Tabletop-style d20 combat for Minecraft.',
    status: 'Released',
    version: '0.2.6',
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
    repo: 'https://github.com/modrollstudio/Critfall',
    links: [
      { label: 'Modrinth', href: 'https://modrinth.com/mod/critfall' },
      { label: 'CurseForge', href: 'https://www.curseforge.com/minecraft/mc-mods/critfall' },
    ],
  },
  {
    slug: 'initiative',
    name: 'Critfall: Initiative',
    icon: initiativeIcon,
    tagline: 'Turn-based, initiative-driven combat for Minecraft.',
    status: 'Released',
    version: '0.1.1',
    mcVersion: '1.21.1',
    loaders: ['NeoForge', 'Fabric'],
    requires: { slug: 'critfall', version: '0.2.6' },
    description: [
      'Initiative turns Minecraft fights into tabletop encounters. The world runs in real time until combat starts, then everyone in the fight rolls initiative and takes structured turns in that order — move, attack, hide, shove or grapple — while the rest of the world carries on.',
      "It is built on Critfall's d20 engine: every attack roll, save, crit and fumble is still resolved by Critfall, and Initiative decides when and in what order those rolls happen. Critfall itself still works on its own without Initiative.",
    ],
    features: [
      {
        title: 'Combat starts with initiative',
        text: 'When a hostile mob — or a neutral one you provoked — engages, every player nearby joins the fight and rolls initiative to set the turn order.',
      },
      {
        title: 'Click-to-target action UI',
        text: 'Your turn shows a bar of the actions you can take. Pick one, click the target, and the roll plays out.',
      },
      {
        title: 'Hide, Shove and Grapple',
        text: 'More than just attacking: hide from mobs for advantage, shove enemies back, or grapple them in place until they escape.',
      },
      {
        title: 'Roll animation',
        text: 'Initiative, attack and contested rolls animate on screen with the roller’s name under the dice, so every hit and miss reads at a glance.',
      },
      {
        title: 'Multiplayer with shared rolls',
        text: 'Everyone in an encounter takes their own turn in one order and watches every roll it produces — the shared tabletop moment.',
      },
      {
        title: 'Configurable and extensible',
        text: 'Every mechanic can be tuned or switched off in config/initiative.json, and other mods can register new actions through the action API.',
      },
    ],
    repo: 'https://github.com/modrollstudio/Initiative',
    links: [
      // TODO: Modrinth URL unconfirmed (no project found at modrinth.com/mod/critfall-initiative)
      { label: 'Modrinth', href: 'https://modrinth.com/mod/critfall-initiative', todo: true },
      { label: 'CurseForge', href: 'https://www.curseforge.com/minecraft/mc-mods/critfall-initiative' },
    ],
  },
  {
    slug: 'checks',
    name: 'Critfall: Checks',
    icon: checksIcon,
    tagline: 'Ability scores, skills and saves for Minecraft.',
    status: 'In development',
    mcVersion: '1.21.1',
    loaders: ['NeoForge', 'Fabric'],
    requires: { slug: 'critfall', version: '0.2.8' },
    description: [
      'Checks adds the character sheet that Critfall leaves out: six ability scores, skills, saving throws and a proficiency bonus for every player and mob, with every die rolled through Critfall.',
      'New players build a character on first join — species, background and class, then their ability scores — and level from 1 to 20 as they play. Critfall and Initiative both work without it.',
    ],
    features: [
      {
        title: 'Ability scores, skills and saves',
        text: 'STR, DEX, CON, INT, WIS and CHA for every entity, the 18 standard skills, saving throws and passive scores. Mobs get sensible scores from their attributes.',
      },
      {
        title: 'Character creation',
        text: 'A first-join screen to set your scores with the standard array, point buy, or dice rolled through Critfall.',
      },
      {
        title: 'Species, backgrounds and classes',
        text: 'Presets for species, backgrounds and classes, each with its own ability bonuses, skills or saving throws.',
      },
      {
        title: 'Levels 1–20',
        text: 'A character level separate from the vanilla XP bar, earned from XP and advancements, from level 1 up to 20.',
      },
      {
        title: 'Stat screen',
        text: 'A character sheet on a key (K by default) showing abilities, saves, passives and skills, with a breakdown of every bonus on hover.',
      },
      {
        title: 'Datapack API',
        text: 'Presets, skills and mob scores are all defined in datapacks, and other mods can read scores and roll checks through the public API.',
      },
    ],
  },
];

export function isReleased(mod) {
  return mod.status === 'Released';
}

export function statusLabel(mod) {
  return mod.version ? `${mod.status} · v${mod.version}` : mod.status;
}

export function getMod(slug) {
  return mods.find((mod) => mod.slug === slug);
}

export default mods;

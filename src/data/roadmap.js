// status must be 'released', 'next', or 'planned' — anything else renders unstyled
const roadmap = [
  {
    title: `Critfall 0.2.6`,
    status: `released`,
    note: `d20 attack rolls, dice damage, crits and fumbles for Minecraft 1.21.1 — out now on GitHub.`,
  },
  {
    title: `Store launch`,
    status: `released`,
    note: `Critfall is live on CurseForge and Modrinth. However, it is highly recommended to wait for Initiative to be released first as it adds a lot of new features that improve the overall experience of using Critfall.`,
  },
  {
    title: `Initiative`,
    status: `next`,
    note: `Dice-driven turn order for Minecraft combat. Other features are welcome to be requested.`,
  },
  {
    title: `Checks`,
    status: `planned`,
    note: `Ability checks and saving throws as well as other RPG mechanics. Other features are welcome to be requested.`,
  },
  {
    title: `Dungeon Crawl`,
    status: `planned`,
    note: `Dice-driven dungeon crawl adventure where each room's contents and exits are rolled as you enter them, built on Critfall's combat engine.`,
  },
];

export default roadmap;

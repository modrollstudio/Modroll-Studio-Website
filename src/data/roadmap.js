// status must be 'released', 'ongoing', 'next', 'planned', 'paused' or 'abandoned' — anything else renders unstyled;
// Roadmap.jsx maps each to its label
const roadmap = [
  {
    title: `Critfall`,
    status: `released`,
    note: `d20 attack rolls, dice damage, crits and fumbles for Minecraft 1.21.1 — out now on Modrinth and CurseForge.`,
  },
  {
    title: `Store launch`,
    status: `released`,
    note: `Critfall is live on CurseForge and Modrinth.`,
  },
  {
    title: `Initiative`,
    status: `released`,
    note: `Dice-driven turn order for Minecraft combat. Other features are welcome to be requested.`,
  },
  {
    title: `Checks`,
    status: `ongoing`,
    note: `Ability scores, skills, saving throws, character creation and levels 1–20 — in development, no release date yet.`,
  },
  {
    title: `Dungeon Crawl`,
    status: `planned`,
    note: `A dice-driven dungeon crawl built on Critfall. The design is still taking shape.`,
  },
];

export default roadmap;

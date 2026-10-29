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
    status: `released`,
    note: `Ability scores, skills, saving throws, character creation and levels 1–20 — out now on CurseForge, with Modrinth coming soon.`,
  },
  {
    title: `Headless Horseman`,
    status: `released`,
    note: `A Halloween boss: a headless rider and his Gallows Steed, at midnight through October — out now on CurseForge, with Modrinth coming soon.`,
  },
  {
    title: `Depths`,
    status: `ongoing`,
    note: `Party runs through generated dungeons in the dark, with traps, ambushes and secret doors — all rolled through Critfall. The real boss comes next.`,
  },
];

export default roadmap;

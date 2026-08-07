import { useEffect } from 'react';
import Header from '../components/Header/Header.jsx';
import Button from '../components/Button/Button.jsx';
import Card from '../components/Card/Card.jsx';
import Grid from '../components/Grid/Grid.jsx';
import Badge from '../components/Badge/Badge.jsx';
import Section from '../components/Section/Section.jsx';
import CardArt from '../components/CardArt/CardArt.jsx';
import TypingText from '../components/TypingText/TypingText.jsx';
import FadeInOnScroll from '../components/FadeInOnScroll/FadeInOnScroll.jsx';
import FloatingEmbers from '../components/FloatingEmbers/FloatingEmbers.jsx';
import Roadmap from '../components/Roadmap/Roadmap.jsx';
import mods from '../data/mods.js';
import roadmap from '../data/roadmap.js';
import heroBg from '../assets/hero.webp';
import styles from './Home.module.scss';

const heroStyle = {
  position: 'relative',
  overflow: 'hidden',
  padding: '96px clamp(24px, 8vw, 120px) 104px',
  backgroundImage: `linear-gradient(90deg, rgba(16, 20, 31, 0.82), rgba(16, 20, 31, 0.45) 52%, rgba(16, 20, 31, 0) 78%), url(${heroBg})`,
  backgroundPosition: 'left center',
};

export default function Home() {
  useEffect(() => {
    document.title = 'Modroll Studio — Tabletop dice mods for Minecraft';
    document.querySelector('link[rel="canonical"]').href = 'https://modroll.studio/';
  }, []);

  return (
    <>
      <Header
        variant="hero"
        className={`hero-anim ${styles.hero}`}
        title={
          <>
            We craft <TypingText words={['dice mods', 'critical hits', 'natural 20s']} />.
          </>
        }
        subtitle="Modroll Studio is a small independent studio bringing tabletop rules to Minecraft — attack rolls, dice damage, crits and fumbles, all data-driven. Starting with Critfall."
        style={heroStyle}
      >
        <FloatingEmbers />
        <div className={styles.heroActions}>
          <Button size="lg" to="/mods/critfall">
            Explore Critfall
          </Button>
          <Button size="lg" variant="ghost" href="https://github.com/modrollstudio" target="_blank" rel="nofollow noopener">
            <span className="sr-only">Opens in new tab</span>
            GitHub
          </Button>
        </div>
      </Header>

      <Section
        width="xl"
        title="Our mods"
        lead="Dice-driven mods that bring real tabletop mechanics into Minecraft."
      >
        <div className={styles.modsGrid}>
          {mods.map((mod, i) => (
            <FadeInOnScroll key={mod.slug} delay={i * 90} className={styles.featuredCell}>
              <Card
                className={`surface ${styles.featured}`}
                media={<img className={styles.modIcon} src={mod.icon} alt="" width={140} height={140} />}
                title={mod.name}
                text={mod.tagline}
                to={`/mods/${mod.slug}`}
              >
                <p className={styles.featuredSummary}>{mod.description[0]}</p>
                <div className={styles.cardMeta}>
                  <Badge tone="accent">
                    {mod.status} · v{mod.version}
                  </Badge>
                  {mod.loaders.map((loader) => (
                    <Badge key={loader}>{loader}</Badge>
                  ))}
                  <Badge>MC {mod.mcVersion}</Badge>
                </div>
              </Card>
            </FadeInOnScroll>
          ))}
        </div>
      </Section>

      <Section
        title="The road ahead"
        lead="Where Modroll is headed next — from store launches to whole new mods."
      >
        <Roadmap items={roadmap} />
      </Section>

      <Section width="xl" title="What we're about">
        <Grid cols={3} gap="md">
          <FadeInOnScroll>
            <Card
              className="surface"
              media={<CardArt kind="die" size={64} />}
              title="Dice first"
              text="Real tabletop mechanics — attack rolls, dice damage, crits and fumbles — not just cosmetic randomness."
            />
          </FadeInOnScroll>
          <FadeInOnScroll delay={90}>
            <Card
              className="surface"
              media={<CardArt kind="sigil" symbol="✎" size={64} />}
              title="Data-driven"
              text="Every value lives in datapacks, so modpack developers can tune any mob, weapon, or mechanic without touching code."
            />
          </FadeInOnScroll>
          <FadeInOnScroll delay={180}>
            <Card
              className="surface"
              media={<CardArt kind="sigil" symbol="◐" size={64} />}
              title="Toggle everything"
              text="Each mechanic switches off individually. Use the whole system, or just the parts your pack wants."
            />
          </FadeInOnScroll>
        </Grid>
      </Section>
    </>
  );
}

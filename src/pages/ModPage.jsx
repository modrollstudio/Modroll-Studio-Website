import { useEffect } from 'react';
import { useParams } from 'react-router';
import Header from '../components/Header/Header.jsx';
import Button from '../components/Button/Button.jsx';
import Card from '../components/Card/Card.jsx';
import Grid from '../components/Grid/Grid.jsx';
import Badge from '../components/Badge/Badge.jsx';
import Section from '../components/Section/Section.jsx';
import FadeInOnScroll from '../components/FadeInOnScroll/FadeInOnScroll.jsx';
import FloatingEmbers from '../components/FloatingEmbers/FloatingEmbers.jsx';
import { getMod } from '../data/mods.js';
import NotFound from './NotFound.jsx';
import styles from './ModPage.module.scss';

const heroStyle = {
  position: 'relative',
  overflow: 'hidden',
  padding: '56px 16px 72px',
  backgroundImage:
    'radial-gradient(640px 300px at 50% -20%, rgba(var(--color-primary-rgb), 0.26), transparent 68%),' +
    'radial-gradient(420px 240px at 88% 110%, rgba(var(--color-ember-rgb), 0.2), transparent 70%),' +
    'linear-gradient(180deg, var(--header-from), var(--header-to) 75%)',
};

export default function ModPage() {
  const { slug } = useParams();
  const mod = getMod(slug);

  useEffect(() => {
    if (!mod) return;
    document.title = `${mod.name} — Modroll Studio`;
    document.querySelector('link[rel="canonical"]').href = `https://modroll.studio/mods/${mod.slug}`;
  }, [mod]);

  if (!mod) return <NotFound />;

  const liveLinks = mod.links.filter((link) => !link.todo);
  const pendingLinks = mod.links.filter((link) => link.todo);

  return (
    <>
      <Header
        variant="hero"
        className="hero-anim"
        art={<img className={styles.heroArt} src={mod.icon} alt="" width={128} height={128} />}
        title={mod.name}
        subtitle={mod.tagline}
        style={heroStyle}
      >
        <FloatingEmbers />
        <div className={styles.badges}>
          <Badge tone="accent">
            {mod.status} · v{mod.version}
          </Badge>
          {mod.loaders.map((loader) => (
            <Badge key={loader}>{loader}</Badge>
          ))}
          <Badge>Minecraft {mod.mcVersion}</Badge>
        </div>
      </Header>

      <Section title={`What is ${mod.name}?`}>
        {mod.description.map((paragraph) => (
          <p key={paragraph} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </Section>

      <Section width="xl" title="Key features">
        <Grid cols={3} gap="md">
          {mod.features.map((feature, i) => (
            <FadeInOnScroll key={feature.title} delay={(i % 3) * 90}>
              <Card
                className="surface"
                variant="compact"
                title={feature.title}
                text={feature.text}
              />
            </FadeInOnScroll>
          ))}
        </Grid>
      </Section>

      <Section width="xl" title="Screenshots">
        <p className={styles.note}>Screenshots coming soon.</p>
      </Section>

      <Section title={`Get ${mod.name}`}>
        <div className={styles.links}>
          {liveLinks.map((link) => (
            <Button key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </Button>
          ))}
          {pendingLinks.map((link) => (
            <Button key={link.label} variant="ghost" disabled title="Not yet live">
              {link.label} — coming soon
            </Button>
          ))}
        </div>
        <p className={styles.note}>
          Store pages are on the way — find the source and releases on GitHub. Questions?{' '}
          <a href="mailto:hello@modroll.studio">hello@modroll.studio</a>
        </p>
      </Section>
    </>
  );
}

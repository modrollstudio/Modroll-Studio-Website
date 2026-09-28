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
import { getMod, isReleased, statusLabel } from '../data/mods.js';
import NotFound from './NotFound.jsx';
import styles from './ModPage.module.scss';

// Get all screenshots from src/assets/screenshots/<mod slug name>/.
const allScreenshots = import.meta.glob('../assets/screenshots/*/*.{png,jpg,webp}', {
  eager: true,
  import: 'default',
});

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

  const links = mod.links ?? [];
  const liveLinks = links.filter((link) => !link.todo);
  const pendingLinks = links.filter((link) => link.todo);
  const released = isReleased(mod);
  const screenshots = Object.entries(allScreenshots).filter(([path]) =>
    path.includes(`/screenshots/${mod.slug}/`),
  );

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
          <Badge tone="accent">{statusLabel(mod)}</Badge>
          {mod.loaders?.map((loader) => (
            <Badge key={loader}>{loader}</Badge>
          ))}
          {mod.mcVersion && <Badge>Minecraft {mod.mcVersion}</Badge>}
        </div>
      </Header>

      <Section title={`What is ${mod.name}?`}>
        {mod.description.map((paragraph) => (
          <p key={paragraph} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </Section>

      {mod.features?.length > 0 && (
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
      )}

      <Section width="xl" title="Screenshots">
        {screenshots.length > 0 ? (
          <Grid cols={2} gap="md">
            {screenshots.map(([path, src], i) => (
              <FadeInOnScroll key={path} delay={(i % 2) * 90}>
                <a href={src} target="_blank" rel="noreferrer">
                  <img className={styles.screenshot} src={src} alt={path.split('/').pop().split('.')[0]} width={1920} height={1080} loading="lazy" />
                </a>
              </FadeInOnScroll>
            ))}
          </Grid>
        ) : (
          <p className={styles.note}>Screenshots coming soon.</p>
        )}
      </Section>

      {released && links.length > 0 && (
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
        </Section>
      )}

      <Section title="Contribute & contact">
        <p className={styles.paragraph}>
          {!released && `${mod.name} is still in development. `}
          {mod.repo
            ? 'Bug reports, feature ideas and pull requests are welcome on GitHub — or just drop us a line.'
            : 'Feature requests and ideas are welcome — drop us a line.'}
        </p>
        <div className={styles.links}>
          {mod.repo && (
            <Button href={mod.repo} target="_blank" rel="noopener noreferrer">
              GitHub
              <span className="sr-only">Opens in new tab</span>
            </Button>
          )}
          <Button variant={mod.repo ? 'ghost' : 'primary'} href="mailto:hello@modroll.studio">
            hello@modroll.studio
          </Button>
        </div>
      </Section>
    </>
  );
}

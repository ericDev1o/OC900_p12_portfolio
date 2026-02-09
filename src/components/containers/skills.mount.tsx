import { SkillsLogoProvider } from '@/contexts/SkillsLogoContext';

const waitForTarget = () =>
  new Promise<HTMLElement>((resolve) => {
    const el = document.getElementById('skills-root');
    if (el) return resolve(el);

    const mo = new MutationObserver(() => {
      const el = document.getElementById('skills-root');
      if (el) {
        mo.disconnect();
        resolve(el);
      }
    });

    mo.observe(document.body, { childList: true, subtree: true });
  });

/**
 * Lazy mount,
 * not only lazy render.
 * 
 * It's possibly to simplify later on.
 *  */  
(async () => {
  console.log('[skills.mount] waiting for skills-root');

  const target = await waitForTarget();
  console.log('[skills.mount] skills-root found');

  const observer = new IntersectionObserver(async ([entry]) => {
    if (!entry.isIntersecting) return;

    observer.disconnect();
    console.log('[skills.mount] intersecting → loading React');

    const { createRoot } = await import('react-dom/client');
    const { default: Skills } = await import('./Skills');

    createRoot(target).render(
    <SkillsLogoProvider>
      <Skills />
    </SkillsLogoProvider>);
  }, { rootMargin: '200px 0px', threshold: 0.1 });

  observer.observe(target);
})();
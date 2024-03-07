import { useEffect, useState } from 'react';

type ActiveNav = {
  handleNavLinkClick: (sectionId: string) => void;
  activeSection: string;
};

export const useActiveNav = (): ActiveNav => {
  const [activeSection, setActiveSection] = useState<string>('anasayfa');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentActiveSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentActiveSection = section.id;
        }
      });
      setActiveSection(currentActiveSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (sectionId: string): void => {
    setActiveSection(sectionId);
    const targetSection = document.getElementById(sectionId);
    targetSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return { handleNavLinkClick, activeSection };
};

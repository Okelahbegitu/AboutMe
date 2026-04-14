import { IntroScreen } from './components/IntroScreen';
import { HeroSection } from './components/HeroSection';
import { CloudDivider } from './components/CloudDivider';
import { ProfileSection } from './components/ProfileSection';
import { GameSection } from './components/GameSection';
import { ProjectGameSection } from './components/GameProjectSection';
import { GrassDivider } from './components/GrassDivider';
import { Footer } from './components/Footer';
export function renderApp(rootElement) {
  if (!rootElement) {
    return;
  }

  rootElement.innerHTML = `
    ${IntroScreen()}
    ${HeroSection()}
    ${CloudDivider()}
    ${ProfileSection()}
    ${GrassDivider()}
    ${ProjectGameSection()}
    ${Footer()}
  `;
}

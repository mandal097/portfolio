export interface TitleSubtitleProps {
  title: string;
  subtitle?: string;
  titleFontSize?: string;
  width?: string;
}

export interface ProjectsCardProps {
  id: number;
  project_title: string;
  subtitle: string;
  image: string;
  description: string;
  technologies: Array<string>;
  website_link: string;
  github_link: string;
  backend_github_link?: string;
}

export interface ProjectDetailsProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  handleShow: () => void;
  details: ProjectsCardProps;
}

export interface SkillCardProps {
  id: number;
  icon: string;
  language: string;
}

export interface SocialsProps {
  width: string;
  p: string;
}

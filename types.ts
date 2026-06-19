// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Profile extends CosmicObject {
  type: 'profile';
  metadata: {
    full_name?: string;
    business_name?: string;
    tagline?: string;
    bio?: string;
    profile_photo?: CosmicImage;
    hero_image?: CosmicImage;
    email?: string;
    phone?: string;
    location?: string;
    github_url?: string;
    linkedin_url?: string;
  };
}

export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    project_title?: string;
    description?: string;
    screenshot?: CosmicImage;
    gallery?: CosmicImage[];
    tech_stack?: string;
    live_url?: string;
    featured?: boolean;
  };
}

export type SkillCategory = string;

export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    skill_name?: string;
    category?: string;
    proficiency?: number;
  };
}

export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    role?: string;
    company?: string;
    location?: string;
    start_date?: string;
    end_date?: string;
    current_position?: boolean;
    description?: string;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isProject(obj: CosmicObject): obj is Project {
  return obj.type === 'projects';
}

export function isSkill(obj: CosmicObject): obj is Skill {
  return obj.type === 'skills';
}
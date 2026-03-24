export type Language = 'ar' | 'en';

export interface NavItem {
  id: string;
  title: {
    ar: string;
    en: string;
  };
}

export interface Service {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  icon: string;
}

export interface Project {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  year: string;
  type?: {
    ar: string;
    en: string;
  };
  client?: {
    ar: string;
    en: string;
  };
  description?: {
    ar: string;
    en: string;
  };
}

export interface Value {
  title: {
    ar: string;
    en: string;
  };
  icon: string;
}

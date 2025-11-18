/**
 * Unified Icon System for Bester
 *
 * Lucide icons: UI elements, features, general interface
 * Phosphor icons: Realms, expressive brand visuals
 */

// Lucide Icons (UI & Features)
import {
  Sparkles,
  Bot,
  Target,
  Users,
  Settings,
  Frown,
  Wind,
  AlertCircle,
  ArrowRight,
  Check,
  X,
  Mail,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  ChevronRight,
} from 'lucide-react';

// Phosphor Icons (Realms & Brand)
import {
  Brain,
  Activity,
  PaintBrush,
  Heart,
  Compass,
  Sparkle,
  Target as PhosphorTarget,
} from 'phosphor-react';

// Export Lucide UI Icons
export const UIIcons = {
  // Features
  Sparkles,
  Bot,
  Target,

  // Social/Community
  Users,

  // System/Settings
  Settings,

  // Problem indicators
  Frown,
  Wind,
  AlertCircle,

  // Navigation
  ArrowRight,
  ChevronRight,
  Menu,

  // Actions
  Check,
  X,

  // Social Media
  Mail,
  Twitter,
  Instagram,
  Linkedin,
};

// Export Phosphor Realm Icons
export const RealmIcons = {
  MindForge: Brain,
  VitalBody: Activity,
  CreativeFlow: PaintBrush,
  HeartLab: Heart,
  PlaygroundEarth: Compass,
  InnerCosmos: Sparkle,
  SystemSanctum: PhosphorTarget,
};

// Icon Color Palette
export const IconColors = {
  // Problems (warm alerts)
  problem: {
    primary: '#EF4444',   // red-500
    secondary: '#F97316', // orange-500
    tertiary: '#EAB308',  // yellow-500
  },

  // Solutions (cool success)
  solution: {
    primary: '#8B5CF6',   // purple-500
    secondary: '#3B82F6', // blue-500
    tertiary: '#10B981',  // green-500
  },

  // Realms
  realms: {
    mindForge: 'var(--color-realm-mind-forge)',
    vitalBody: 'var(--color-realm-vital-body)',
    creativeFlow: 'var(--color-realm-creative-flow)',
    heartLab: 'var(--color-realm-heart-lab)',
    systemSanctum: 'var(--color-realm-system-sanctum)',
    playgroundEarth: 'var(--color-realm-playground-earth)',
    innerCosmos: 'var(--color-realm-inner-cosmos)',
  },
};

// Icon Sizes (consistent across the app)
export const IconSizes = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 48,
  xxl: 56,
};

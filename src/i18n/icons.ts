// Maps icon-name strings (stored in CMS content) to Lucide components,
// since icon components can't be serialized in JSON content files.
import {
    ArrowRightLeft,
    Building,
    Building2,
    Briefcase,
    Handshake,
    HandCoins,
    Wrench,
    Coffee,
    Smile,
    UserCheck,
    File,
    MessageCircle,
    CalendarDays,
    Shield,
    ChartNoAxesCombined,
    BriefcaseBusiness,
    Heart,
} from 'lucide-astro';

export const iconMap = {
    ArrowRightLeft,
    Building,
    Building2,
    Briefcase,
    Handshake,
    HandCoins,
    Wrench,
    Coffee,
    Smile,
    UserCheck,
    File,
    MessageCircle,
    CalendarDays,
    Shield,
    ChartNoAxesCombined,
    BriefcaseBusiness,
    Heart,
} as const;

export type IconName = keyof typeof iconMap;

/** Resolve an icon name to its component, falling back to Building if unknown. */
export function resolveIcon(name: string) {
    return (iconMap as Record<string, (typeof iconMap)[IconName]>)[name] ?? Building;
}

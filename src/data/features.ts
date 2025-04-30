import { Building, HandCoins, Wrench, Coffee, Smile, UserCheck, File, MessageCircle, CalendarDays, Shield, ChartNoAxesCombined, BriefcaseBusiness, Heart} from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Building;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Building,  // Use an appropriate icon, like a house or building
                title: 'Comprehensive Property Management',
                description: 'Full-service management from tenant screening to lease enforcement and property maintenance.'
            },
            {
                icon: HandCoins,  // Use an icon like a dollar sign or cash
                title: 'Rent Collection & Financial Management',
                description: 'Efficient and secure rent collection, accounting, and financial reporting for property owners.'
            },
            {
                icon: Wrench,  // Use an icon for tools/maintenance
                title: 'Maintenance Coordination',
                description: '24/7 emergency maintenance and regular upkeep to keep your property in top condition.'
            },
            {
                icon: UserCheck,  // Use an icon for search or a magnifying glass
                title: 'Tenant Screening & Placement',
                description: 'Thorough background checks and reliable tenant placement to ensure quality renters.'
            },
            {
                icon: File,  // Use an icon for documents or legal aspects
                title: 'Lease Management & Legal Compliance',
                description: 'We handle lease agreements, renewals, and ensure all legal requirements are met.'
            },
            {
                icon: MessageCircle,  // Use an icon for customer support or communication
                title: 'Tenant Communication & Support',
                description: 'We act as a liaison between landlords and tenants to resolve issues quickly and professionally.'
            },
            {
                icon: CalendarDays,  // Use a calendar icon
                title: 'Property Inspections & Reporting',
                description: 'Regular property inspections and detailed reporting to maintain property standards.'
            },
            {
                icon: Shield,  // Use a security or protection icon
                title: 'Risk Management & Insurance Coordination',
                description: 'We help protect your property and investment by advising on insurance needs and risk management strategies.'
            },
            {
                icon: ChartNoAxesCombined,  // Use an icon for analytics or data
                title: 'Market Analysis & Rent Optimization',
                description: 'We provide detailed market analysis and help set competitive rental rates to maximize your ROI.'
            },
            {
                icon: BriefcaseBusiness,  // Use a business or professional icon
                title: 'Real Estate Investment Consulting',
                description: 'Expert advice for investors looking to expand or optimize their real estate portfolios.'
            }
        ]

    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Made with Love',
                description: 'Crafted with attention to detail'
            },
            {
                icon: Coffee,
                title: 'Always Fresh',
                description: 'Regular updates and improvements'
            },
            {
                icon: Smile,
                title: 'User Friendly',
                description: 'Intuitive and easy to use'
            }
        ]
    }
};

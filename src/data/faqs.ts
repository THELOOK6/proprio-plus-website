export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: "What types of properties do you manage?",
                answer: "We manage a wide range of residential and commercial properties including single-family homes, apartments, multi-unit buildings, small residential complexes, industial and office properties."
            },
            {
                question: "How do you screen potential tenants?",
                answer: "Our tenant screening process includes background checks, credit checks, employment verification, criminal checks, reference checks, and TAL to ensure reliable, responsible tenants."
            },
            {
                question: "How do you handle property maintenance and repairs?",
                answer: "We offer 24/7 maintenance support through our network of trusted contractors. Regular inspections and preventive care ensure your property stays in top condition."
            },
            {
                question: "How are rent payments handled?",
                answer: "We provide a secure online portal, cash and check retreival for tenants to pay rent. Owners receive direct deposits and monthly financial reports for full transparency."
            },
            {
                question: "Do you handle evictions if necessary?",
                answer: "Yes. If eviction becomes necessary, we handle all legal procedures to protect your interests while staying compliant with local laws."
            },
            {
                question: "What sanitary services do you provide?",
                answer: "We offer professional cleaning, sanitation of common areas, trash management, and disinfection services, especially tailored to multi-tenant buildings."
            }
        ]
    }
};

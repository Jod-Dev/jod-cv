import type { Resume } from '@/types/resume'

export const resumeData: Resume = {
  "$schema": "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
  "basics": {
    "name": "Jod Louis",
    "label": "IT Support & Web Developer",
                  "email": "jodlouis.dev@gmail.com",
    "phone": "(656) 200-7031",
    "url": "https://www.jodlouis.com",
    "location": {
      "address": "3550 Tobago LN #102",
      "postalCode": "33614",
      "city": "Tampa",
      "region": "FL",
      "countryCode": "US"
    },
    "summary": "Experienced IT Support professional with expertise in technical support, web development, and customer service. Skilled in troubleshooting, system administration, and providing excellent user support."
  },
  "work": [
    {
      "name": "Automated Health Systems",
      "position": "IT Support Specialist",
      "url": "https://www.automatedhealthsystems.com",
      "startDate": "2023-01",
      "endDate": null,
      "summary": "Provide technical support and system administration for healthcare software systems.",
      "highlights": [
        "Troubleshoot and resolve technical issues for healthcare software",
        "Provide user training and support",
        "Maintain system documentation",
        "Collaborate with development team on system improvements"
      ],
      "technologies": ["Healthcare Software", "Windows", "SQL", "Customer Support"]
    },
    {
      "name": "PayPal",
      "position": "Technical Support Specialist",
      "url": "https://www.paypal.com",
      "startDate": "2021-03",
      "endDate": "2022-12",
      "summary": "Provided technical support for PayPal's payment processing platform.",
      "highlights": [
        "Resolved payment processing issues",
        "Supported merchants and customers",
        "Maintained security protocols",
        "Achieved Top 120 Innovator recognition"
      ],
      "technologies": ["Payment Processing", "Security", "Customer Support", "ITSM"]
    },
    {
      "name": "Aptar",
      "position": "IT Support Technician",
      "url": "https://www.aptar.com",
      "startDate": "2020-01",
      "endDate": "2021-02",
      "summary": "Provided IT support for manufacturing systems and office infrastructure.",
      "highlights": [
        "Supported manufacturing software systems",
        "Maintained office IT infrastructure",
        "Provided user training",
        "Implemented security measures"
      ],
      "technologies": ["Manufacturing Systems", "Windows", "Network Support", "Security"]
    },
    {
      "name": "VASA Corp",
      "position": "Technical Support",
      "url": "https://www.vasacorp.com",
      "startDate": "2019-01",
      "endDate": "2019-12",
      "summary": "Provided technical support for corporate IT systems.",
      "highlights": [
        "Resolved hardware and software issues",
        "Supported network infrastructure",
        "Provided user assistance",
        "Maintained system documentation"
      ],
      "technologies": ["Windows", "Network Support", "Hardware Support", "Customer Service"]
    }
  ],
  "education": [
    {
      "institution": "Universidad Milenium",
      "url": "https://www.universidadmilenium.edu.mx",
      "area": "Information Technology",
      "studyType": "Bachelor's Degree",
      "startDate": "2015-08",
      "endDate": "2019-05",
      "score": "3.8/4.0",
      "courses": [
        "Computer Science Fundamentals",
        "Database Management",
        "Web Development",
        "Network Administration",
        "System Analysis"
      ]
    },
    {
      "institution": "CMPV",
      "url": "https://www.cmpv.edu.mx",
      "area": "Computer Science",
      "studyType": "Associate's Degree",
      "startDate": "2013-08",
      "endDate": "2015-05",
      "score": "3.9/4.0",
      "courses": [
        "Programming Fundamentals",
        "Computer Hardware",
        "Operating Systems",
        "Networking Basics"
      ]
    }
  ],
  "skills": [
    {
      "name": "Technical Support",
      "level": "Expert",
      "keywords": [
        "Troubleshooting",
        "System Administration",
        "Customer Support",
        "ITSM",
        "Help Desk"
      ]
    },
    {
      "name": "Web Development",
      "level": "Intermediate",
      "keywords": [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "TypeScript"
      ]
    },
    {
      "name": "Operating Systems",
      "level": "Advanced",
      "keywords": [
        "Windows",
        "macOS",
        "Linux",
        "System Administration",
        "Security"
      ]
    },
    {
      "name": "Networking",
      "level": "Intermediate",
      "keywords": [
        "Network Configuration",
        "TCP/IP",
        "DNS",
        "DHCP",
        "VPN"
      ]
    }
  ],
  "languages": [
    {
      "language": "English",
      "fluency": "Fluent"
    },
    {
      "language": "French",
      "fluency": "Native"
    },
    {
      "language": "Spanish",
      "fluency": "Fluent"
    },
    {
      "language": "Haitian Creole",
      "fluency": "Native"
    }
  ],
  "awards": [
    {
      "title": "Top 120 Innovator",
      "date": "2022",
      "awarder": "PayPal",
      "summary": "Recognized for innovative contributions to technical support processes and customer experience improvements."
    }
  ],
  "volunteer": [
    {
      "organization": "IYF Orlando",
      "position": "IT Support Volunteer",
      "url": "https://www.iyforlando.org",
      "startDate": "2020-01",
      "endDate": null,
      "summary": "Provide IT support and technical assistance for youth programs and community initiatives.",
      "highlights": [
        "Maintain computer lab equipment",
        "Provide technical training to youth",
        "Support community events",
        "Mentor students in technology"
      ]
    },
    {
      "organization": "Good News Orlando Church",
      "position": "Technical Support",
      "url": "https://www.goodnewsorlando.org",
      "startDate": "2019-06",
      "endDate": null,
      "summary": "Provide technical support for church services and community events.",
      "highlights": [
        "Support audio/visual systems",
        "Maintain church website",
        "Provide technical assistance for events",
        "Train volunteers on technology"
      ]
    }
  ]
}

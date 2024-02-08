const offers = [
    {
        "id": "23sa1sza",
        "position": "Junior Frontend Developer",
        "gross_salary": "$45,000 - $55,000",
        "work_type": "Hybrid",
        "company_name": "Tech Innovators",
        "location": "Warsaw, Poland",
        "logo": "https://w7.pngwing.com/pngs/383/458/png-transparent-ios-stocks-apple-stocks-stocks-ios-stocks-logo-apple-stocks-logo-ios-stocks-application-logo-3d-icon-thumbnail.png",
        "skills": [
            { "skill": "HTML", "level": "junior" },
            { "skill": "CSS", "level": "junior" },
            { "skill": "JavaScript", "level": "junior" },
            { "skill": "React", "level": "junior" },
            { "skill": "Version Control (Git)", "level": "junior" }
        ],
        "specialization": "frontend",
        "employment_type": "Employment contract",
        "work_dimension": "Full-Time",
        "keywords": ["HTML", "CSS", "JavaScript", "React", "Version Control (Git)", "Hybrid", "B2B", "Full-Time", "Junior"]
    },
    {
        "id": "g8a2s1df",
        "position": "Data Analyst",
        "gross_salary": "$50,000 - $60,000",
        "work_type": "Remote",
        "company_name": "Data Insights Co.",
        "location": "San Francisco, USA",
        "logo": "https://w7.pngwing.com/pngs/671/818/png-transparent-logo-bear-bull-stock-market-thumbnail.png",
        "skills": [
            { "skill": "SQL", "level": "junior" },
            { "skill": "Data Analysis", "level": "junior" },
            { "skill": "Python", "level": "junior" },
            { "skill": "Data Visualization", "level": "junior" },
            { "skill": "Statistical Analysis", "level": "junior" }
        ],
        "specialization": "data",
        "employment_type": "Work contract",
        "work_dimension": "Part-Time",
        "keywords": ["SQL", "Data Analysis", "Junior", "Python", "Data Visualization", "Statistical Analysis", "Remote", "Work contract", "Part-Time"]
    },
    {
        "id": "k3l2j4h5",
        "position": "Backend Software Engineer",
        "gross_salary": "$60,000 - $75,000",
        "work_type": "On-site",
        "company_name": "CodeCraft Solutions",
        "location": "Berlin, Germany",
        "logo": "https://w7.pngwing.com/pngs/730/627/png-transparent-american-stock-exchange-hd-logo-thumbnail.png",
        "skills": [
            { "skill": "Java", "level": "mid" },
            { "skill": "Spring Boot", "level": "mid" },
            { "skill": "RESTful API", "level": "mid" },
            { "skill": "Database Design", "level": "mid" },
            { "skill": "Unit Testing", "level": "mid" }
        ],
        "specialization": "backend",
        "employment_type": "Contract of mandate",
        "work_dimension": "Full-Time",
        "keywords": ["Java", "Spring Boot", "Mid-Level", "RESTful API", "Database Design", "Unit Testing", "On-site", "Contract of mandate", "Full-Time"]
    },
    {
        "id": "o9t7y6a5",
        "position": "UX/UI Designer",
        "gross_salary": "$55,000 - $65,000",
        "work_type": "Hybrid",
        "company_name": "DesignTech Studios",
        "location": "London, UK",
        "logo": "https://w7.pngwing.com/pngs/921/33/png-transparent-nyse-new-york-stock-exchange-hd-logo-thumbnail.png",
        "skills": [
            { "skill": "UI Design", "level": "junior" },
            { "skill": "UX Research", "level": "junior" },
            { "skill": "Adobe Creative Suite", "level": "junior" },
            { "skill": "Prototyping", "level": "junior" },
            { "skill": "User Testing", "level": "junior" }
        ],
        "specialization": "design",
        "employment_type": "B2b contract",
        "work_dimension": "Part-Time",
        "keywords": ["UI Design", "UX Research", "Junior", "Adobe Creative Suite", "Prototyping", "User Testing", "Hybrid", "B2B", "Part-Time"]
    },
    {
        "id": "p1q2r3z4",
        "position": "Cybersecurity Analyst",
        "gross_salary": "$70,000 - $85,000",
        "work_type": "Remote",
        "company_name": "SecureNet Solutions",
        "location": "Singapore",
        "logo": "https://w7.pngwing.com/pngs/596/640/png-transparent-strong-bull-stock-market-logo-thumbnail.png",
        "skills": [
            { "skill": "Network Security", "level": "mid" },
            { "skill": "Incident Response", "level": "mid" },
            { "skill": "Penetration Testing", "level": "mid" },
            { "skill": "Security Auditing", "level": "mid" },
            { "skill": "Cyber Threat Intelligence", "level": "mid" }
        ],
        "specialization": "security",
        "employment_type": "Internship",
        "work_dimension": "Full-Time",
        "keywords": ["Network Security", "Mid-Level", "Incident Response", "Penetration Testing", "Security Auditing", "Cyber Threat Intelligence", "Remote", "Internship", "Full-Time"]
    },
    {
        "id": "x5y6z7a8",
        "position": "Machine Learning Engineer",
        "gross_salary": "$80,000 - $95,000",
        "work_type": "On-site",
        "company_name": "AI Innovate Labs",
        "location": "Toronto, Canada",
        "logo": "https://w7.pngwing.com/pngs/758/156/png-transparent-london-stock-exchange-hd-logo-thumbnail.png",
        "skills": [
            { "skill": "Python", "level": "mid" },
            { "skill": "TensorFlow", "level": "mid" },
            { "skill": "Natural Language Processing", "level": "mid" },
            { "skill": "Machine Learning Algorithms", "level": "mid" },
            { "skill": "Data Preprocessing", "level": "mid" }
        ],
        "specialization": "machine-learning",
        "employment_type": "Contract of mandate",
        "work_dimension": "Full-Time",
        "keywords": ["Python", "TensorFlow", "Mid-Level", "Natural Language Processing", "Machine Learning Algorithms", "Data Preprocessing", "On-site", "Contract of mandate", "Full-Time"]
    },
    {
        "id": "b2c3d4e5",
        "position": "DevOps Specialist",
        "gross_salary": "$75,000 - $90,000",
        "work_type": "Hybrid",
        "company_name": "CloudOps Technologies",
        "location": "Sydney, Australia",
        "logo": "https://w7.pngwing.com/pngs/336/889/png-transparent-excavator-architectural-engineering-backhoe-machine-excavator-service-technic-logo-thumbnail.png",
        "skills": [
            { "skill": "Linux System Administration", "level": "mid" },
            { "skill": "Docker", "level": "mid" },
            { "skill": "Kubernetes", "level": "mid" },
            { "skill": "Continuous Integration/Continuous Deployment (CI/CD)", "level": "mid" },
            { "skill": "Infrastructure as Code (IaC)", "level": "mid" }
        ],
        "specialization": "devops",
        "employment_type": "B2b contract",
        "work_dimension": "Part-Time",
        "keywords": ["Linux System Administration", "Mid-Level", "Docker", "Kubernetes", "Continuous Integration/Continuous Deployment (CI/CD)", "Infrastructure as Code (IaC)", "Hybrid", "B2B", "Part-Time"]
    },
    {
        "id": "f6g7h8i9",
        "position": "Full Stack Developer",
        "gross_salary": "$65,000 - $80,000",
        "work_type": "Remote",
        "company_name": "CodeMasters Inc.",
        "location": "Bangalore, India",
        "logo": "https://w7.pngwing.com/pngs/786/126/png-transparent-logo-contracting-photography-logo-symbol-thumbnail.png",
        "skills": [
            { "skill": "JavaScript (Node.js)", "level": "mid" },
            { "skill": "Express.js", "level": "mid" },
            { "skill": "React", "level": "mid" },
            { "skill": "MongoDB", "level": "mid" },
            { "skill": "RESTful API Development", "level": "mid" }
        ],
        "specialization": "full-stack",
        "employment_type": "Employment contract",
        "work_dimension": "Temporary",
        "keywords": ["JavaScript (Node.js)", "Express.js", "Mid-Level", "React", "MongoDB", "RESTful API Development", "Remote", "Employment contract", "Temporary"]
    },
    {
        "id": "j1k2l3m4",
        "position": "IT Project Manager",
        "gross_salary": "$90,000 - $110,000",
        "work_type": "On-site",
        "company_name": "TechLeaders Solutions",
        "location": "New York City, USA",
        "logo": "https://w7.pngwing.com/pngs/532/457/png-transparent-black-dragon-logo-dragon-logo-dragon-logo-free-logo-design-template-head-wedding-logo-thumbnail.png",
        "skills": [
            { "skill": "Project Management", "level": "senior" },
            { "skill": "Agile Methodologies", "level": "senior" },
            { "skill": "Stakeholder Management", "level": "senior" },
            { "skill": "Budgeting and Financial Management", "level": "senior" },
            { "skill": "Risk Management", "level": "senior" }
        ],
        "specialization": "project-management",
        "employment_type": "Internship",
        "work_dimension": "Temporary",
        "keywords": ["Project Management", "Agile Methodologies", "Senior", "Stakeholder Management", "Budgeting and Financial Management", "Risk Management", "On-site", "Internship", "Temporary"]
    }
];

module.exports = offers;

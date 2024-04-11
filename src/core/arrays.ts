import calculator from '../common/Images/Home/sallarycalculaor.jpg';
import offers from '../common/Images/Home/joboffers.jpg';
import cv from '../common/Images/Home/CVCreator.jpg';

import DE from '../common/Images/Flags/de.png'
import GB from '../common/Images/Flags/gb.png'
import PL from '../common/Images/Flags/pl.png'
import IT from '../common/Images/Flags/it.png'
import FR from '../common/Images/Flags/fr.png'
import SP from '../common/Images/Flags/sp.png'

import fb from '../common/Images/SocialMedia/fb.png';
import link from '../common/Images/SocialMedia/link.png';
import google from '../common/Images/SocialMedia/google.png';


export const tiles = [
    {
        id: 1,
        img: cv,
        title: 'CV Creator',
        text: 'Create your CV in a few simple steps with our CV creator',
        link: '/CV-Creator',
    },

    {
        id: 2,
        img: offers,
        title: 'Job Offers',
        text: 'Check the latest job offers and find your dream job',
        link: '/Offers',
    },

    {
        id: 3,
        img: calculator,
        title: 'Salary Calculator',
        text: 'Calculate net and gross earnings for different types of contracts.',
        link: '/Calculator',
    }
];

export const links = [
    { text: 'Job Offers', link: '/Offers' },
    { text: 'My Carrer', link: '/Carrer' },
    { text: 'CV Creator', link: '/CV-Creator' },
    { text: 'Salary Calculator', link: '/Calculator' },
];

export const languages = [
    { text: 'Deutsch', flag: DE },
    { text: 'English', flag: GB },
    { text: 'Polski', flag: PL },
    { text: 'Italy', flag: IT },
    { text: 'France', flag: FR },
    { text: 'Spanien', flag: SP },
];

export const captions = [
    'Notifications about recruitment progress',
    'Latest job offers',
    'Efficient contact with the employer'
];

export const profileSpan = [
    'simpler application',
    'faster access to recruitment documents',
    'automatic completion of questions from employers',
];

const expandState = true;

export const Categories = [
    {
        id: 1,
        title: "Operating mode",
        isExpand: expandState,
        items: [
            { id: 1, text: 'Hybrid', checked: false, category: "Operating mode" },
            { id: 2, text: 'Remote', checked: false, category: "Operating mode" },
            { id: 3, text: 'On-site', checked: false, category: "Operating mode" },
            { id: 4, text: 'Mobile', checked: false, category: "Operating mode" },
        ],
    },
    {
        id: 2,
        title: "Specializations",
        isExpand: expandState,
        items: [
            { id: 5, text: "Backend", checked: false, category: "Specializations" },
            { id: 6, text: "Frontend", checked: false, category: "Specializations" },
            { id: 7, text: "Full-Stack", checked: false, category: "Specializations" },
            { id: 8, text: "Mobile", checked: false, category: "Specializations" },
            { id: 9, text: "DevOps", checked: false, category: "Specializations" },
            { id: 10, text: "Testing", checked: false, category: "Specializations" },
            { id: 11, text: "Security", checked: false, category: "Specializations" },
            { id: 12, text: "Game Dev", checked: false, category: "Specializations" },
        ],
    },
    {
        id: 3,
        title: "Position Level",
        isExpand: expandState,
        items: [
            { id: 13, text: "Trainee", checked: false, category: "Position Level" },
            { id: 14, text: "Junior", checked: false, category: "Position Level" },
            { id: 15, text: "Mid-Level", checked: false, category: "Position Level" },
            { id: 16, text: "Senior", checked: false, category: "Position Level" },
            { id: 17, text: "Lead", checked: false, category: "Position Level" },
            { id: 18, text: "Manager", checked: false, category: "Position Level" },
            { id: 19, text: "Director", checked: false, category: "Position Level" },
        ],
    },
    {
        id: 4,
        title: "Employment Type",
        isExpand: expandState,
        items: [
            { id: 20, text: "Employment contract", checked: false, category: "Employment Type" },
            { id: 21, text: "Work contract", checked: false, category: "Employment Type" },
            { id: 22, text: "Contract of mandate", checked: false, category: "Employment Type" },
            { id: 23, text: "B2b contract", checked: false, category: "Employment Type" },
            { id: 24, text: "Internship", checked: false, category: "Employment Type" },
        ],
    },
    {
        id: 5,
        title: "Working dimension",
        isExpand: expandState,
        items: [
            { id: 26, text: "Full-Time", checked: false, category: "Working dimension" },
            { id: 27, text: "Part-Time", checked: false, category: "Working dimension" },
            { id: 28, text: "Temporary", checked: false, category: "Working dimension" },
        ],
    },
];


export const iconsArray = [
    {
        src: fb,
        text: 'Sign up with Facebook'
    },
    {
        src: link,
        text: 'Sign up with Linkedin'
    },
    {
        src: google,
        text: 'Sign up with Google'
    }
];

export const footerLinks = [
    "Easy Employ Group",
    'Statute',
    'Privacy policy',
    'Cookie policy'
];

export const formInputs = [
    {
        text: "Name & Surname",
        type: 'text'
    },

    {
        text: "E-Mail",
        type: 'text'
    },

    {
        text: "GitHub / Porfolio Link",
        type: 'text'
    },

    {
        text: "Linkedin",
        type: 'text'
    },
];






import { avatar, english, femme, garcon1, garcon2 } from "../assets"
import { dsaAvatar, artCeni } from "../assets"
export const clubs = [
    {
        id: 1,
        nomClub: 'ENI DSA',
        avatar: dsaAvatar,
        description: "Groupe pour les passionnés d'algorithme et des problèmes solving en tous genre",
        listeCentreInteret: [
            {
                interestName: 'Mathematique'
            },
            {
                interestName: 'Algorithme'
            },
            {
                interestName: 'Problem Solving  '
            },        
        ],
        mentors: [
            {
                avatar: avatar,
                name: 'Beluga',
                lienFacebook : '#'  
            },
            {
                avatar: garcon2,
                name: 'Kevin',
                lienFacebook : '#'  
            },
            {
                avatar: garcon1,
                name: 'Maroparasy',
                lienFacebook : '#'  
            },
    
    ],
    },
    {
        id: 2,
        nomClub: 'ArtCENI',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
        avatar: artCeni,
        listeCentreInteret: [
            {
                interestName: 'Art oratoire'
            },      
        ],
        mentors: [
            {
                avatar: avatar,
                name: 'Test',
                lienFacebook : '#'  
            },
            {
                avatar: avatar,
                name: 'Unknown',
                lienFacebook : '#'  
            },
            {
                avatar: avatar,
                name: 'Rookie',
                lienFacebook : '#'  
            },
    
    ],
    },
    {
        id: 3,
        nomClub: "ECP Club d'anglais",
        avatar: english,
        description: "English club for practicing and improving skills ",
        listeCentreInteret: [
            {
                interestName: 'Art oratoire'
            }, 
            {
                interestName: 'Langue et parler'
            },     
        ],
        mentors: [
            {
                avatar: femme,
                name: 'MioraTiana',
                lienFacebook : '#'  
            },
            {
                avatar: avatar,
                name: 'Raphael',
                lienFacebook : '#'  
            },
            {
                avatar: femme,
                name: 'Fy',
                lienFacebook : '#'  
            },
    
    ],
    },
    
]

export const sameInterestUsers = [{
    avatar: femme,
    name: 'MioraTiana',
    lienFacebook : '#'  
},
{
    avatar: avatar,
    name: 'Raphael',
    lienFacebook : '#'  
},
{
    avatar: femme,
    name: 'Fy',
    lienFacebook : '#'  
},
]

export const listClub = [
    {
        id: 1,
        nomClub: 'ENI DSA',
        avatar: dsaAvatar,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    },
    {
        id: 2,
        nomClub: 'ArtCENI',
        avatar: artCeni,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    },
    {
        id: 3,
        nomClub: "ECP CLub d'anglais",
        avatar: english,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    },
]

export const listAutreClub = [
    {
        id: 4,
        nomClub: 'Club de Danse',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    },
    {
        id: 5,
        nomClub: "AS ENI Hoopers",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    },
]

export const eventsDSA = []
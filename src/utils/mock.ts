import { AuthorType, Post } from '../@types'
import doctorCare from '../Assets/img/doctorCare.png'
import profilePhoto2 from '../Assets/img/user-profile-photo-2.png'
import profilePhoto3 from '../Assets/img/user-profile-photo-3.png'
import profilePhoto4 from '../Assets/img/user-profile-photo-4.png'

export const authUser = {
  id: 1,
  name: 'Kayo Oliveira',
  profilePhoto: 'https://github.com/kayooliveira.png',
  job: 'Full Cycle DEV',
  company: 'Life.Vet'
} as AuthorType

export const posts = [
  {
    id: 1,
    author: {
      id: 5,
      name: 'Gabriel Cardoso',
      profilePhoto: 'https://i.imgur.com/lJ29Q2D.png',
      job: 'Front End DEV',
      company: 'Freelancer'
    },
    content: `
      Fala galeraa 👋 <br/><br/>
      Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀<br/><br/>
      <img src="${doctorCare}" alt="doctor-care" className="max-w-full rounded-lg mx-auto"/><br/><br/>
      👉 <a class="text-primary font-bold" href="https://gabriel.cardoso/doctorcare" target="_blank">gabriel.cardoso/doctorcare</a>
      <br/><br/>
      <span class="text-primary font-bold">#novoprojeto #nlw #rocketseat</span>
      `,
    comments: [
      {
        id: 1,
        author: authUser,
        content: 'Incrível!!! Eu amei este projeto, Marina! 💖🔥🚀',
        createdAt: new Date('2022-03-01 14:20:00'),
        likes: 13
      }
    ]
  },
  {
    id: 2,
    author: {
      id: 2,
      name: 'Jonas Marques',
      profilePhoto: profilePhoto2,
      job: 'Full Stack DEV',
      company: 'Nubank'
    },
    content: `
      Fala pessoal 👋<br/><br/>

      Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 <br/><br/>

      Acesse e deixe seu feedback 👉 <a class="text-primary font-bold" href="https://jonas.design" target="_blank">jonas.design</a><br/><br/>

      <br/>
      <span class="text-primary font-bold">#uiux #userexperience</span>`,
    comments: [
      {
        id: 2,
        author: authUser,
        content: 'Muito bom Jonas! Parabéns!!👏👏',
        createdAt: new Date('2022-06-04 00:20:00'),
        likes: 13
      },
      {
        id: 3,
        author: {
          id: 3,
          name: 'Gabriela Farias',
          job: 'Front End DEV',
          profilePhoto: profilePhoto3
        },
        content: 'Amei seu portifolio Jonas...❤️',
        createdAt: new Date('2022-09-02 00:20:00'),
        likes: 13
      },
      {
        id: 4,
        author: {
          id: 6,
          name: 'Daniela Marques',
          job: 'Database Analyst',
          profilePhoto: profilePhoto4
        },
        content: 'Que demais Jonas🔥🚀',
        createdAt: new Date('2022-08-05 12:20:00'),
        likes: 13
      },
      {
        id: 5,
        author: {
          id: 2,
          name: 'Jonas Marques ',
          job: 'Full Stack Dev',
          profilePhoto: profilePhoto2
        },
        content: 'Obrigado pessoal! 🚀❤️',
        createdAt: new Date('2022-12-07 05:20:00'),
        likes: 1
      }
    ]
  }
] as Post[]

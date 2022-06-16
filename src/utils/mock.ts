import { AuthorType, Post } from '../@types'
import profilePhoto1 from '../Assets/img/user-profile-photo-1.png'
import profilePhoto2 from '../Assets/img/user-profile-photo-2.png'
import profilePhoto3 from '../Assets/img/user-profile-photo-3.png'
import profilePhoto4 from '../Assets/img/user-profile-photo-4.png'
import profilePhoto from '../Assets/img/user-profile-photo.png'

export const authUser = {
  id: 1,
  name: 'Maria Clara',
  profilePhoto,
  job: 'Full Cycle DEV'
} as AuthorType

export const posts = [
  {
    id: 1,
    author: {
      id: 5,
      name: 'Marina Silva',
      profilePhoto: profilePhoto1,
      job: 'UI/UX Designer'
    },
    content: `
      Fala galeraa 👋 <br/><br/>
      Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀<br/><br/>
      👉 <a class="text-primary font-bold" href="https://marina.silva/doctorcare" target="_blank">marina.silva/doctorcare</a>
      <br/><br/>
      <span class="text-primary font-bold">#novoprojeto #nlw #rocketseat</span>
      `,
    comments: []
  },
  {
    id: 2,
    author: {
      id: 2,
      name: 'Jonas Marques',
      profilePhoto: profilePhoto2,
      job: 'Full Stack DEV'
    },
    content: `
      Fala pessoal 👋<br/><br/>

      Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 <br/><br/>

      Acesse e deixe seu feedback 👉 <a class="text-primary font-bold" href="https://jonas.design" target="_blank">jonas.design</a><br/><br/>

      <br/>
      <span class="text-primary font-bold">#uiux #userexperience</span>`,
    comments: [
      {
        author: {
          id: 1,
          name: 'Maria Clara',
          job: 'Full Cycle Dev',
          profilePhoto
        },
        content: 'Muito bom Jonas! Parabéns!!👏👏',
        createdAt: 'há 6 horas',
        likes: 13
      },
      {
        author: {
          id: 3,
          name: 'Gabriela Farias',
          job: 'Front End DEV',
          profilePhoto: profilePhoto3
        },
        content: 'Amei seu portifolio Jonas...❤️',
        createdAt: 'há 6 horas',
        likes: 13
      },
      {
        author: {
          id: 6,
          name: 'Daniela Marques',
          job: 'Database Analyst',
          profilePhoto: profilePhoto4
        },
        content: 'Que demais Jonas🔥🚀',
        createdAt: 'há 6 horas',
        likes: 13
      },
      {
        author: {
          id: 2,
          name: 'Jonas Marques ',
          job: 'Full Stack Dev',
          profilePhoto: profilePhoto2
        },
        content: 'Obrigado pessoal! 🚀❤️',
        createdAt: 'há 3 horas',
        likes: 1
      }
    ]
  }
] as Post[]

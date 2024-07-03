import todos from './../../assets/videos/todo.mp4'
import advice from './../../assets/videos/advice.mp4'
import QR_Generator from './../../assets/videos/QR-code.mp4'
import moviesdb from './../../assets/videos/Movies-db.mp4'
import newsFreak from './../../assets/videos/News-freak.mp4'
import textManipulate from './../../assets/videos/Text-manipulate.mp4'
import unsplash from './../../assets/videos/unsplash.mp4'
import quiz from './../../assets/videos/quiz.mp4'
import firebase from './../../assets/tech/firebase.svg'
import react from './../../assets/tech/reactjs.svg'
import api from './../../assets/tech/api.svg'
import html from './../../assets/tech/html.svg'
import css from './../../assets/tech/css.svg'
import javascript from './../../assets/tech/javasript.svg'
import spring from './../../assets/tech/spring.svg'
import tailwind from './../../assets/tech/tailwind.svg'

export const projects = [
    {
        title: "Todo list",
        videoUrl: todos,
        techStack: [react, firebase],
        code: "https://github.com/Aniketh003/todo",
        source: ""
    },
    {
        title: "Quiz App",
        videoUrl: quiz,
        techStack: [react, spring],
        code: "https://github.com/Aniketh003",
        source: ""
    },
    {
        title: "Imsearch",
        videoUrl: unsplash,
        techStack: [react, api,tailwind],
        code: "https://github.com/Aniketh003",
        source: ""
    },
    {
        title: "Movies db",
        videoUrl: moviesdb,
        techStack: [react,api],
        code: "",
        source: ""
    },
    {
        title: "Text Manipulate",
        videoUrl: textManipulate,
        techStack: [react,tailwind],
        code: "",
        source: ""
    },
    {
        title: "News Freak",
        videoUrl: newsFreak,
        techStack: [react,tailwind,api],
        code: "",
        source: ""
    },
    {
        title: "Advice",
        videoUrl: advice,
        techStack: [html,css,javascript,api],
        code: "",
        source: ""
    },
    {
        title:"QR Generator",
        videoUrl:QR_Generator,
        techStack: [react,api],
        code: "",
        source: ""
    }
];
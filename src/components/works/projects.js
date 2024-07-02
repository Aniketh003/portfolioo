import todos from './../../assets/videos/todo.mp4'
import advice from './../../assets/videos/advice.mp4'
import QR_Generator from './../../assets/videos/QR-code.mp4'
import firebase from './../../assets/tech/firebase.svg'
import react from './../../assets/tech/reactjs.svg'
import html from './../../assets/tech/html.svg'
import css from './../../assets/tech/css.svg'
import javascript from './../../assets/tech/javasript.svg'
import spring from './../../assets/tech/spring.svg'

export const projects = [
    {
        title: "Todo list",
        videoUrl: todos,
        techStack: [react, firebase],
        code: "https://github.com/Aniketh003/todo",
        source: ""
    },
    {
        title: "Advice",
        videoUrl: advice,
        techStack: [html,css,javascript],
        code: "",
        source: ""
    },
    {
        title:"QR Generator",
        videoUrl:QR_Generator,
        techStack: [react],
        code: "",
        source: ""
    }
];
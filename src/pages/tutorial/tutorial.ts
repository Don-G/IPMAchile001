import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WelcomePage} from '../welcome/welcome';
// import { MyApp } from '../../app/app.component';

/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  slides = [
    {
      title: "¡Bienvenido a IPMA Chile!",
      description: "La app <b>IPMA Chile</b> contiene 2 tipos de simuladores de exámenes con los conocimientos relevantes para obtener la certificación IPMA Level D y C.",
      image: "assets/img/titulo_ipma.png",
    },
    {
      title: "¿Qué es la Certificación IPMA?",
      description: "Sistema internacional de Certificación de Competencias de un individuo en cuanto a la <b>Gestión de Proyectos</b> que cuenta con 4 niveles: <b>Nivel A</b> (Director de Cartera o Programas de Proyectos), <b>Nivel B</b> (Director de Proyecto), <b>Nive C</b> (Profesional de la Dirección y Gestión de Proyectos) y <b>Nivel D</b> (Gestor en Dirección de Proyectos)",
      image: "assets/img/logo.jpg",
    },
    {
      title: "Exámenes Simples",
      description: "Los Exámenes Simples corresponden a: un <b>Exámen Full</b> que consta de 20 preguntas aleatorias y un tiempo máximo para responder de 8 minutos, y un <b>Exámen Express</b> que consta de 10 preguntas aleatorias y un tiempo máximo para responder de 2 minutos",
      image: "assets/img/examenes_simples.png",// Imagen de Exámenes Full + Express
    }
    ,
    {
      title: "Exámenes Categorizados",
      description: "La Norma ICB es el estándar internacional del IPMA, y éste actualmente en su versión 3 cuenta con 3 categorias de competencias (Comportamiento, Contextuales y Técnicas) de las cuales se desprenden 3 exámenes especializados en el estudio de dichas categorías",
      image: "assets/img/examenes_categorizados.png",// 
    }
    ,
    {
      title: "Resalto de Respuesta Correcta",
      description: "Cuando respondas correctamente, se resaltará tu respuesta con color verde, asímismo cuando respondas incorrectamente, se resaltará también tu respuesta incorrecta con color rojo",
      image: "assets/img/resalto_correcta.png",//
    }
    ,
    {
      title: "Resumen de Respuestas Correctas e Incorrectas",
      description: "Luego de responder el exámen podrás visualizar el resumen de tus respuestas y tocar cada pregunta resaltada podrás visualizar la respuesta correcta y el argumento en el que se basa",
      image: "assets/img/resumen_respuestas.png",// 
    }
    ,
    {
      title: "Seguimiento de Resultados",
      description: "Siempre tendrás un registro de tu progreso por cada exámen que realices",
      image: "assets/img/progreso.png",// 
    }
  ];

  


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

  goToMainPage(){
    // this.navCtrl.push(MyApp);
    this.navCtrl.setRoot(WelcomePage);
  }

}

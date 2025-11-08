import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
  skills = [
     { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Oracle DB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
     { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
   
  ];

  @ViewChild('skillsContainer') skillsContainer!: ElementRef;

  ngAfterViewInit() {
    const cards = this.skillsContainer.nativeElement.querySelectorAll('.card');

    cards.forEach((card: HTMLElement) => {
      card.addEventListener('mousemove', (event: MouseEvent) => this.onMouseMove(event, card));
      card.addEventListener('mouseleave', () => this.onMouseLeave(card));
    });
  }

  onMouseMove(event: MouseEvent, card: HTMLElement) {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    const rotateX = -y / 10;
    const rotateY = x / 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    card.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 20px rgba(0, 0, 0, 0.3)`;

    const glow = card.querySelector('.glow') as HTMLElement;
    glow.style.opacity = '1';
    glow.style.transform = `translate(${x / 3}px, ${y / 3}px)`;
  }

  onMouseLeave(card: HTMLElement) {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    card.style.boxShadow = '10px 10px 20px rgba(0, 0, 0, 0.1)';

    const glow = card.querySelector('.glow') as HTMLElement;
    glow.style.opacity = '0';
  }
  

}

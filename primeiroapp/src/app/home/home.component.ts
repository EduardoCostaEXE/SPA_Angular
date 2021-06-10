import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { alunos } from '../model/alunos'

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number;
  exibeTabela:  boolean = false;

  listaAlunos: alunos[] = [
    { nome: 'Eduardo Cabral Costa', idade: 20, email: 'eduardocabral95@gmail.com', curso: 'Ciência da Computação' },
    { nome: 'Sabrina Silva da Costa', idade: 20, email: 'sabrina.costa06@outlook.com', curso: 'Ciência da Computação' },
    { nome: 'Souma Yukihira', idade: 17, email: 'restaurante.yukihira@gmail.com', curso: 'Gastronomia' },
    { nome: 'Clark Kent', idade: 37, email: 'clarkkent.jornalista@clarimdiario.com', curso: 'Jornalismo' }
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }

  aumentarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela(){
    if(this.exibeTabela == false){
      this.exibeTabela = true;
    }
    else{
      this.exibeTabela = false;
    }
  }

}
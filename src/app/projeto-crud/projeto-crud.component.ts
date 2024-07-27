import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Povoamento } from '../Models/Povoamento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projeto-crud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './projeto-crud.component.html',
  styleUrls: ['./projeto-crud.component.scss']
})

export class ProjetoCRUDComponent {
  // Inserindo Validators nos inputs
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3), onlyLettersValidator()]),
    idade: new FormControl(null, [Validators.required, Validators.min(18), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3), onlyLettersValidator()])
  });

  btnCadastrar: Boolean = true;
  vetor: Povoamento[] = [];
  i: number = -1;

  // [C]reate => Função de Cadastrar
  cadastrar() {
    const novoUsuario = this.formulario.value as Povoamento;
    this.vetor.push(novoUsuario);
    this.formulario.reset();
    alert(`Usuário cadastrado com sucesso!
      Nome: ${novoUsuario.nome} 
      Idade: ${novoUsuario.idade} 
      Cidade: ${novoUsuario.cidade}`);
  }

  // [R]ead ==> Função de Seleção
  selecionar(i: number) {
    this.i = i;

    // Atribuir os dados da pessoa no formulário
    this.formulario.setValue({
      nome: this.vetor[i].nome,
      idade: this.vetor[i].idade,
      cidade: this.vetor[i].cidade
    });
    this.btnCadastrar = false;
  }

  // [U]pdate ==> Função de Alteração
  alterar() {
    alert('Dados alterado com sucesso!')
    this.vetor[this.i] = this.formulario.value as Povoamento;
    this.formulario.reset();
    this.btnCadastrar = true;
  }

  // [D]elete ==> Função de Deletar
  deletar() {
   if (confirm('Deseja mesmo deletar esse usuário?')) {
      this.formulario.reset();
      this.vetor.splice(this.i, 1);
      this.btnCadastrar = true;
    } else {
      return;
    }
  }

  // Função de Cancelar
  cancelar() {
    this.formulario.reset();
    this.btnCadastrar = true;
  }
}

// Função de validação de caracteres
export function onlyLettersValidator(): ValidatorFn {
  // Retorna uma função validadora que recebe um AbstractControl e retorna ValidationErrors ou null
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value; // Obtém o valor do controle de formulário (usuário)
    const onlyLetters = /^[a-zA-Z\u00C0-\u00FF\s]*$/.test(value);

    // Retorna null se o valor for válido (contém apenas letras, espaços ou acentos), caso contrário retorna um objeto de erro
    return onlyLetters ? null : { onlyLetters: { value } };
  };
}
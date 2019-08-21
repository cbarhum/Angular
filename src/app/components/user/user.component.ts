import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-user', // É a tag adicionar um webcomponent
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  formUser: FormGroup; // declarar uma variável do tipo FormGroup
  userAPIUrl:string = "https://randomuser.me/api" //API de usuarios aleatórios
  user:Object;

  constructor(private formBuilder: FormBuilder, private http:HttpClient) {
    // Estrutura do formulário de usuário com dados pré definidos
    this.formUser = this.formBuilder.group({
      nome: [{value:"Caru", disabled:false}],
      sobrenome: [{value:"Barhum", disabled:false}],
      email: [{value:"caru@gmail.com", disabled:false}],
      telefone: [{value:"+5511966048751", disabled:false}]

    })
   }

  async novoUsuario(){
     this.user = await this.http.get(this.userAPIUrl).toPromise()
    //Faz update do nome no formulário
     this.formUser.controls['nome'].setValue(this.user['results'][0]['name']['first'])
    //Faz update do sobrenome no formulário
     this.formUser.controls['sobrenome'].setValue(this.user['results'][0]['name']['last'])
     //Faz update do email no formulário
     this.formUser.controls['email'].setValue(this.user['results'][0]['email'])
   }
  
  ngOnInit() {
  }

}

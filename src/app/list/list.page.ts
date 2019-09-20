import {Component, OnInit} from '@angular/core';
import {ServicoService} from '../service/servico.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private servicoService: ServicoService;
  private servicos: any[];

  constructor(servicoService: ServicoService) {
    this.servicoService = servicoService;
  }

  ngOnInit() {
    this.servicoService.listarServico().subscribe(response => {
      this.servicos = response;
    });
  }

  filtrarServicos(event): void {
    this.servicoService.consultarServicosPorTexto(event.detail.value).subscribe(response => {
      this.servicos = response;
    });
  }

}

import {browser, by, element} from 'protractor';

describe('Ao entrar na visão principal', () => {
  beforeEach(() => {
    browser.get('/home');
  });
  it('Deve ter o titulo: Guia de Servicos', () => {
    expect(element(by.tagName('app-home'))
        .element(by.deepCss('ion-title')).getText())
          .toEqual('Guia de Serviços');
  });
  it('Deve ter um subtitulo: Guia de Servicos', () => {
    expect(element(by.deepCss('ion-card-subtitle')).getText())
        .toEqual('Guia de Serviços');
  });
  it('Deve ter uma mensagem de boa vindas', () => {
    expect(element(by.deepCss('ion-card-title')).getText())
        .toEqual('Seja bem vindo!');
  });
  it('Deve ter a informação: Quadro geral dos serviços prestados pelo Governo de Alagoas', () => {
    expect(element(by.deepCss('ion-card-content'))
        .element(by.tagName('p')).getText())
          .toEqual('Quadro geral dos serviços prestados pelo Governo de Alagoas');
  });
});

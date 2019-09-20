import {browser, by, element} from 'protractor';

describe('Ao entrar na visão listar', () => {
  beforeEach(() => {
    browser.get('/list');
  });
  it('Deve ter o titulo: Lista de Serviços', () => {
    expect(element(by.id('lblTitulo')).getText()).toEqual('Lista de Serviços');
  });
  it('Deve ter um campo vazio que permita informar dados para buscar por texto', () => {
    expect(element(by.deepCss('ion-searchbar')).getText())
        .toEqual('');
  });
});

describe('Ao informar texto: CNH, na visão listar', () => {
  beforeEach(() => {
    browser.get('/list');
    element(by.className('searchbar-input sc-ion-searchbar-md')).sendKeys('CNH');
  });
  it('Deve filtar e retornar os serviços relacionados com a pesquisa', () => {
  });
});

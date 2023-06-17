import React from 'react';
import { render, screen } from '@testing-library/react';
import IndexPage from '../pages/index';

describe('RegistroFinanceiro', () => {
  test('Exibe a lista de registros financeiros', () => {
    // Simule uma lista de registros
    const registros = [
      { descricao: 'Registro 1', tipo: 'Entrada', valor: '100' },
      { descricao: 'Registro 2', tipo: 'Saída', valor: '50' },
    ];

    render(<IndexPage registros={registros} />);

    // Verifique se os registros são exibidos na tela
    expect(screen.getByText('Registro 1')).toBeInTheDocument();
    expect(screen.getByText('Registro 2')).toBeInTheDocument();
  });

  test('Adiciona um novo registro financeiro', () => {
    render(<IndexPage />);

    // Simule o preenchimento do formulário
    const descricaoInput = screen.getByPlaceholderText('Descrição');
    const tipoInput = screen.getByPlaceholderText('Tipo');
    const valorInput = screen.getByPlaceholderText('Valor');
    const addButton = screen.getByText('Adicionar Registro');

    // Preencha os campos do formulário
    fireEvent.change(descricaoInput, { target: { value: 'Novo Registro' } });
    fireEvent.change(tipoInput, { target: { value: 'Entrada' } });
    fireEvent.change(valorInput, { target: { value: '200' } });

    // Envie o formulário
    fireEvent.click(addButton);

    // Verifique se o novo registro é exibido na tela
    expect(screen.getByText('Novo Registro')).toBeInTheDocument();
    expect(screen.getByText('Entrada')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
  });
});

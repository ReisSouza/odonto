import type { Meta, StoryObj } from '@storybook/react'

import { Table, TableProps } from '@odonto-ui/core'
import { PencilSimple, TrashSimple } from 'phosphor-react'

const rowsDefault = Array.from(Array(6)).map((_, index) => {
  return {
    cols: ['18/12/2023', 'R$ 230,00', 'sucesso', 'Reis Souza'],
    id: `${index}`,
  }
})
const colsDefault = ['Data', 'Valor', 'Status', 'Titular']

const onItemsRemoveAsync = (items: string[]): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    // Lógica para remover os itens aqui...

    // Se a remoção for bem-sucedida, chame o resolve()
    resolve()

    // Se ocorrer algum erro na remoção, chame o reject() e passe o erro como argumento
    // reject(new Error("Ocorreu um erro na remoção dos itens."));
  })
}

const meta = {
  title: 'Surfaces/Table',
  component: Table,

  argTypes: {},
} as Meta<TableProps>

export default meta

export const WithAllProperty: StoryObj<TableProps> = {
  args: {
    cols: colsDefault,
    rows: rowsDefault,
    onFilter: (v) => console.log(v),
    onAdd: () => {},
    labelButtonAdd: 'Adicionar',
    options: [
      {
        icon: <PencilSimple />,
        label: 'Editar',
        onClick: (id) => console.log(`Clicou para editar o ${id}`),
      },
      {
        icon: <TrashSimple />,
        label: 'Deletar',
        onClick: (id) => console.log(`Clicou para deletar o ${id}`),
      },
    ],
    onSort: (v) => console.log(v),
    onChecked: () => {},
    onItemsSelected: () => {},
    onItemsRemove: onItemsRemoveAsync,
  },
}

export const WithRounded: StoryObj<TableProps> = {
  args: {
    cols: colsDefault,
    rows: rowsDefault,
    onFilter: (v) => console.log(v),
    onAdd: () => {},
    labelButtonAdd: 'Adicionar',
    options: [
      {
        icon: <PencilSimple />,
        label: 'Editar',
        onClick: (id) => console.log(`Clicou para editar o ${id}`),
      },
      {
        icon: <TrashSimple />,
        label: 'Deletar',
        onClick: (id) => console.log(`Clicou para deletar o ${id}`),
      },
    ],
    onSort: (v) => console.log(v),
    onChecked: () => {},
    onItemsSelected: () => {},
    onItemsRemove: onItemsRemoveAsync,
    hasRounded: true,
  },
}

export const Default: StoryObj<TableProps> = {
  args: {
    cols: colsDefault,
    rows: rowsDefault,
  },
}
export const WithFilter: StoryObj<TableProps> = {
  args: {
    cols: colsDefault,
    rows: rowsDefault,
    onFilter: (v) => console.log(v),
  },
}

export const WithActionAdd: StoryObj<TableProps> = {
  args: {
    cols: colsDefault,
    rows: rowsDefault,
    onAdd: () => {},
    labelButtonAdd: 'Adicionar',
  },
}

export const WithCheckbox: StoryObj<TableProps> = {
  args: {
    cols: colsDefault,
    rows: rowsDefault,
    onChecked: () => {},
    onItemsSelected: () => {},
  },
}

export const WithOptions: StoryObj<TableProps> = {
  args: {
    cols: colsDefault,
    rows: rowsDefault,
    options: [
      {
        icon: <PencilSimple />,
        label: 'Editar',
        onClick: (id) => console.log(`Clicou para editar o ${id}`),
      },
      {
        icon: <TrashSimple />,
        label: 'Deletar',
        onClick: (id) => console.log(`Clicou para deletar o ${id}`),
      },
    ],
  },
}

export const WithSort: StoryObj<TableProps> = {
  args: {
    cols: colsDefault,
    rows: rowsDefault,
    onSort: (v) => console.log(v),
  },
}

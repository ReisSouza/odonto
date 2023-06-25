var p=Object.defineProperty;var r=(t,a)=>p(t,"name",{value:a,configurable:!0});import{k as c,B as m,a as o}from"./index.bdb81842.js";import{j as s,r as i,a as l,F as d}from"./jsx-runtime.0f49c2db.js";import"./index.432d3e08.js";import"./iframe.cc9555c9.js";const u={danger:{variant:"danger",title:"Conta deletada com sucesso.",description:"Sua conta foi deletada com sucesso, n\xE3o sera mais poss\xEDvel acessa as informa\xE7\xF5es dessa conta!"},success:{variant:"success",title:"Conta criada com sucesso.",description:"Sua conta foi criado com sucesso, para mais informa\xE7\xF5es acesse seu email!"},warning:{variant:"warning",title:"Alertar ",description:"Para deletar sua conta e preciso que n\xE3o haja vinculo com consultas futuras"}},k={parameters:{storySource:{source:`import type { Meta, Story } from '@storybook/react'
import { Box, Button, Toast, ToastProps } from '@odonto-ui/core'
import { useState } from 'react'

const renderToast = {
  danger: {
    variant: 'danger',
    title: 'Conta deletada com sucesso.',
    description:
      'Sua conta foi deletada com sucesso, n\xE3o sera mais poss\xEDvel acessa as informa\xE7\xF5es dessa conta!',
  },
  success: {
    variant: 'success',
    title: 'Conta criada com sucesso.',
    description:
      'Sua conta foi criado com sucesso, para mais informa\xE7\xF5es acesse seu email!',
  },
  warning: {
    variant: 'warning',
    title: 'Alertar ',
    description:
      'Para deletar sua conta e preciso que n\xE3o haja vinculo com consultas futuras',
  },
}
export default {
  title: 'Display/Toast',
  component: Toast,
  args: {
    variant: 'default',
  },

  argTypes: {
    variant: {
      options: ['default', 'warning', 'danger', 'success'],
      control: {
        type: 'inline-radio',
      },
    },
    open: { control: { type: 'boolean' } },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            justifyContent: 'center',
            gap: '$2',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>
const TemplateSuccess: Story<ToastProps> = (args) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Toast
        {...args}
        open={open}
        variant="success"
        title="Conta criada com sucesso."
        description="Sua conta foi criado com sucesso, para mais informa\xE7\xF5es acesse seu email!"
        onOpenChange={setOpen}
      />

      <Button color="success" onClick={() => setOpen(true)}>
        teste
      </Button>
    </>
  )
}
export const Success: Story<ToastProps> = TemplateSuccess.bind({})
Success.args = {}

const TemplateDanger: Story<ToastProps> = (args) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Toast
        {...args}
        open={open}
        variant="danger"
        title="Conta deletada com sucesso."
        description="Sua conta foi deletada com sucesso, n\xE3o sera mais poss\xEDvel acessa as informa\xE7\xF5es dessa conta!"
        onOpenChange={setOpen}
      />

      <Button color="danger" onClick={() => setOpen(true)}>
        teste
      </Button>
    </>
  )
}
export const Danger: Story<ToastProps> = TemplateDanger.bind({})
Danger.args = {}

const TemplateWarning: Story<ToastProps> = (args) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Toast
        {...args}
        open={open}
        variant="warning"
        title="Alertar "
        description="Para deletar sua conta e preciso que n\xE3o haja vinculo com consultas futuras"
        onOpenChange={setOpen}
      />

      <Button color="secondary" onClick={() => setOpen(true)}>
        teste
      </Button>
    </>
  )
}
export const Warning: Story<ToastProps> = TemplateWarning.bind({})
Warning.args = {}

const TemplatePilha: Story<ToastProps> = (args) => {
  const [listOfToast, setListOfToast] = useState<
    {
      title: string
      description: string
      variant: string
      id: number
    }[]
  >([])
  return (
    <>
      {listOfToast.map((tostItem) => {
        return (
          <Toast
            key={tostItem.id}
            {...args}
            variant={tostItem.variant as 'success' | 'danger' | 'warning'}
            title={tostItem.title + tostItem.id}
            description={tostItem.description}
          />
        )
      })}
      <Button
        onClick={() =>
          setListOfToast((prevState) => {
            return [
              ...prevState,
              {
                ...renderToast.success,
                id: prevState.length + 1,
              },
            ]
          })
        }
        color="success"
      >
        Delete With Alerter
      </Button>
      <Button
        onClick={() =>
          setListOfToast((prevState) => {
            return [
              ...prevState,
              {
                ...renderToast.danger,
                id: prevState.length + 1,
              },
            ]
          })
        }
        color="danger"
      >
        Delete With Alerter
      </Button>
      <Button
        onClick={() =>
          setListOfToast((prevState) => {
            return [
              ...prevState,
              {
                ...renderToast.warning,
                id: prevState.length + 1,
              },
            ]
          })
        }
        color="secondary"
      >
        Delete
      </Button>
    </>
  )
}
export const Empilhamento: Story<ToastProps> = TemplatePilha.bind({})
Empilhamento.args = {}
`,locationsMap:{success:{startLoc:{col:43,line:58},endLoc:{col:1,line:76},startBody:{col:43,line:58},endBody:{col:1,line:76}},danger:{startLoc:{col:42,line:80},endLoc:{col:1,line:98},startBody:{col:42,line:80},endBody:{col:1,line:98}},warning:{startLoc:{col:43,line:102},endLoc:{col:1,line:120},startBody:{col:43,line:102},endBody:{col:1,line:120}},empilhamento:{startLoc:{col:41,line:124},endLoc:{col:1,line:196},startBody:{col:41,line:124},endBody:{col:1,line:196}}}}},title:"Display/Toast",component:c,args:{variant:"default"},argTypes:{variant:{options:["default","warning","danger","success"],control:{type:"inline-radio"}},open:{control:{type:"boolean"}}},decorators:[t=>s(m,{as:"label",css:{display:"flex",justifyContent:"center",gap:"$2"},children:t()})]},g=r(t=>{const[a,e]=i.exports.useState(!1);return l(d,{children:[s(c,{...t,open:a,variant:"success",title:"Conta criada com sucesso.",description:"Sua conta foi criado com sucesso, para mais informa\xE7\xF5es acesse seu email!",onOpenChange:e}),s(o,{color:"success",onClick:()=>e(!0),children:"teste"})]})},"TemplateSuccess"),f=g.bind({});f.args={};const T=r(t=>{const[a,e]=i.exports.useState(!1);return l(d,{children:[s(c,{...t,open:a,variant:"danger",title:"Conta deletada com sucesso.",description:"Sua conta foi deletada com sucesso, n\xE3o sera mais poss\xEDvel acessa as informa\xE7\xF5es dessa conta!",onOpenChange:e}),s(o,{color:"danger",onClick:()=>e(!0),children:"teste"})]})},"TemplateDanger"),S=T.bind({});S.args={};const h=r(t=>{const[a,e]=i.exports.useState(!1);return l(d,{children:[s(c,{...t,open:a,variant:"warning",title:"Alertar ",description:"Para deletar sua conta e preciso que n\xE3o haja vinculo com consultas futuras",onOpenChange:e}),s(o,{color:"secondary",onClick:()=>e(!0),children:"teste"})]})},"TemplateWarning"),y=h.bind({});y.args={};const v=r(t=>{const[a,e]=i.exports.useState([]);return l(d,{children:[a.map(n=>s(c,{...t,variant:n.variant,title:n.title+n.id,description:n.description},n.id)),s(o,{onClick:()=>e(n=>[...n,{...u.success,id:n.length+1}]),color:"success",children:"Delete With Alerter"}),s(o,{onClick:()=>e(n=>[...n,{...u.danger,id:n.length+1}]),color:"danger",children:"Delete With Alerter"}),s(o,{onClick:()=>e(n=>[...n,{...u.warning,id:n.length+1}]),color:"secondary",children:"Delete"})]})},"TemplatePilha"),x=v.bind({});x.args={};const E=["Success","Danger","Warning","Empilhamento"];export{S as Danger,x as Empilhamento,f as Success,y as Warning,E as __namedExportsOrder,k as default};
//# sourceMappingURL=Toast.stories.6a64440a.js.map

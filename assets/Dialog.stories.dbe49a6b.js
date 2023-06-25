var i=Object.defineProperty;var t=(o,r)=>i(o,"name",{value:r,configurable:!0});import{c as a,B as s,T as l,d as p,a as e}from"./index.bdb81842.js";import{j as n,a as c}from"./jsx-runtime.0f49c2db.js";import"./index.432d3e08.js";import"./iframe.cc9555c9.js";const x={parameters:{storySource:{source:`import type { ComponentStory, Meta } from '@storybook/react'

import {
  Dialog,
  DialogProps,
  Button,
  Box,
  TextField,
  DialogCLose,
} from '@odonto-ui/core'

export default {
  title: 'Display/Dialog',
  component: Dialog,
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', justifyContent: 'center' }}>
          {Story()}
        </Box>
      )
    },
  ],

  argTypes: {
    open: { control: { type: 'boolean' } },
    defaultOpen: { control: { type: 'boolean' } },
    title: { control: { type: 'string' } },
    description: { control: { type: 'string' } },
    trigger: { control: { type: 'jsx.element' } },
  },
} as Meta<DialogProps>

const Template: ComponentStory<typeof Dialog> = (args) => {
  return (
    <Dialog
      {...args}
      modal
      onOpenChange={() => {}}
      title="Fazer login"
      description="Fa\xE7a login e aproveite o melhor da plataforma"
      content={
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TextField label="Email" />
          <TextField label="Password" />
        </div>
      }
      footer={[
        <DialogCLose asChild key={1}>
          <Button variant="outlined">Cancela</Button>
        </DialogCLose>,
        <Button key={2}>Login</Button>,
      ]}
      trigger={<Button>Open Dialog</Button>}
    />
  )
}
export const Default = Template.bind({})
`,locationsMap:{default:{startLoc:{col:48,line:34},endLoc:{col:1,line:57},startBody:{col:48,line:34},endBody:{col:1,line:57}}}}},title:"Display/Dialog",component:a,decorators:[o=>n(s,{as:"label",css:{display:"flex",justifyContent:"center"},children:o()})],argTypes:{open:{control:{type:"boolean"}},defaultOpen:{control:{type:"boolean"}},title:{control:{type:"string"}},description:{control:{type:"string"}},trigger:{control:{type:"jsx.element"}}}},d=t(o=>n(a,{...o,modal:!0,onOpenChange:()=>{},title:"Fazer login",description:"Fa\xE7a login e aproveite o melhor da plataforma",content:c("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n(l,{label:"Email"}),n(l,{label:"Password"})]}),footer:[n(p,{asChild:!0,children:n(e,{variant:"outlined",children:"Cancela"})},1),n(e,{children:"Login"},2)],trigger:n(e,{children:"Open Dialog"})}),"Template"),D=d.bind({}),B=["Default"];export{D as Default,B as __namedExportsOrder,x as default};
//# sourceMappingURL=Dialog.stories.dbe49a6b.js.map

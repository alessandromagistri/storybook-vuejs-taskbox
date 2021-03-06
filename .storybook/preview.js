
import '../src/index.css'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import '@storybook/addon-console'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    }
  },
  backgrounds: {
    default: 'red',
    values: [
      {
        name: 'red',
        value: 'red',
      },
      {
        name: 'facebook',
        value: '#3b5998',
      }
    ]

  }
}


const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
}
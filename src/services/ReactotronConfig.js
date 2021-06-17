import Reactotron, { overlay, openInEditor } from 'reactotron-react-native'

// https://github.com/infinitered/reactotron for more options!
Reactotron.configure({ host: '192.168.1.13', name: 'Merchant app' })
  .use(openInEditor())
  .useReactNative()
  .connect()

// Let's clear Reactotron on every time we load the app
Reactotron.clear()

// Totally hacky, but this allows you to not both importing reactotron-react-native
// on every file.  This is just DEV mode, so no big deal.
console.tron = Reactotron

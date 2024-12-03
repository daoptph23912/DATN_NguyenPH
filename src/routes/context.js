import React from 'react'
const PropsContext = React.createContext({})
export const PropsProvider = PropsContext.Provider
export const propsConsumer = PropsContext.Consumer
export default PropsContext
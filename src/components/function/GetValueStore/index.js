import { useSelector } from 'react-redux'
export const GetValueStore = () => {
    return useSelector((state) => state)
}
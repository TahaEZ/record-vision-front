import { styled } from '@mui/material'

export type WrapperProps = {
    style?: { [key: string]: string | number | WrapperProps['style'] }
}

const Wrapper = styled('div')<WrapperProps>(({ style }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'max-content',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'start',
    position: 'relative',
    ...style,
}))

export default Wrapper

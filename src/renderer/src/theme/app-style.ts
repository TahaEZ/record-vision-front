const commonStyle = {
    margin: 0,
    padding: '32px',
    fontFamily: 'IRANYekan',
    direction: 'rtl',
    height: '100vh',
    maxHeight: '100%',
    width: '100%',
}

const globalDarkStyle = {
    html: {
        height: '100vh',
    },
    body: {
        ...commonStyle,
        backgroundColor: '#040810',
        color: '#DCE0E8',
    },
}

export default globalDarkStyle

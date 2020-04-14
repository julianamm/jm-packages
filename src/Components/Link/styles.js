import styled from 'styled-components'
import Color from '../Colors'

export const Anchor = styled.a`
	font-family: Roboto;
    text-decoration: none;
    cursor: ${props => props.cursor ? props.cursor : 'pointer'};
    color: ${props => Color[props.color] ? `${Color[props.color]} !important` : `${Color["Blue-300"]}`};

    :visited {
        color: ${props => Color[props.visitedColor] ? `${Color[props.visitedColor]} !important` : `${Color["Blue-300"]}`};
    }

    :hover {
        color: ${props => Color[props.hoverColor] ? `${Color[props.hoverColor]} !important` : `${Color["Blue-600"]}`};
        text-decoration: underline;
    }

    :active {
        color: ${props => Color[props.activeColor] ? `${Color[props.activeColor]} !important` : `${Color["Blue-600"]}`};
        text-decoration: underline;
    }

    ${({ xs }) => xs && `
        font-size: 12px;
        line-height: 16px;
    `}

    ${({ sm }) => sm && `
        font-size: 14px;
        line-height: 18px;
    `}

    ${({ md }) => md && `
        font-size: 16px;
        line-height: 20px;
    `}

    ${({ lg }) => lg && `
        font-size: 18px;
        line-height: 22px;
    `}

    ${({ xl }) => xl && `
        font-size: 22px;
        line-height: 28px;
    `}

    ${({ xxl }) => xxl && `
        font-size: 28px;
        line-height: 32px;
    `}

    ${({ reverse }) => reverse && `
        color: ${Color["White"]} !important;
    `}

    ${({ noUnderscore }) => noUnderscore && `
        text-decoration: none !important;
    `}

    ${({ lineThrough }) => lineThrough && `
        :hover {
            text-decoration: line-through !important;
        }
        :active {
            text-decoration: line-through !important;
        }
        :visited {
            text-decoration: line-through !important;
        }
    `}

    ${({ underline }) => underline && `
        text-decoration: none !important;
        :active {
            border-bottom: 3px solid ${Color["Light-Blue-900"]};

        }
        :visited {
            border-bottom: 3px solid ${Color["Light-Blue-900"]};
        }
    `}

    ${({ white }) => white && `
        color: ${Color["White"]} !important;
        transition: opacity 0.5s;
        :hover {
        opacity: 0.7;
        }
    `}

    ${({ disabled }) =>
    disabled &&
    `
        color: ${Color["Blue-Grey-100"]};
        cursor: not-allowed;
        :hover {
        color: ${Color["Blue-Grey-100"]};
        text-decoration: none !important;
        }
    `}
`
export default Anchor;
import React from 'react';
import PropTypes from 'prop-types';
import Container, { Row } from '../Grid/index';
import Avatar from '../Avatar/Basic/index';
import Link from '../Link/index';
import * as S from './styles';

const JMNav = props => {
  return (
    <S.Navbar {...props}>
        <Container md>
            <Row alignCenter spaceBetween paddingTop={6}>
                <Row>
                    <Avatar image={props.logo} />
                </Row>
                <Row>
                    {props.items.map( item =>
                        <Row paddingLeft={60}>
                            <Link 
                                onEvent={props.onEvent}
                                data={props.data}
                                label={item.label}
                                to={item.to}
                                color={item.color}
                                sm={item.sm}
                                md={item.md}
                                lg={item.lg}
                                noUnderscore={item.noUnderscore}
                                reverse={item.reverse}
                            />
                        </Row>
                    )}
                </Row>
            </Row>
        </Container>
    </S.Navbar>
  )
}

JMNav.defaultProps = {
    onEvent: () => {},
    data: {},
    className: '',
}

JMNav.propTypes = {
    onEvent: PropTypes.func,
    data: PropTypes.object,
    className: PropTypes.string,
    navBgColor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    to: PropTypes.string,
    color: PropTypes.string,
    sm: PropTypes.bool,
    md: PropTypes.bool,
    lg: PropTypes.bool,
    noUnderscore: PropTypes.bool,
    reverse: PropTypes.bool,
}

export default JMNav;

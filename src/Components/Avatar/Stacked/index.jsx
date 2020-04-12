import React from "react";
import PropTypes from "prop-types";
import Body from "../../Typography/Body/index";
import Avatar from "../Basic/index";
import { Row } from "../../Grid/index";
import * as S from "./styles";

const AvatarStacked = props => {
  let count = 0;

  return (
    <Row
      alignCenter
      justifySpaceAround
      className={`avatar-stacked ${props.className ? props.className : ""}`}
    >
      <Row row alignItemsCenter>
        <Body color="grey-500" label="" data="AvatarStacked" onEvent={props.onEvent}/>
      </Row>
      <Row row alignItemsCenter>
        {props.items.map((item, index) => {
          if (index < 5) {
            count ++
            return (
              <S.Wrapper key={`avatar-stacked-${item.id}`}>
                <S.Tooltip>{item.name}</S.Tooltip>
                <Avatar
                  content="test"
                  image={item.avatar}
                  size="md"
                />
              </S.Wrapper>
            );
          }
          if (index > 2 && index === props.items.length - 1) {
            return (
              <S.Wrapper key={`avatar-stacked-${item.id}`}>
                <S.Rounded>
                  <Body label={`+${props.items.length - count}`} />
                </S.Rounded>
              </S.Wrapper>
            );
          }
        })}
      </Row>
    </Row>
  );
};

AvatarStacked.defaultProps = {
  items: [],
  className: "",
  onEvent: null
};

AvatarStacked.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
  onEvent: PropTypes.func
};

export default AvatarStacked;

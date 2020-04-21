import React from "react";
import { storiesOf } from "@storybook/react";
import { Column, Row } from '../../Grid';
import JMCardBase from ".";

storiesOf("Components|Cards/Base", module)

.add("Types", () => (
  <Column padding={24} color={'Grey-100'}>
    <Column>
        <Column padding={24}>
            <JMCardBase>
                <Row>Card Base Default</Row>
            </JMCardBase>
        </Column>
        <Column padding={24}>
            <JMCardBase noPadding>
                <Row>Card Base No Padding</Row>
            </JMCardBase>
        </Column>
        <Column padding={24}>
            <JMCardBase noHover>
                <Column >Card Base No Hover</Column>
            </JMCardBase>
        </Column>
        <Column padding={24}>
            <JMCardBase noBorder>
                <Column>Card Base No Border</Column>
            </JMCardBase>
        </Column>
        <Column padding={24}>
            <JMCardBase borderTopColor={'Pink-200'}>
                <Column>Card Base Colorful Border Top</Column>
            </JMCardBase>
        </Column>
        <Column padding={24}>
            <JMCardBase borderTopColor={'Purple-200'}>
                <Column>Card Base Colorful Border Top</Column>
            </JMCardBase>
        </Column>
    </Column>
  </Column>
))

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Column } from '../Grid';
import Color from '../Colors'
import JMLink from '.';

storiesOf('Components|Links', module)
  .add('Sizes', () => (
    <Column padding={24} alignCenter>
        <Column padding={5}>
            <JMLink label="Link default" to={"#"} onEvent={ e => { console.log(e) }} />
        </Column>
        <Column padding={5}>
            <JMLink xs label="Link xs" to={"#"} onEvent={ e => { console.log(e) }} />
        </Column>
        <Column padding={5}>
            <JMLink sm label="Link sm" to={"#"} onEvent={ e => { console.log(e) }} />
        </Column>
        <Column padding={5}>
            <JMLink md label="Link md" to={"#"} onEvent={ e => { console.log(e) }} />
        </Column>
        <Column padding={5}>
            <JMLink lg label="Link lg" to={"#"} onEvent={ e => { console.log(e) }} />
        </Column>
        <Column padding={5}>
            <JMLink xl label="Link xl" to={"#"} onEvent={ e => { console.log(e) }} />
        </Column>
        <Column padding={5}>
            <JMLink xxl label="Link xxl" to={"#"} onEvent={ e => { console.log(e) }} />
        </Column>
    </Column>
  ))
  .add('Colored', () => (
    <Column padding={24} alignCenter>
        <Column padding={5}>
            <JMLink label="Link default" to={"#"} onEvent={ e => { console.log(e) }} />
        </Column>
        <Column padding={5}>
            <JMLink xs color={"Pink-200"} label="Link xs" to={"#"} onEvent={ e => { console.log(e) }} />
        </Column>
        <Column padding={5}>
            <JMLink sm color={"Deep-Orange-200"} label="Link sm" to={"#"} onEvent={ e => { console.log(e) }} />
        </Column>
        <Column padding={5}>
            <JMLink md color={"Grey-900"} label="Link md" to={"#"} onEvent={ e => { console.log(e) }} />
        </Column>
        <Column padding={5}>
            <JMLink lg color={"Deep-Orange-A200"} label="Link lg" to={"#"} onEvent={ e => { console.log(e) }} />
        </Column>
        <Column padding={5}>
            <JMLink xl color={"Green-A400"} label="Link xl" to={"#"} onEvent={ e => { console.log(e) }} />
        </Column>
        <Column padding={5}>
            <JMLink 
                xxl 
                label="Link xxl" 
                color={"Purple-400"}
                visitedColor={"Purple-700"}
                hoverColor={"Indigo-600"}
                activeColor={"Teal-400"}
                to={"#"} 
                onEvent={ e => { console.log(e) }} 
            />
        </Column>
    </Column>
  ))
storiesOf('Components|Links', module)
  .add('Decor', () => (
    <Column padding={24} alignCenter>
        <Column padding={5} style={{ backgroundColor: Color["Blue-700"] }}>
            <JMLink white label="Link white" to={"#"} onEvent={ e => { console.log(e) }} />
        </Column>
        <Column padding={5}>
            <JMLink noUnderscore label="Link noUnderscore" to={"#"} onEvent={ e => { console.log(e) }} />
        </Column>
        <Column padding={5} style={{ backgroundColor: Color["Blue-700"] }}>
            <JMLink reverse label="Link reverse" to={"#"} onEvent={ e => { console.log(e) }} />
        </Column>
        <Column padding={5}>
            <JMLink disabled label="Link disabled" onEvent={ e => { console.log(e) }} />
        </Column>
        <Column padding={5}>
            <JMLink lineThrough label="Link hover line through" onEvent={ e => { console.log(e) }} />
        </Column>
        <Column padding={5}>
            <JMLink underline label="Link active underline" onEvent={ e => { console.log(e) }} />
        </Column>
    </Column>
  ))


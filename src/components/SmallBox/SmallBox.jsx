import React from 'react';
import styled from 'styled-components';
import { Row, RowSpaceBetween } from '../Grid/Grid';
import { P, H1 } from '../Typography/Typography';

const Box = styled.div`
    width: 255px;
    padding: 24px 18px;
    background: #252B42;
`

function SmallBox(props) {
    return (
        <Box>
            <RowSpaceBetween>
                <P>{props.name}</P>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        id="Path"
                        d={props.icon}
                        fill={props.fill}
                    />
                </svg>
            </RowSpaceBetween>
            <RowSpaceBetween>
            <H1>{props.number}</H1>
                <Row smallGap>
                    <svg
                        width="8"
                        height="4"
                        viewBox="0 0 8 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            id="Path 3"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 4L4 0L8 4H0Z"
                            fill="#1EB589"
                        />
                    </svg>

                    
                    <P>{props.percentage}%</P>
                </Row>
            </RowSpaceBetween>
        </Box>

    )
}

export default SmallBox;
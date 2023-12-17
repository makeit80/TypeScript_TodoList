import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <StDiv>
      Header
    </StDiv>
  )
}

const StDiv = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 80px;

background-color: gray;

z-index: 100;

font-size: 50px;
text-align: center;
font-weight: bold;
color: white;
`

export default Header
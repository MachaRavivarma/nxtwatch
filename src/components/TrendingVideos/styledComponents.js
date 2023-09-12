import styled from 'styled-components/macro'

export const TrendingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 68px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const TrendingVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const TitleIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 88px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 48px;
  }
`
export const TrendingText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const TrendingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 8px;
  @media screen and (min-width: 768px) {
    margin-left: 48px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
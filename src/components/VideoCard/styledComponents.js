import {Link} from 'react-router-dom'
import styled from 'styled-components/macro'

export const ItemLink = styled(Link)`
  text-decoration: none;
`
export const TrendingListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 288px;
    margin-right: 20px;
  }
`

export const TrendingThumbNailImage = styled.img`
  width: 100%;
`

export const TrendingVideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const TrendingProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 20px;
`

export const TrendingContentSection = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  display: flex;
  padding: 8px;
`
export const TrendingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`

export const TrendingChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.color};
`

export const TrendingViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`

export const TrendingDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`

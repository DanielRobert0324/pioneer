import Identicon from '@polkadot/react-identicon'
import React from 'react'
import styled from 'styled-components'
import { AvatarPlaceholderImage } from '../../components/Avatar'
import { ValueInJoys } from '../../components/typography'
import { Subscription } from '../../components/typography/Subscription'
import { Text } from '../../components/typography/Text'
import { BorderRad, Colors, Fonts, Overflow } from '../../constants'

interface WorkingGroupProps {
  groupImage?: string
  groupTitle: string | React.ReactElement
  groupContent?: string
  leaderAddress?: string
}

export const WorkingGroup = ({ groupImage, groupTitle, groupContent, leaderAddress }: WorkingGroupProps) => (
  <GroupItem>
    <GroupImageContainer>
      {groupImage ? <GroupImage src={groupImage} /> : <AvatarPlaceholderImage />}
    </GroupImageContainer>
    <GroupContentBlock>
      <GroupTitle>{groupTitle}</GroupTitle>
      {groupContent && <GroupContent size={2}>{groupContent}</GroupContent>}
    </GroupContentBlock>
    <GroupStats>
      <StatsColumn>
        <StatsValue>6</StatsValue>
        <Subscription>Workers</Subscription>
      </StatsColumn>
      <StatsColumn>
        <StatsValue>
          <ValueInJoys>130,000.00</ValueInJoys>
        </StatsValue>
        <Subscription>Current budget</Subscription>
      </StatsColumn>
      <StatsColumn>
        <StatsValue>1</StatsValue>
        <Subscription>Openings</Subscription>
      </StatsColumn>
      <StatsColumn>
        <StatsValue>
          {leaderAddress ? (
            <WGLeaderImage>
              <Identicon size={24} theme={'beachball'} value={leaderAddress} />
            </WGLeaderImage>
          ) : (
            'None'
          )}
        </StatsValue>
        <Subscription>WG Leader</Subscription>
      </StatsColumn>
    </GroupStats>
  </GroupItem>
)

const GroupItem = styled.section`
  display: grid;
  grid-template-columns: 108px 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 24px;
  width: 100%;
  height: 100%;
  max-height: 108px;
  padding-right: 32px;
  border: 1px solid ${Colors.Black[100]};
  border-radius: ${BorderRad.s};
  background-color: ${Colors.White};
  overflow: hidden;
`

const GroupImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% + 2px);
  border-right: 1px solid ${Colors.Black[100]};
  margin: 0;
  margin-top: -1px;
  margin-bottom: -1px;
  overflow: hidden;
`

const GroupImage = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const GroupContentBlock = styled.article`
  display: grid;
  grid-template-rows: 24px auto;
  grid-row-gap: 8px;
  padding: 16px 24px 16px 0;
  height: 100%;
  max-height: 100%;
  width: 100%;
`

const GroupTitle = styled.h5`
  max-width: 100%;
  ${Overflow.Dots};
`

const GroupContent = styled(Text)`
  hyphens: auto;
  max-height: 100%;
  max-width: 100%;
  ${Overflow.DotsTwoLine};
`

const GroupStats = styled.div`
  display: grid;
  grid-template-columns: 64px 116px 64px 64px;
  justify-content: space-between;
  width: 100%;
  grid-column-gap: 8px;
  padding: 28px 0;
`

const StatsColumn = styled.div`
  display: grid;
  grid-row-gap: 10px;
`

const StatsValue = styled.span`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 12px;
  align-items: center;
  width: fit-content;
  font-family: ${Fonts.Grotesk};
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${Colors.Black[900]};
`

const WGLeaderImage = styled.div`
  width: 24px;
  height: 24px;
  border-radius: ${BorderRad.round};
  overflow: hidden;
`
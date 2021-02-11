import BN from 'bn.js'
import React from 'react'
import styled from 'styled-components'
import { ButtonPrimarySmall } from '../../../components/buttons'
import { Help } from '../../../components/Help'
import { Label, TokenValue } from '../../../components/typography'
import { BorderRad, Colors, Shadows } from '../../../constants'
import { useTotalBalances } from '../../../hooks/useTotalBalances'

export const TotalBalances = () => {
  const { total, transferable, locked, recoverable } = useTotalBalances()

  const hasRecoverable = recoverable.gt(new BN(0))

  return (
    <Stats>
      <StatsItem>
        <StatsHeader>
          <StatsInfo>
            Total balance
            <Help helperText={'Lorem fishy'} />
          </StatsInfo>
        </StatsHeader>
        <StatsContent>
          <TotalValue value={total} />
        </StatsContent>
      </StatsItem>
      <StatsItem>
        <StatsHeader>
          <StatsInfo>
            Total transferable balance
            <Help helperText={'Lorem fishy'} />
          </StatsInfo>
        </StatsHeader>
        <StatsContent>
          <TotalValue value={transferable} />
        </StatsContent>
      </StatsItem>
      <StatsItem>
        <StatsHeader>
          <StatsInfo>
            Total locked balance
            <Help helperText={'Lorem fishy'} />
          </StatsInfo>
        </StatsHeader>
        <StatsContent>
          <TotalValue value={locked} />
        </StatsContent>
      </StatsItem>
      <StatsItem className={hasRecoverable ? 'statsItemWide' : ''}>
        <StatsHeader>
          <StatsInfo>
            Total recoverable
            <Help helperText={'Lorem fishy'} />
          </StatsInfo>
          {hasRecoverable && <StatsButton>Recover all</StatsButton>}
        </StatsHeader>
        <StatsContent>
          <TotalValue value={recoverable} />
        </StatsContent>
      </StatsItem>
    </Stats>
  )
}

const TotalValue = styled(TokenValue)`
  font-size: 20px;
  line-height: 28px;
`

const Stats = styled.ul`
  display: flex;
  width: 100%;
  justify-items: flex-start;
`

const StatsItem = styled.li`
  display: inline-grid;
  position: relative;
  grid-template-columns: 1fr;
  grid-template-rows: 16px 28px;
  grid-row-gap: 24px;
  flex-basis: 240px;
  flex-grow: 1;
  height: clamp(100%, 100px, 100px);
  padding: 12px 16px 20px;
  border-radius: ${BorderRad.m};
  background-color: ${Colors.White};
  box-shadow: ${Shadows.light};

  & + & {
    margin-left: 24px;
  }

  &.statsItemWide {
    flex-basis: 302px;
  }
`

const StatsHeader = styled.div`
  display: grid;
  grid-auto-flow: column;
  width: 100%;
  justify-content: space-between;
  align-items: start;
`

const StatsButton = styled(ButtonPrimarySmall)`
  position: absolute;
  top: 8px;
  right: 8px;
`

const StatsInfo = styled(Label)`
  position: relative;
`

const StatsContent = styled.div`
  margin-top: auto;
`
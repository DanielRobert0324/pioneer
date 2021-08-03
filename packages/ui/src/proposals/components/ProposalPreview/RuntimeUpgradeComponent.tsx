import React, { useEffect, useMemo } from 'react'

import { ArrowRightIcon, FileIcon } from '@/common/components/icons'
import { StatisticItem, Statistics } from '@/common/components/statistics'
import { StatisticButton } from '@/common/components/statistics/StatisticButton'
import { TextInlineBig } from '@/common/components/typography'
import { useRuntimeBytecode } from '@/proposals/hooks/useRuntimeBytecode'

import { RuntimeUpgrade } from '../../types/ProposalDetails'

import { ProposalPropertiesContent } from './ProposalDetails'

interface RuntimeUpgradeProps {
  details: RuntimeUpgrade
}

export const RuntimeUpgradeComponent: ProposalPropertiesContent<'runtimeUpgrade'> = ({
  details: { newBytecodeId },
}: RuntimeUpgradeProps) => {
  const { state, runtimeBytecode, fetch } = useRuntimeBytecode(newBytecodeId)

  const downloadHref = useMemo(() => {
    if (!runtimeBytecode) {
      return ''
    }
    const base64string = Buffer.from(runtimeBytecode.bytecode.replace(/^0x/, ''), 'hex').toString('base64')
    return `data:application/octet-stream;base64,${base64string}`
  }, [runtimeBytecode?.bytecode])

  useEffect(() => {
    if (state === 'loaded') {
      downloadFile(newBytecodeId, downloadHref)
    }
  }, [state])

  const onFileClick = () => {
    if (state !== 'loaded') {
      fetch()
    } else {
      downloadFile(newBytecodeId, downloadHref)
    }
  }

  return (
    <Statistics>
      {state !== 'loading' && (
        <StatisticButton title="Blob" onClick={onFileClick} icon={<ArrowRightIcon />}>
          <FileIcon />
          <TextInlineBig bold value>
            File Preview
          </TextInlineBig>
        </StatisticButton>
      )}
      {state === 'loading' && (
        <StatisticItem title="Blob">
          <FileIcon />
          <TextInlineBig bold value>
            Downloading file...
          </TextInlineBig>
        </StatisticItem>
      )}
    </Statistics>
  )
}

function downloadFile(id: string | undefined, downloadHref: string) {
  const a = document.createElement('a')
  a.download = `bytecode_${id}.wasm`
  a.href = downloadHref
  a.click()
}

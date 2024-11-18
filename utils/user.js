import axios from 'axios'

export const broadcastTransaction = async ({
  blob,
  setStatus,
  onSignIn,
  afterSubmitExe,
  address,
  wallet,
  signRequest,
  tx,
  setAwaiting
}) => {
  if (!blob) {
    setStatus('There is no blob to broadcast')
    return
  }
  const response = await axios.post('v2/transaction/submit', { signedTransaction: blob }).catch((error) => {
    setAwaiting(false)
    if (error.response?.data?.message) {
      setStatus(error.response.data.message)
    } else {
      setStatus(error.message)
    }
  })

  setAwaiting(false)

  const data = response?.data

  if (data) {
    const txHash = data.id
    if (txHash) {
      const redirectName = signRequest.redirect
      onSignIn({ address, wallet, redirectName })
      afterSubmitExe({
        redirectName,
        broker: signRequest.broker?.name,
        txHash,
        txType: tx.TransactionType
      })
    } else {
      //when failed transaction: onlyLogin, remove redirectName
      onSignIn({ address, wallet, redirectName: null })
    }
  }
}

export const getNextTransactionParams = async (tx) => {
  const response = await axios.post('v2/transaction/nextTransactionParams', tx).catch((error) => {
    console.error(error)
  })

  return response?.data
}
/*
export const xahauDef = {
  FIELDS: [
    [
      'Generic',
      {
        isSerialized: false,
        isSigningField: false,
        isVLEncoded: false,
        nth: 0,
        type: 'Unknown'
      }
    ],
    [
      'Invalid',
      {
        isSerialized: false,
        isSigningField: false,
        isVLEncoded: false,
        nth: -1,
        type: 'Unknown'
      }
    ],
    [
      'ObjectEndMarker',
      {
        isSerialized: false,
        isSigningField: true,
        isVLEncoded: false,
        nth: 1,
        type: 'STObject'
      }
    ],
    [
      'ArrayEndMarker',
      {
        isSerialized: false,
        isSigningField: true,
        isVLEncoded: false,
        nth: 1,
        type: 'STArray'
      }
    ],
    [
      'hash',
      {
        isSerialized: false,
        isSigningField: false,
        isVLEncoded: false,
        nth: 257,
        type: 'Hash256'
      }
    ],
    [
      'index',
      {
        isSerialized: false,
        isSigningField: false,
        isVLEncoded: false,
        nth: 258,
        type: 'Hash256'
      }
    ],
    [
      'taker_gets_funded',
      {
        isSerialized: false,
        isSigningField: false,
        isVLEncoded: false,
        nth: 258,
        type: 'Amount'
      }
    ],
    [
      'taker_pays_funded',
      {
        isSerialized: false,
        isSigningField: false,
        isVLEncoded: false,
        nth: 259,
        type: 'Amount'
      }
    ],
    [
      'LedgerEntryType',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 1,
        type: 'UInt16'
      }
    ],
    [
      'TransactionType',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 2,
        type: 'UInt16'
      }
    ],
    [
      'SignerWeight',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 3,
        type: 'UInt16'
      }
    ],
    [
      'TransferFee',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 4,
        type: 'UInt16'
      }
    ],
    [
      'Version',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 16,
        type: 'UInt16'
      }
    ],
    [
      'HookStateChangeCount',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 17,
        type: 'UInt16'
      }
    ],
    [
      'HookEmitCount',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 18,
        type: 'UInt16'
      }
    ],
    [
      'HookExecutionIndex',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 19,
        type: 'UInt16'
      }
    ],
    [
      'HookApiVersion',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 20,
        type: 'UInt16'
      }
    ],
    [
      'NetworkID',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 1,
        type: 'UInt32'
      }
    ],
    [
      'Flags',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 2,
        type: 'UInt32'
      }
    ],
    [
      'SourceTag',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 3,
        type: 'UInt32'
      }
    ],
    [
      'Sequence',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 4,
        type: 'UInt32'
      }
    ],
    [
      'PreviousTxnLgrSeq',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 5,
        type: 'UInt32'
      }
    ],
    [
      'LedgerSequence',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 6,
        type: 'UInt32'
      }
    ],
    [
      'CloseTime',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 7,
        type: 'UInt32'
      }
    ],
    [
      'ParentCloseTime',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 8,
        type: 'UInt32'
      }
    ],
    [
      'SigningTime',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 9,
        type: 'UInt32'
      }
    ],
    [
      'Expiration',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 10,
        type: 'UInt32'
      }
    ],
    [
      'TransferRate',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 11,
        type: 'UInt32'
      }
    ],
    [
      'WalletSize',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 12,
        type: 'UInt32'
      }
    ],
    [
      'OwnerCount',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 13,
        type: 'UInt32'
      }
    ],
    [
      'DestinationTag',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 14,
        type: 'UInt32'
      }
    ],
    [
      'HighQualityIn',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 16,
        type: 'UInt32'
      }
    ],
    [
      'HighQualityOut',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 17,
        type: 'UInt32'
      }
    ],
    [
      'LowQualityIn',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 18,
        type: 'UInt32'
      }
    ],
    [
      'LowQualityOut',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 19,
        type: 'UInt32'
      }
    ],
    [
      'QualityIn',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 20,
        type: 'UInt32'
      }
    ],
    [
      'QualityOut',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 21,
        type: 'UInt32'
      }
    ],
    [
      'StampEscrow',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 22,
        type: 'UInt32'
      }
    ],
    [
      'BondAmount',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 23,
        type: 'UInt32'
      }
    ],
    [
      'LoadFee',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 24,
        type: 'UInt32'
      }
    ],
    [
      'OfferSequence',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 25,
        type: 'UInt32'
      }
    ],
    [
      'FirstLedgerSequence',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 26,
        type: 'UInt32'
      }
    ],
    [
      'LastLedgerSequence',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 27,
        type: 'UInt32'
      }
    ],
    [
      'TransactionIndex',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 28,
        type: 'UInt32'
      }
    ],
    [
      'OperationLimit',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 29,
        type: 'UInt32'
      }
    ],
    [
      'ReferenceFeeUnits',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 30,
        type: 'UInt32'
      }
    ],
    [
      'ReserveBase',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 31,
        type: 'UInt32'
      }
    ],
    [
      'ReserveIncrement',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 32,
        type: 'UInt32'
      }
    ],
    [
      'SetFlag',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 33,
        type: 'UInt32'
      }
    ],
    [
      'ClearFlag',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 34,
        type: 'UInt32'
      }
    ],
    [
      'SignerQuorum',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 35,
        type: 'UInt32'
      }
    ],
    [
      'CancelAfter',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 36,
        type: 'UInt32'
      }
    ],
    [
      'FinishAfter',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 37,
        type: 'UInt32'
      }
    ],
    [
      'SignerListID',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 38,
        type: 'UInt32'
      }
    ],
    [
      'SettleDelay',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 39,
        type: 'UInt32'
      }
    ],
    [
      'TicketCount',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 40,
        type: 'UInt32'
      }
    ],
    [
      'TicketSequence',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 41,
        type: 'UInt32'
      }
    ],
    [
      'NFTokenTaxon',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 42,
        type: 'UInt32'
      }
    ],
    [
      'MintedNFTokens',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 43,
        type: 'UInt32'
      }
    ],
    [
      'BurnedNFTokens',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 44,
        type: 'UInt32'
      }
    ],
    [
      'HookStateCount',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 45,
        type: 'UInt32'
      }
    ],
    [
      'EmitGeneration',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 46,
        type: 'UInt32'
      }
    ],
    [
      'LockCount',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 49,
        type: 'UInt32'
      }
    ],
    [
      'FirstNFTokenSequence',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 50,
        type: 'UInt32'
      }
    ],
    [
      'XahauActivationLgrSeq',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 96,
        type: 'UInt32'
      }
    ],
    [
      'ImportSequence',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 97,
        type: 'UInt32'
      }
    ],
    [
      'RewardTime',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 98,
        type: 'UInt32'
      }
    ],
    [
      'RewardLgrFirst',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 99,
        type: 'UInt32'
      }
    ],
    [
      'RewardLgrLast',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 100,
        type: 'UInt32'
      }
    ],
    [
      'IndexNext',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 1,
        type: 'UInt64'
      }
    ],
    [
      'IndexPrevious',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 2,
        type: 'UInt64'
      }
    ],
    [
      'BookNode',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 3,
        type: 'UInt64'
      }
    ],
    [
      'OwnerNode',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 4,
        type: 'UInt64'
      }
    ],
    [
      'BaseFee',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 5,
        type: 'UInt64'
      }
    ],
    [
      'ExchangeRate',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 6,
        type: 'UInt64'
      }
    ],
    [
      'LowNode',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 7,
        type: 'UInt64'
      }
    ],
    [
      'HighNode',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 8,
        type: 'UInt64'
      }
    ],
    [
      'DestinationNode',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 9,
        type: 'UInt64'
      }
    ],
    [
      'Cookie',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 10,
        type: 'UInt64'
      }
    ],
    [
      'ServerVersion',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 11,
        type: 'UInt64'
      }
    ],
    [
      'NFTokenOfferNode',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 12,
        type: 'UInt64'
      }
    ],
    [
      'EmitBurden',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 13,
        type: 'UInt64'
      }
    ],
    [
      'HookInstructionCount',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 17,
        type: 'UInt64'
      }
    ],
    [
      'HookReturnCode',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 18,
        type: 'UInt64'
      }
    ],
    [
      'ReferenceCount',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 19,
        type: 'UInt64'
      }
    ],
    [
      'AccountIndex',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 98,
        type: 'UInt64'
      }
    ],
    [
      'AccountCount',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 99,
        type: 'UInt64'
      }
    ],
    [
      'RewardAccumulator',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 100,
        type: 'UInt64'
      }
    ],
    [
      'EmailHash',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 1,
        type: 'Hash128'
      }
    ],
    [
      'LedgerHash',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 1,
        type: 'Hash256'
      }
    ],
    [
      'ParentHash',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 2,
        type: 'Hash256'
      }
    ],
    [
      'TransactionHash',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 3,
        type: 'Hash256'
      }
    ],
    [
      'AccountHash',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 4,
        type: 'Hash256'
      }
    ],
    [
      'PreviousTxnID',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 5,
        type: 'Hash256'
      }
    ],
    [
      'LedgerIndex',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 6,
        type: 'Hash256'
      }
    ],
    [
      'WalletLocator',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 7,
        type: 'Hash256'
      }
    ],
    [
      'RootIndex',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 8,
        type: 'Hash256'
      }
    ],
    [
      'AccountTxnID',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 9,
        type: 'Hash256'
      }
    ],
    [
      'NFTokenID',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 10,
        type: 'Hash256'
      }
    ],
    [
      'EmitParentTxnID',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 11,
        type: 'Hash256'
      }
    ],
    [
      'EmitNonce',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 12,
        type: 'Hash256'
      }
    ],
    [
      'EmitHookHash',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 13,
        type: 'Hash256'
      }
    ],
    [
      'BookDirectory',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 16,
        type: 'Hash256'
      }
    ],
    [
      'InvoiceID',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 17,
        type: 'Hash256'
      }
    ],
    [
      'Nickname',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 18,
        type: 'Hash256'
      }
    ],
    [
      'Amendment',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 19,
        type: 'Hash256'
      }
    ],
    [
      'HookOn',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 20,
        type: 'Hash256'
      }
    ],
    [
      'Digest',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 21,
        type: 'Hash256'
      }
    ],
    [
      'Channel',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 22,
        type: 'Hash256'
      }
    ],
    [
      'ConsensusHash',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 23,
        type: 'Hash256'
      }
    ],
    [
      'CheckID',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 24,
        type: 'Hash256'
      }
    ],
    [
      'ValidatedHash',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 25,
        type: 'Hash256'
      }
    ],
    [
      'PreviousPageMin',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 26,
        type: 'Hash256'
      }
    ],
    [
      'NextPageMin',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 27,
        type: 'Hash256'
      }
    ],
    [
      'NFTokenBuyOffer',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 28,
        type: 'Hash256'
      }
    ],
    [
      'NFTokenSellOffer',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 29,
        type: 'Hash256'
      }
    ],
    [
      'HookStateKey',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 30,
        type: 'Hash256'
      }
    ],
    [
      'HookHash',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 31,
        type: 'Hash256'
      }
    ],
    [
      'HookNamespace',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 32,
        type: 'Hash256'
      }
    ],
    [
      'HookSetTxnID',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 33,
        type: 'Hash256'
      }
    ],
    [
      'OfferID',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 34,
        type: 'Hash256'
      }
    ],
    [
      'EscrowID',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 35,
        type: 'Hash256'
      }
    ],
    [
      'URITokenID',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 36,
        type: 'Hash256'
      }
    ],
    [
      'EmittedTxnID',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 97,
        type: 'Hash256'
      }
    ],
    [
      'GovernanceMarks',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 98,
        type: 'Hash256'
      }
    ],
    [
      'GovernanceFlags',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 99,
        type: 'Hash256'
      }
    ],
    [
      'hash',
      {
        isSerialized: true,
        isSigningField: false,
        isVLEncoded: false,
        nth: 1,
        type: 'Hash256'
      }
    ],
    [
      'index',
      {
        isSerialized: true,
        isSigningField: false,
        isVLEncoded: false,
        nth: 2,
        type: 'Hash256'
      }
    ],
    [
      'Amount',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 1,
        type: 'Amount'
      }
    ],
    [
      'Balance',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 2,
        type: 'Amount'
      }
    ],
    [
      'LimitAmount',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 3,
        type: 'Amount'
      }
    ],
    [
      'TakerPays',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 4,
        type: 'Amount'
      }
    ],
    [
      'TakerGets',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 5,
        type: 'Amount'
      }
    ],
    [
      'LowLimit',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 6,
        type: 'Amount'
      }
    ],
    [
      'HighLimit',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 7,
        type: 'Amount'
      }
    ],
    [
      'Fee',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 8,
        type: 'Amount'
      }
    ],
    [
      'SendMax',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 9,
        type: 'Amount'
      }
    ],
    [
      'DeliverMin',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 10,
        type: 'Amount'
      }
    ],
    [
      'MinimumOffer',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 16,
        type: 'Amount'
      }
    ],
    [
      'RippleEscrow',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 17,
        type: 'Amount'
      }
    ],
    [
      'DeliveredAmount',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 18,
        type: 'Amount'
      }
    ],
    [
      'NFTokenBrokerFee',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 19,
        type: 'Amount'
      }
    ],
    [
      'HookCallbackFee',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 20,
        type: 'Amount'
      }
    ],
    [
      'LockedBalance',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 21,
        type: 'Amount'
      }
    ],
    [
      'BaseFeeDrops',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 22,
        type: 'Amount'
      }
    ],
    [
      'ReserveBaseDrops',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 23,
        type: 'Amount'
      }
    ],
    [
      'ReserveIncrementDrops',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 24,
        type: 'Amount'
      }
    ],
    [
      'PublicKey',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 1,
        type: 'Blob'
      }
    ],
    [
      'MessageKey',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 2,
        type: 'Blob'
      }
    ],
    [
      'SigningPubKey',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 3,
        type: 'Blob'
      }
    ],
    [
      'TxnSignature',
      {
        isSerialized: true,
        isSigningField: false,
        isVLEncoded: true,
        nth: 4,
        type: 'Blob'
      }
    ],
    [
      'URI',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 5,
        type: 'Blob'
      }
    ],
    [
      'Signature',
      {
        isSerialized: true,
        isSigningField: false,
        isVLEncoded: true,
        nth: 6,
        type: 'Blob'
      }
    ],
    [
      'Domain',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 7,
        type: 'Blob'
      }
    ],
    [
      'FundCode',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 8,
        type: 'Blob'
      }
    ],
    [
      'RemoveCode',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 9,
        type: 'Blob'
      }
    ],
    [
      'ExpireCode',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 10,
        type: 'Blob'
      }
    ],
    [
      'CreateCode',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 11,
        type: 'Blob'
      }
    ],
    [
      'MemoType',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 12,
        type: 'Blob'
      }
    ],
    [
      'MemoData',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 13,
        type: 'Blob'
      }
    ],
    [
      'MemoFormat',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 14,
        type: 'Blob'
      }
    ],
    [
      'Fulfillment',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 16,
        type: 'Blob'
      }
    ],
    [
      'Condition',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 17,
        type: 'Blob'
      }
    ],
    [
      'MasterSignature',
      {
        isSerialized: true,
        isSigningField: false,
        isVLEncoded: true,
        nth: 18,
        type: 'Blob'
      }
    ],
    [
      'UNLModifyValidator',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 19,
        type: 'Blob'
      }
    ],
    [
      'ValidatorToDisable',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 20,
        type: 'Blob'
      }
    ],
    [
      'ValidatorToReEnable',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 21,
        type: 'Blob'
      }
    ],
    [
      'HookStateData',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 22,
        type: 'Blob'
      }
    ],
    [
      'HookReturnString',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 23,
        type: 'Blob'
      }
    ],
    [
      'HookParameterName',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 24,
        type: 'Blob'
      }
    ],
    [
      'HookParameterValue',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 25,
        type: 'Blob'
      }
    ],
    [
      'Blob',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 26,
        type: 'Blob'
      }
    ],
    [
      'Account',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 1,
        type: 'AccountID'
      }
    ],
    [
      'Owner',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 2,
        type: 'AccountID'
      }
    ],
    [
      'Destination',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 3,
        type: 'AccountID'
      }
    ],
    [
      'Issuer',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 4,
        type: 'AccountID'
      }
    ],
    [
      'Authorize',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 5,
        type: 'AccountID'
      }
    ],
    [
      'Unauthorize',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 6,
        type: 'AccountID'
      }
    ],
    [
      'RegularKey',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 8,
        type: 'AccountID'
      }
    ],
    [
      'NFTokenMinter',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 9,
        type: 'AccountID'
      }
    ],
    [
      'EmitCallback',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 10,
        type: 'AccountID'
      }
    ],
    [
      'HookAccount',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 16,
        type: 'AccountID'
      }
    ],
    [
      'Inform',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 99,
        type: 'AccountID'
      }
    ],
    [
      'TransactionMetaData',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 2,
        type: 'STObject'
      }
    ],
    [
      'CreatedNode',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 3,
        type: 'STObject'
      }
    ],
    [
      'DeletedNode',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 4,
        type: 'STObject'
      }
    ],
    [
      'ModifiedNode',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 5,
        type: 'STObject'
      }
    ],
    [
      'PreviousFields',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 6,
        type: 'STObject'
      }
    ],
    [
      'FinalFields',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 7,
        type: 'STObject'
      }
    ],
    [
      'NewFields',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 8,
        type: 'STObject'
      }
    ],
    [
      'TemplateEntry',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 9,
        type: 'STObject'
      }
    ],
    [
      'Memo',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 10,
        type: 'STObject'
      }
    ],
    [
      'SignerEntry',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 11,
        type: 'STObject'
      }
    ],
    [
      'NFToken',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 12,
        type: 'STObject'
      }
    ],
    [
      'EmitDetails',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 13,
        type: 'STObject'
      }
    ],
    [
      'Hook',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 14,
        type: 'STObject'
      }
    ],
    [
      'Signer',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 16,
        type: 'STObject'
      }
    ],
    [
      'Majority',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 18,
        type: 'STObject'
      }
    ],
    [
      'DisabledValidator',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 19,
        type: 'STObject'
      }
    ],
    [
      'EmittedTxn',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 20,
        type: 'STObject'
      }
    ],
    [
      'HookExecution',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 21,
        type: 'STObject'
      }
    ],
    [
      'HookDefinition',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 22,
        type: 'STObject'
      }
    ],
    [
      'HookParameter',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 23,
        type: 'STObject'
      }
    ],
    [
      'HookGrant',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 24,
        type: 'STObject'
      }
    ],
    [
      'AmountEntry',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 91,
        type: 'STObject'
      }
    ],
    [
      'MintURIToken',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 92,
        type: 'STObject'
      }
    ],
    [
      'HookEmission',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 93,
        type: 'STObject'
      }
    ],
    [
      'ImportVLKey',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 94,
        type: 'STObject'
      }
    ],
    [
      'ActiveValidator',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 95,
        type: 'STObject'
      }
    ],
    [
      'GenesisMint',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 96,
        type: 'STObject'
      }
    ],
    [
      'Signers',
      {
        isSerialized: true,
        isSigningField: false,
        isVLEncoded: false,
        nth: 3,
        type: 'STArray'
      }
    ],
    [
      'SignerEntries',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 4,
        type: 'STArray'
      }
    ],
    [
      'Template',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 5,
        type: 'STArray'
      }
    ],
    [
      'Necessary',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 6,
        type: 'STArray'
      }
    ],
    [
      'Sufficient',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 7,
        type: 'STArray'
      }
    ],
    [
      'AffectedNodes',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 8,
        type: 'STArray'
      }
    ],
    [
      'Memos',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 9,
        type: 'STArray'
      }
    ],
    [
      'NFTokens',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 10,
        type: 'STArray'
      }
    ],
    [
      'Hooks',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 11,
        type: 'STArray'
      }
    ],
    [
      'Majorities',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 16,
        type: 'STArray'
      }
    ],
    [
      'DisabledValidators',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 17,
        type: 'STArray'
      }
    ],
    [
      'HookExecutions',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 18,
        type: 'STArray'
      }
    ],
    [
      'HookParameters',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 19,
        type: 'STArray'
      }
    ],
    [
      'HookGrants',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 20,
        type: 'STArray'
      }
    ],
    [
      'Amounts',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 92,
        type: 'STArray'
      }
    ],
    [
      'HookEmissions',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 93,
        type: 'STArray'
      }
    ],
    [
      'ImportVLKeys',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 94,
        type: 'STArray'
      }
    ],
    [
      'ActiveValidators',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 95,
        type: 'STArray'
      }
    ],
    [
      'GenesisMints',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 96,
        type: 'STArray'
      }
    ],
    [
      'CloseResolution',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 1,
        type: 'UInt8'
      }
    ],
    [
      'Method',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 2,
        type: 'UInt8'
      }
    ],
    [
      'TransactionResult',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 3,
        type: 'UInt8'
      }
    ],
    [
      'TickSize',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 16,
        type: 'UInt8'
      }
    ],
    [
      'UNLModifyDisabling',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 17,
        type: 'UInt8'
      }
    ],
    [
      'HookResult',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 18,
        type: 'UInt8'
      }
    ],
    [
      'TakerPaysCurrency',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 1,
        type: 'Hash160'
      }
    ],
    [
      'TakerPaysIssuer',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 2,
        type: 'Hash160'
      }
    ],
    [
      'TakerGetsCurrency',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 3,
        type: 'Hash160'
      }
    ],
    [
      'TakerGetsIssuer',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 4,
        type: 'Hash160'
      }
    ],
    [
      'Paths',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: false,
        nth: 1,
        type: 'PathSet'
      }
    ],
    [
      'Indexes',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 1,
        type: 'Vector256'
      }
    ],
    [
      'Hashes',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 2,
        type: 'Vector256'
      }
    ],
    [
      'Amendments',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 3,
        type: 'Vector256'
      }
    ],
    [
      'NFTokenOffers',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 4,
        type: 'Vector256'
      }
    ],
    [
      'HookNamespaces',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 5,
        type: 'Vector256'
      }
    ],
    [
      'URITokenIDs',
      {
        isSerialized: true,
        isSigningField: true,
        isVLEncoded: true,
        nth: 99,
        type: 'Vector256'
      }
    ],
    [
      'Transaction',
      {
        isSerialized: false,
        isSigningField: false,
        isVLEncoded: false,
        nth: 1,
        type: 'Transaction'
      }
    ],
    [
      'LedgerEntry',
      {
        isSerialized: false,
        isSigningField: false,
        isVLEncoded: false,
        nth: 1,
        type: 'LedgerEntry'
      }
    ],
    [
      'Validation',
      {
        isSerialized: false,
        isSigningField: false,
        isVLEncoded: false,
        nth: 1,
        type: 'Validation'
      }
    ],
    [
      'Metadata',
      {
        isSerialized: false,
        isSigningField: false,
        isVLEncoded: false,
        nth: 1,
        type: 'Metadata'
      }
    ]
  ],
  LEDGER_ENTRY_TYPES: {
    AccountRoot: 97,
    Amendments: 102,
    Any: 0,
    Check: 67,
    Child: 7378,
    Contract: 99,
    DepositPreauth: 112,
    DirectoryNode: 100,
    EmittedTxn: 69,
    Escrow: 117,
    FeeSettings: 115,
    GeneratorMap: 103,
    Hook: 72,
    HookDefinition: 68,
    HookState: 118,
    ImportVLSequence: 73,
    Invalid: -1,
    LedgerHashes: 104,
    NFTokenOffer: 55,
    NFTokenPage: 80,
    NegativeUNL: 78,
    Nickname: 110,
    Offer: 111,
    PayChannel: 120,
    RippleState: 114,
    SignerList: 83,
    Ticket: 84,
    UNLReport: 82,
    URIToken: 85
  },
  TRANSACTION_FLAGS: {
    AccountSet: {
      tfAllowXRP: 2097152,
      tfDisallowXRP: 1048576,
      tfOptionalAuth: 524288,
      tfOptionalDestTag: 131072,
      tfRequireAuth: 262144,
      tfRequireDestTag: 65536
    },
    ClaimReward: {
      tfOptOut: 1
    },
    EnableAmendment: {
      tfGotMajority: 65536,
      tfLostMajority: 131072,
      tfTestSuite: 2147483648
    },
    NFTokenCreateOffer: {
      tfSellNFToken: 1
    },
    NFTokenMint: {
      tfBurnable: 1,
      tfOnlyXRP: 2,
      tfStrongTSH: 32768,
      tfTransferable: 8,
      tfTrustLine: 4
    },
    OfferCreate: {
      tfFillOrKill: 262144,
      tfImmediateOrCancel: 131072,
      tfPassive: 65536,
      tfSell: 524288
    },
    Payment: {
      tfLimitQuality: 262144,
      tfNoRippleDirect: 65536,
      tfPartialPayment: 131072
    },
    PaymentChannelClaim: {
      tfClose: 131072,
      tfRenew: 65536
    },
    TrustSet: {
      tfClearFreeze: 2097152,
      tfClearNoRipple: 262144,
      tfSetFreeze: 1048576,
      tfSetNoRipple: 131072,
      tfSetfAuth: 65536
    },
    URITokenMint: {
      tfBurnable: 1
    },
    Universal: {
      tfFullyCanonicalSig: 2147483648
    }
  },
  TRANSACTION_FLAGS_INDICES: {
    AccountSet: {
      asfAccountTxnID: 5,
      asfAuthorizedNFTokenMinter: 10,
      asfDefaultRipple: 8,
      asfDepositAuth: 9,
      asfDisableMaster: 4,
      asfDisallowIncomingCheck: 13,
      asfDisallowIncomingNFTokenOffer: 12,
      asfDisallowIncomingPayChan: 14,
      asfDisallowIncomingRemit: 16,
      asfDisallowIncomingTrustline: 15,
      asfDisallowXRP: 3,
      asfGlobalFreeze: 7,
      asfNoFreeze: 6,
      asfRequireAuth: 2,
      asfRequireDest: 1,
      asfTshCollect: 11
    }
  },
  TRANSACTION_RESULTS: {
    tecAMM_BALANCE: 163,
    tecAMM_FAILED_BID: 167,
    tecAMM_FAILED_DEPOSIT: 164,
    tecAMM_FAILED_VOTE: 168,
    tecAMM_FAILED_WITHDRAW: 165,
    tecAMM_INVALID_TOKENS: 166,
    tecAMM_UNFUNDED: 162,
    tecBAD_XCHAIN_TRANSFER_ISSUE: 171,
    tecCANT_ACCEPT_OWN_NFTOKEN_OFFER: 158,
    tecCLAIM: 100,
    tecCRYPTOCONDITION_ERROR: 146,
    tecDIR_FULL: 121,
    tecDST_TAG_NEEDED: 143,
    tecDUPLICATE: 149,
    tecEXPIRED: 148,
    tecFAILED_PROCESSING: 105,
    tecFROZEN: 137,
    tecHAS_OBLIGATIONS: 151,
    tecHOOK_REJECTED: 153,
    tecINSUFFICIENT_FUNDS: 159,
    tecINSUFFICIENT_PAYMENT: 161,
    tecINSUFFICIENT_RESERVE: 141,
    tecINSUFF_FEE: 136,
    tecINSUF_RESERVE_LINE: 122,
    tecINSUF_RESERVE_OFFER: 123,
    tecINSUF_RESERVE_SELLER: 187,
    tecINTERNAL: 144,
    tecINVARIANT_FAILED: 147,
    tecKILLED: 150,
    tecLAST_POSSIBLE_ENTRY: 255,
    tecMAX_SEQUENCE_REACHED: 154,
    tecNEED_MASTER_KEY: 142,
    tecNFTOKEN_BUY_SELL_MISMATCH: 156,
    tecNFTOKEN_OFFER_TYPE_MISMATCH: 157,
    tecNO_ALTERNATIVE_KEY: 130,
    tecNO_AUTH: 134,
    tecNO_DST: 124,
    tecNO_DST_INSUF_NATIVE: 125,
    tecNO_ENTRY: 140,
    tecNO_ISSUER: 133,
    tecNO_LINE: 135,
    tecNO_LINE_INSUF_RESERVE: 126,
    tecNO_LINE_REDUNDANT: 127,
    tecNO_PERMISSION: 139,
    tecNO_REGULAR_KEY: 131,
    tecNO_SUITABLE_NFTOKEN_PAGE: 155,
    tecNO_TARGET: 138,
    tecOBJECT_NOT_FOUND: 160,
    tecOVERSIZE: 145,
    tecOWNERS: 132,
    tecPATH_DRY: 128,
    tecPATH_PARTIAL: 101,
    tecPRECISION_LOSS: 170,
    tecREQUIRES_FLAG: 169,
    tecTOO_SOON: 152,
    tecUNFUNDED: 129,
    tecUNFUNDED_ADD: 102,
    tecUNFUNDED_OFFER: 103,
    tecUNFUNDED_PAYMENT: 104,
    tecXCHAIN_ACCOUNT_CREATE_PAST: 182,
    tecXCHAIN_ACCOUNT_CREATE_TOO_MANY: 183,
    tecXCHAIN_BAD_CLAIM_ID: 173,
    tecXCHAIN_BAD_PUBLIC_KEY_ACCOUNT_PAIR: 186,
    tecXCHAIN_CLAIM_NO_QUORUM: 174,
    tecXCHAIN_CREATE_ACCOUNT_NONXRP_ISSUE: 176,
    tecXCHAIN_INSUFF_CREATE_AMOUNT: 181,
    tecXCHAIN_NO_CLAIM_ID: 172,
    tecXCHAIN_NO_SIGNERS_LIST: 179,
    tecXCHAIN_PAYMENT_FAILED: 184,
    tecXCHAIN_PROOF_UNKNOWN_KEY: 175,
    tecXCHAIN_REWARD_MISMATCH: 178,
    tecXCHAIN_SELF_COMMIT: 185,
    tecXCHAIN_SENDING_ACCOUNT_MISMATCH: 180,
    tecXCHAIN_WRONG_CHAIN: 177,
    tefALREADY: -198,
    tefBAD_ADD_AUTH: -197,
    tefBAD_AUTH: -196,
    tefBAD_AUTH_MASTER: -183,
    tefBAD_LEDGER: -195,
    tefBAD_QUORUM: -185,
    tefBAD_SIGNATURE: -186,
    tefCREATED: -194,
    tefEXCEPTION: -193,
    tefFAILURE: -199,
    tefINTERNAL: -192,
    tefINVARIANT_FAILED: -182,
    tefMASTER_DISABLED: -188,
    tefMAX_LEDGER: -187,
    tefNFTOKEN_IS_NOT_TRANSFERABLE: -179,
    tefNONDIR_EMIT: -176,
    tefNOT_MULTI_SIGNING: -184,
    tefNO_AUTH_REQUIRED: -191,
    tefNO_TICKET: -180,
    tefPAST_IMPORT_SEQ: -178,
    tefPAST_IMPORT_VL_SEQ: -177,
    tefPAST_SEQ: -190,
    tefTOO_BIG: -181,
    tefWRONG_PRIOR: -189,
    telBAD_DOMAIN: -398,
    telBAD_PATH_COUNT: -397,
    telBAD_PUBLIC_KEY: -396,
    telCAN_NOT_QUEUE: -392,
    telCAN_NOT_QUEUE_BALANCE: -391,
    telCAN_NOT_QUEUE_BLOCKED: -389,
    telCAN_NOT_QUEUE_BLOCKS: -390,
    telCAN_NOT_QUEUE_FEE: -388,
    telCAN_NOT_QUEUE_FULL: -387,
    telCAN_NOT_QUEUE_IMPORT: -381,
    telFAILED_PROCESSING: -395,
    telIMPORT_VL_KEY_NOT_RECOGNISED: -382,
    telINSUF_FEE_P: -394,
    telLOCAL_ERROR: -399,
    telNETWORK_ID_MAKES_TX_NON_CANONICAL: -384,
    telNON_LOCAL_EMITTED_TXN: -383,
    telNO_DST_PARTIAL: -393,
    telREQUIRES_NETWORK_ID: -385,
    telWRONG_NETWORK: -386,
    temAMM_BAD_TOKENS: -261,
    temBAD_AMOUNT: -298,
    temBAD_CURRENCY: -297,
    temBAD_EXPIRATION: -296,
    temBAD_FEE: -295,
    temBAD_ISSUER: -294,
    temBAD_LIMIT: -293,
    temBAD_NFTOKEN_TRANSFER_FEE: -262,
    temBAD_OFFER: -292,
    temBAD_PATH: -291,
    temBAD_PATH_LOOP: -290,
    temBAD_QUORUM: -271,
    temBAD_REGKEY: -289,
    temBAD_SEND_NATIVE_LIMIT: -288,
    temBAD_SEND_NATIVE_MAX: -287,
    temBAD_SEND_NATIVE_NO_DIRECT: -286,
    temBAD_SEND_NATIVE_PARTIAL: -285,
    temBAD_SEND_NATIVE_PATHS: -284,
    temBAD_SEQUENCE: -283,
    temBAD_SIGNATURE: -282,
    temBAD_SIGNER: -272,
    temBAD_SRC_ACCOUNT: -281,
    temBAD_TICK_SIZE: -269,
    temBAD_TRANSFER_RATE: -280,
    temBAD_WEIGHT: -270,
    temCANNOT_PREAUTH_SELF: -267,
    temDISABLED: -273,
    temDST_IS_SRC: -279,
    temDST_NEEDED: -278,
    temHOOK_DATA_TOO_LARGE: -253,
    temINVALID: -277,
    temINVALID_ACCOUNT_ID: -268,
    temINVALID_COUNT: -266,
    temINVALID_FLAG: -276,
    temMALFORMED: -299,
    temREDUNDANT: -275,
    temRIPPLE_EMPTY: -274,
    temSEQ_AND_TICKET: -263,
    temUNCERTAIN: -265,
    temUNKNOWN: -264,
    temXCHAIN_BAD_PROOF: -259,
    temXCHAIN_BRIDGE_BAD_ISSUES: -258,
    temXCHAIN_BRIDGE_BAD_MIN_ACCOUNT_CREATE_AMOUNT: -256,
    temXCHAIN_BRIDGE_BAD_REWARD_AMOUNT: -255,
    temXCHAIN_BRIDGE_NONDOOR_OWNER: -257,
    temXCHAIN_EQUAL_DOOR_ACCOUNTS: -260,
    temXCHAIN_TOO_MANY_ATTESTATIONS: -254,
    terFUNDS_SPENT: -98,
    terINSUF_FEE_B: -97,
    terLAST: -91,
    terNO_ACCOUNT: -96,
    terNO_AMM: -87,
    terNO_AUTH: -95,
    terNO_HOOK: -86,
    terNO_LINE: -94,
    terNO_RIPPLE: -90,
    terOWNERS: -93,
    terPRE_SEQ: -92,
    terPRE_TICKET: -88,
    terQUEUED: -89,
    terRETRY: -99,
    tesPARTIAL: 1,
    tesSUCCESS: 0
  },
  TRANSACTION_TYPES: {
    AccountDelete: 21,
    AccountSet: 3,
    Amendment: 100,
    CheckCancel: 18,
    CheckCash: 17,
    CheckCreate: 16,
    ClaimReward: 98,
    Contract: 9,
    DepositPreauth: 19,
    EmitFailure: 103,
    EscrowCancel: 4,
    EscrowCreate: 1,
    EscrowFinish: 2,
    Fee: 101,
    GenesisMint: 96,
    Import: 97,
    Invalid: -1,
    Invoke: 99,
    NFTokenAcceptOffer: 29,
    NFTokenBurn: 26,
    NFTokenCancelOffer: 28,
    NFTokenCreateOffer: 27,
    NFTokenMint: 25,
    NicknameSet: 6,
    OfferCancel: 8,
    OfferCreate: 7,
    Payment: 0,
    PaymentChannelClaim: 15,
    PaymentChannelCreate: 13,
    PaymentChannelFund: 14,
    Remit: 95,
    SetHook: 22,
    SetRegularKey: 5,
    SignerListSet: 12,
    SpinalTap: 11,
    TicketCreate: 10,
    TrustSet: 20,
    UNLModify: 102,
    UNLReport: 104,
    URITokenBurn: 46,
    URITokenBuy: 47,
    URITokenCancelSellOffer: 49,
    URITokenCreateSellOffer: 48,
    URITokenMint: 45
  },
  TYPES: {
    AccountID: 8,
    Amount: 6,
    Blob: 7,
    Done: -1,
    Hash128: 4,
    Hash160: 17,
    Hash256: 5,
    LedgerEntry: 10002,
    Metadata: 10004,
    NotPresent: 0,
    PathSet: 18,
    STArray: 15,
    STObject: 14,
    Transaction: 10001,
    UInt16: 1,
    UInt192: 21,
    UInt32: 2,
    UInt384: 22,
    UInt512: 23,
    UInt64: 3,
    UInt8: 16,
    UInt96: 20,
    Unknown: -2,
    Validation: 10003,
    Vector256: 19
  },
  features: {
    '00C1FC4A53E60AB02C864641002B3172F38677E29C26C5406685179B37E1EDAC': {
      enabled: true,
      name: 'RequireFullyCanonicalSig',
      supported: true
    },
    '0285B7E5E08E1A8E4C15636F0591D87F73CB6A7B6452A932AD72BBC8E5D1CBE3': {
      enabled: false,
      name: 'fixNFTokenDirV1',
      supported: true,
      vetoed: 'Obsolete'
    },
    '07D43DCE529B15A10827E5E04943B496762F9A88E3268269D69C44BE49E21104': {
      enabled: false,
      name: 'Escrow',
      supported: true,
      vetoed: 'Obsolete'
    },
    '08DE7D96082187F6E6578530258C77FAABABE4C20474BDB82F04B021F1A68647': {
      enabled: false,
      name: 'PayChan',
      supported: true,
      vetoed: 'Obsolete'
    },
    '0D8BF22FF7570D58598D1EF19EBB6E142AD46E59A223FD3816262FBB69345BEA': {
      enabled: true,
      name: 'Remit',
      supported: true
    },
    '1562511F573A19AE9BD103B5D6B9E01B3B46805AEC5D3C4805C902B514399146': {
      enabled: false,
      name: 'CryptoConditions',
      supported: true,
      vetoed: 'Obsolete'
    },
    '157D2D480E006395B76F948E3E07A45A05FE10230D88A7993C71F97AE4B1F2D1': {
      enabled: true,
      name: 'Checks',
      supported: true
    },
    '1D3463A5891F9E589C5AE839FFAC4A917CE96197098A1EF22304E1BC5B98A454': {
      enabled: false,
      name: 'fix1528',
      supported: true,
      vetoed: 'Obsolete'
    },
    '1F4AFA8FA1BC8827AD4C0F682C03A8B671DCDF6B5C4DE36D44243A684103EF88': {
      enabled: true,
      name: 'HardenedValidations',
      supported: true
    },
    '215181D23BF5C173314B5FDB9C872C92DE6CC918483727DE037C0C13E7E6EE9D': {
      enabled: true,
      name: 'fixXahauV2',
      supported: true
    },
    '25BA44241B3BD880770BFA4DA21C7180576831855368CBEC6A3154FDE4A7676E': {
      enabled: true,
      name: 'fix1781',
      supported: true
    },
    '2CD5286D8D687E98B41102BDD797198E81EA41DF7BD104E6561FEB104EFF2561': {
      enabled: true,
      name: 'fixTakerDryOfferRemoval',
      supported: true
    },
    '2E2FB9CF8A44EB80F4694D38AADAE9B8B7ADAFD2F092E10068E61C98C4F092B0': {
      enabled: false,
      name: 'fixUniversalNumber',
      supported: true,
      vetoed: true
    },
    '3012E8230864E95A58C60FD61430D7E1B4D3353195F2981DC12B0C7C0950FFAC': {
      enabled: true,
      name: 'FlowCross',
      supported: true
    },
    '30CD365592B8EE40489BA01AE2F7555CAC9C983145871DC82A42A31CF5BAE7D9': {
      enabled: false,
      name: 'DeletableAccounts',
      supported: true,
      vetoed: true
    },
    '32A122F1352A4C7B3A6D790362CC34749C5E57FCE896377BFDC6CCD14F6CD627': {
      enabled: false,
      name: 'NonFungibleTokensV1_1',
      supported: true,
      vetoed: true
    },
    '36799EA497B1369B170805C078AEFE6188345F9B3E324C21E9CA3FF574E3C3D6': {
      enabled: false,
      name: 'fixNFTokenNegOffer',
      supported: true,
      vetoed: 'Obsolete'
    },
    '3C43D9A973AA4443EF3FC38E42DD306160FBFFDAB901CD8BAA15D09F2597EB87': {
      enabled: false,
      name: 'NonFungibleTokensV1',
      supported: true,
      vetoed: 'Obsolete'
    },
    '3CBC5C4E630A1B82380295CDA84B32B49DD066602E74E39B85EF64137FA65194': {
      enabled: true,
      name: 'DepositPreauth',
      supported: true
    },
    '42426C4D4F1009EE67080A9B7965B44656D7714D104A72F9B4369F97ABF044EE': {
      enabled: false,
      name: 'FeeEscalation',
      supported: true,
      vetoed: 'Obsolete'
    },
    '42EEA5E28A97824821D4EF97081FE36A54E9593C6E4F20CBAE098C69D2E072DC': {
      enabled: false,
      name: 'fix1373',
      supported: true,
      vetoed: 'Obsolete'
    },
    '42F8B586B357ABBAAAA1C733C3E7D3B75761395340D0CDF600179E8737E22478': {
      enabled: true,
      name: 'BalanceRewards',
      supported: true
    },
    '452F5906C46D46F407883344BFDD90E672B672C5E9943DB4891E3A34FEEEB9DB': {
      enabled: true,
      name: 'fixSTAmountCanonicalize',
      supported: true
    },
    '47C3002ABA31628447E8E9A8B315FAA935CE30183F9A9B86845E469CA2CDC3DF': {
      enabled: true,
      name: 'DisallowIncoming',
      supported: true
    },
    '4B8466415FAB32FFA89D9DCBE166A42340115771DF611A7160F8D7439C87ECD8': {
      enabled: true,
      name: 'fixNSDelete',
      supported: true
    },
    '4C499D17719BB365B69010A436B64FD1A82AAB199FC1CEB06962EBD01059FB09': {
      enabled: true,
      name: 'fixXahauV1',
      supported: true
    },
    '4C97EBA926031A7CF7D7B36FDE3ED66DDA5421192D63DE53FFB46E43B9DC8373': {
      enabled: false,
      name: 'MultiSign',
      supported: true,
      vetoed: 'Obsolete'
    },
    '4F46DF03559967AC60F2EB272FEFE3928A7594A45FF774B87A7E540DB0F8F068': {
      enabled: true,
      name: 'fixAmendmentMajorityCalc',
      supported: true
    },
    '532651B4FD58DF8922A49BA101AB3E996E5BFBF95A913B3E392504863E63B164': {
      enabled: false,
      name: 'TickSize',
      supported: true,
      vetoed: 'Obsolete'
    },
    '586480873651E106F1D6339B0C4A8945BA705A777F3F4524626FF1FC07EFE41D': {
      enabled: true,
      name: 'MultiSignReserve',
      supported: true
    },
    '58BE9B5968C4DA7C59BA900961828B113E5490699B21877DEF9A31E9D0FE5D5F': {
      enabled: true,
      name: 'fix1623',
      supported: true
    },
    '5D08145F0A4983F23AFFFF514E83FAD355C5ABFBB6CAB76FB5BC8519FF5F33BE': {
      enabled: true,
      name: 'fix1515',
      supported: true
    },
    '621A0B264970359869E3C0363A899909AAB7A887C8B73519E4ECF952D33258A8': {
      enabled: true,
      name: 'fixPayChanRecipientOwnerDir',
      supported: true
    },
    '6781F8368C4771B83E8B821D88F580202BCB4228075297B19E4FDC5233F1EFDC': {
      enabled: false,
      name: 'TrustSetAuth',
      supported: true,
      vetoed: 'Obsolete'
    },
    '67A34F2CF55BFC0F93AACD5B281413176FEE195269FA6D95219A2DF738671172': {
      enabled: true,
      name: 'fix1513',
      supported: true
    },
    '6C92211186613F9647A89DFFBAB8F94C99D4C7E956D495270789128569177DA1': {
      enabled: false,
      name: 'fix1512',
      supported: true,
      vetoed: 'Obsolete'
    },
    '6E739F4F8B07BED29FC9FF440DA3C301CD14A180DF45819F658FEC2F7DE31427': {
      enabled: true,
      name: 'XahauGenesis',
      supported: true
    },
    '7117E2EC2DBF119CA55181D69819F1999ECEE1A0225A7FD2B9ED47940968479C': {
      enabled: true,
      name: 'fix1571',
      supported: true
    },
    '73761231F7F3D94EC3D8C63D91BDD0D89045C6F71B917D1925C01253515A6669': {
      enabled: false,
      name: 'fixNonFungibleTokensV1_2',
      supported: true,
      vetoed: true
    },
    '740352F2412A9909880C23A559FCECEDA3BE2126FED62FC7660D628A06927F11': {
      enabled: true,
      name: 'Flow',
      supported: true
    },
    '75A7E01C505DD5A179DFE3E000A9B6F1EDDEB55A12F95579A23E15B15DC8BE5A': {
      enabled: true,
      name: 'ImmediateOfferKilled',
      supported: true
    },
    '7CA0426E7F411D39BB014E57CD9E08F61DE1750F0D41FCD428D9FB80BB7596B0': {
      enabled: true,
      name: 'ZeroB2M',
      supported: true
    },
    '8063140E9260799D6716756B891CEC3E7006C4E4F277AB84670663A88F94B9C4': {
      enabled: true,
      name: 'fixPageCap',
      supported: true
    },
    '86E83A7D2ECE3AD5FA87AB2195AE015C950469ABF0B72EAACED318F74886AE90': {
      enabled: false,
      name: 'CryptoConditionsSuite',
      supported: true,
      vetoed: 'Obsolete'
    },
    '88693F108C3CD8A967F3F4253A32DEF5E35F9406ACD2A11B88B11D90865763A9': {
      enabled: true,
      name: 'fix240911',
      supported: true
    },
    '89308AF3B8B10B7192C4E613E1D2E4D9BA64B2EE2D5232402AE82A6A7220D953': {
      enabled: true,
      name: 'fixQualityUpperBound',
      supported: true
    },
    '8F81B066ED20DAECA20DF57187767685EEF3980B228E0667A650BAF24426D3B4': {
      enabled: true,
      name: 'fixCheckThreading',
      supported: true
    },
    '919857E4B902A20216E4819B9BD9FD1FD19A66ECF63151C18A4C48C873DB9578': {
      enabled: true,
      name: 'PaychanAndEscrowForTokens',
      supported: true
    },
    '93E516234E35E08CA689FA33A6D38E103881F8DCB53023F728C307AA89D515A7': {
      enabled: true,
      name: 'XRPFees',
      supported: true
    },
    '955DF3FA5891195A9DAEFA1DDC6BB244B545DDE1BAA84CBB25D5F12A8DA68A0C': {
      enabled: true,
      name: 'TicketBatch',
      supported: true
    },
    '98DECF327BF79997AEC178323AD51A830E457BFC6D454DAF3E46E5EC42DC619F': {
      enabled: true,
      name: 'CheckCashMakesTrustLine',
      supported: true
    },
    AE35ABDEFBDE520372B31C957020B34A7A4A9DC3115A69803A44016477C84D6E: {
      enabled: false,
      name: 'fixNFTokenRemint',
      supported: true,
      vetoed: true
    },
    AF8DF7465C338AE64B1E937D6C8DA138C0D63AD5134A68792BBBE1F63356C422: {
      enabled: true,
      name: 'FlowSortStrands',
      supported: true
    },
    B2A4DB846F0891BF2C76AB2F2ACC8F5B4EC64437135C6E56F3F859DE5FFD5856: {
      enabled: true,
      name: 'ExpandedSignerList',
      supported: true
    },
    B4D44CC3111ADD964E846FC57760C8B50FFCD5A82C86A72756F6B058DDDF96AD: {
      enabled: false,
      name: 'fix1201',
      supported: true,
      vetoed: 'Obsolete'
    },
    B4E4F5D2D6FB84DF7399960A732309C9FD530EAE5941838160042833625A6076: {
      enabled: true,
      name: 'NegativeUNL',
      supported: true
    },
    B6B3EEDC0267AB50491FDC450A398AF30DBCD977CECED8BEF2499CAB5DAC19E2: {
      enabled: true,
      name: 'fixRmSmallIncreasedQOffers',
      supported: true
    },
    B9E739B8296B4A1BB29BE990B17D66E21B62A300A909F25AC55C22D6C72E1F9D: {
      enabled: false,
      name: 'fix1523',
      supported: true,
      vetoed: 'Obsolete'
    },
    C4483A1896170C66C098DEA5B0E024309C60DC960DE5F01CD7AF986AA3D9AD37: {
      enabled: true,
      name: 'fixMasterKeyAsRegularKey',
      supported: true
    },
    CA7C02118BA27599528543DFE77BA6838D1B0F43B447D4D7F53523CE6A0E9AC2: {
      enabled: true,
      name: 'fix1543',
      supported: true
    },
    CC5ABAE4F3EC92E94A59B1908C2BE82D2228B6485C00AFF8F22DF930D89C194E: {
      enabled: false,
      name: 'SortedDirectories',
      supported: true,
      vetoed: 'Obsolete'
    },
    D686F2538F410C9D0D856788E98E3579595DAF7B38D38887F81ECAC934B06040: {
      enabled: true,
      name: 'HooksUpdate1',
      supported: true
    },
    DC9CA96AEA1DCF83E527D1AFC916EFAF5D27388ECA4060A88817C1238CAEE0BF: {
      enabled: false,
      name: 'EnforceInvariants',
      supported: true,
      vetoed: 'Obsolete'
    },
    DF8B4536989BDACE3F934F29423848B9F1D76D09BE6A1FCFE7E7F06AA26ABEAD: {
      enabled: false,
      name: 'fixRemoveNFTokenAutoTrustLine',
      supported: true,
      vetoed: true
    },
    E2E6F2866106419B88C50045ACE96368558C345566AC8F2BDF5A5B5587F0E6FA: {
      enabled: false,
      name: 'fix1368',
      supported: true,
      vetoed: 'Obsolete'
    },
    ECE6819DBA5DB528F1A241695F5A9811EF99467CDE22510954FD357780BBD078: {
      enabled: true,
      name: 'Hooks',
      supported: true
    },
    ECF412BE0964EC2E71DCF807EEEA6EA8470D3DB15173D46F28AB6E234860AC32: {
      enabled: true,
      name: 'URIToken',
      supported: true
    },
    EDB4EE4C524E16BDD91D9A529332DED08DCAAA51CC6DC897ACFA1A0ED131C5B6: {
      enabled: true,
      name: 'fix240819',
      supported: true
    },
    F5751842D26FC057B92CAA435ABF4F1428C2BCC4180D18775ADE92CB2643BBA3: {
      enabled: true,
      name: 'Import',
      supported: true
    },
    F64E1EABBE79D55B3BB82020516CEC2C582A98A6BFE20FBE9BB6A0D233418064: {
      enabled: true,
      name: 'DepositAuth',
      supported: true
    },
    FBD513F1B893AC765B78F250E6FFA6A11B573209D1842ADC787C850696741288: {
      enabled: true,
      name: 'fix1578',
      supported: true
    }
  },
  hash: 'D6FF88B5F4CF3F288CDE28D4F3FAF2CBF364792A118576000F046FF5816B3EAD',
  native_currency_code: 'XAH',
  status: 'success'
}
*/

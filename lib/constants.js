module.exports = {
  APPROVED_STATUS: 'approved',
  CANCELLED_STATUS: 'cancelled',
  CONFIRMED_STATUS: 'confirmed',
  DROPPED_STATUS: 'dropped',
  FAILED_STATUS: 'failed',
  REJECTED_STATUS: 'rejected',
  SIGNED_STATUS: 'signed',
  SUBMITTED_STATUS: 'submitted',
  UNAPPROVED_STATUS: 'unapproved',

  TOKEN_METHOD_TRANSFER: 'transfer',
  TOKEN_METHOD_APPROVE: 'approve',
  TOKEN_METHOD_TRANSFER_FROM: 'transferfrom',

  APPROVE_ACTION_KEY: 'approve',
  CANCEL_ATTEMPT_ACTION_KEY: 'cancelAttempt',
  CONTRACT_INTERACTION_KEY: 'contractInteraction',
  DEPLOY_CONTRACT_ACTION_KEY: 'contractDeployment',
  SEND_ETHER_ACTION_KEY: 'sentEther',
  SEND_TOKEN_ACTION_KEY: 'sentTokens',
  SIGNATURE_REQUEST_KEY: 'signatureRequest',
  TRANSFER_FROM_ACTION_KEY: 'transferFrom',

  TRANSACTION_TYPE_SHAPESHIFT: 'shapeshift',

  TRANSACTION_TYPE_CANCEL: 'cancel',
  TRANSACTION_TYPE_RETRY: 'retry',
  TRANSACTION_TYPE_STANDARD: 'standard',
  TRANSACTION_STATUS_APPROVED: 'approved',
  TRANSACTION_STATUS_CONFIRMED: 'confirmed',

  INSUFFICIENT_FUNDS_ERROR_KEY: 'insufficientFunds',
  GAS_LIMIT_TOO_LOW_ERROR_KEY: 'gasLimitTooLow',
  TRANSACTION_ERROR_KEY: 'transactionError',
  TRANSACTION_NO_CONTRACT_ERROR_KEY: 'transactionErrorNoContract',
}
